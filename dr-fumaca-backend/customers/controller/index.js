const { CUSTOMER, ADDRESS } = require("../../models");
const { checkFieldsCustomer } = require("../be");
const { formatToJsonCustomer } = require("../../utils/formatResponse");
const { formatToCustomerData } = require("../../utils/formatRequest");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const secret = process.env.PRIVATE_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user.customerId, email: user.email }, secret, {
    expiresIn: "500",
  });
};

const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  try {
    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido!" });
  }
};

const addCustomer = async (req, res) => {
  const body = req.body;
  const fieldsAreValid = checkFieldsCustomer(body, "post");

  if (fieldsAreValid) {
    const newCustomer = formatToCustomerData(body);

    const cpfExists = await CUSTOMER.findOne({
      where: { CPF: newCustomer.CPF },
    });
    if (cpfExists) {
      return res.status(400).json({
        message: "Já existe uma conta com o CPF cadastrado.",
      });
    }

    const emailExists = await CUSTOMER.findOne({
      where: { EMAIL: newCustomer.EMAIL },
    });
    if (emailExists) {
      return res.status(400).json({
        message: "Já existe uma conta com o EMAIL cadastrado.",
      });
    }

    try {
      const customerResult = await CUSTOMER.create(newCustomer);
      const customerId = customerResult.dataValues.ID_CLIENTE;
      const newAddress = { ID_CLIENTE: customerId, ...newCustomer.ENDERECO };
      const addressResult = await ADDRESS.create(newAddress);
      return res.json({
        message: "Produto adicionado com sucesso",
        result: {
          newAddress: addressResult.dataValues,
          ...customerResult.dataValues,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "Houve um erro ao adicionar um novo CLIENTE!",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  const body = req.body;
  const fieldsAreValid = checkFieldsCustomer(body, "update");

  if (fieldsAreValid === true) {
    const updateCustomer = formatToCustomerData(body);
    try {
      const customer = await CUSTOMER.findByPk(customerId, {
        include: ADDRESS,
      });
      if (!customer) {
        return res.status(404).json({
          message: "Não foi possível localizar o CLIENTE.",
        });
      }

      await customer.update(updateCustomer);

      if (updateCustomer.ENDERECO) {
        for (const customerUpdateData of updateCustomer.ENDERECO) {
          const existingAddress = customer.TB_ENDERECOs.find(
            (customer) =>
              customer.ID_ENDERECO === customerUpdateData.ID_ENDERECO
          );
          if (existingAddress) {
            await existingAddress.update({
              CEP: customerUpdateData.CEP,
              RUA: customerUpdateData.RUA,
              NUMERO: customerUpdateData.NUMERO,
              BAIRRO: customerUpdateData.BAIRRO,
              COMPLEMENTO: customerUpdateData.COMPLEMENTO,
              CIDADE: customerUpdateData.CIDADE,
              UF: customerUpdateData.UF,
              STATUS: customerUpdateData.STATUS,
            });
          } else {
            await ADDRESS.create({
              CEP: customerUpdateData.CEP,
              RUA: customerUpdateData.RUA,
              NUMERO: customerUpdateData.NUMERO,
              BAIRRO: customerUpdateData.BAIRRO,
              COMPLEMENTO: customerUpdateData.COMPLEMENTO,
              CIDADE: customerUpdateData.CIDADE,
              UF: customerUpdateData.UF,
              STATUS: customerUpdateData.STATUS,
              ID_CLIENTE: customerId,
            });
          }

          const addressIdsInUpdate = updateCustomer.ENDERECO.map(
            (address) => address.ID_ENDERECO
          );

          for (const address of customer.TB_ENDERECOs) {
            if (!addressIdsInUpdate.includes(address.ID_ENDERECO)) {
              await address.destroy();
            }
          }
        }
      }
      console.log("Cliente atualizado com sucesso!");
      return res.json({
        message: "CLIENTE atualizado com sucesso.",
        updatedProduct: customer,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Ocorreu um erro ao atualizar o CLIENTE.",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const searchCustomer = async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const customerResult = await CUSTOMER.findOne({
        where: { ID_CLIENTE: id },
        include: [ADDRESS],
      });

      if (!customerResult) {
        return res.status(404).json({ message: "CLIENTE não encontrado." });
      }
      const formatedCustomer = formatToJsonCustomer(customerResult.dataValues);
      return res.status(200).json(formatedCustomer);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao buscar o CLIENTE." });
    }
  }

  try {
    const customerResult = await CUSTOMER.findAll({
      include: [ADDRESS],
    });
    const customerPromise = customerResult.map((item) => {
      return formatToJsonCustomer(item.dataValues);
    });
    const customers = await Promise.all(customerPromise);
    return res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar CLIENTES." });
  }
};

const removeCustomer = async (req, res) => {
  const { id } = req.parms;

  try {
    const customer = await CUSTOMER.findOne({ where: { ID_CLIENTE: id } });
    if (!customer) {
      return res.status(404).json({ message: "CLIENTE não encontrado" });
    }

    await ADDRESS.destroy({ where: { ID_CLIENTE: id } });

    await customer.destroy();
    return res.json({
      message: "CLIENTE e ENDEREÇOS relacionados foram excluídos com sucesso.",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao deletar CLIENTE" });
  }
};

const loginCustomer = async (req, res) => {
  const { email, password, token } = req.body;
  // Se um token for fornecido, verifique-o
  if (token) {
    verifyToken(req, res, async () => {
      try {
        console.log(req.user, "dentro da chamada da função verifyToken");
        // O token é válido, você pode recuperar os dados do usuário do token decodificado
        const decodedToken = req.user;

        const customerResult = await CUSTOMER.findOne({
          where: { EMAIL: decodedToken.email }, // Recupere o email do token decodificado
          include: [ADDRESS],
        });

        if (!customerResult) {
          return res.json({
            success: false,
            message: "Não foi possível localizar o email informado.",
          });
        }

        // Não há necessidade de verificar a senha, pois o usuário já foi autenticado pelo token

        const formattedCustomer = formatToJsonCustomer(
          customerResult.dataValues
        );

        return res.json({
          success: true,
          user: formattedCustomer,
          token: token, // Envie o mesmo token na resposta
        });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Erro no servidor" });
      }
    });
  } else {
    // Se não houver token, faça a autenticação com email e senha
    try {
      const customerResult = await CUSTOMER.findOne({
        where: { EMAIL: email },
        include: [ADDRESS],
      });

      if (!customerResult) {
        return res.json({
          success: false,
          message: "Não foi possível localizar o email informado.",
        });
      }

      const storedHashedPassword = customerResult.SENHA;
      const userInputPassword = password;
      const passwordMatches = await bcrypt.compare(
        userInputPassword,
        storedHashedPassword
      );

      if (passwordMatches) {
        const formattedCustomer = formatToJsonCustomer(
          customerResult.dataValues
        );

        // Gere um novo token JWT, se desejar, e envie na resposta
        const token = generateToken(customerResult.dataValues);
        console.log(token);
        return res.json({
          success: true,
          user: formattedCustomer,
          token: token, // Envie o token na resposta
        });
      } else {
        return res.json({ success: false, message: "Senha incorreta" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Erro no servidor" });
    }
  }
};

module.exports = {
  addCustomer,
  searchCustomer,
  updateCustomer,
  removeCustomer,
  loginCustomer,
  checkToken,
};
