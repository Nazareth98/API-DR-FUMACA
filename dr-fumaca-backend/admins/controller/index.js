const { ADMIN } = require("../../models"); // Certifique-se de importar o modelo correto
const { checkFieldsAdmin } = require("../be"); // Importe as funções de validação, se necessário
const { formatToJsonAdmin } = require("../../utils/formatResponse"); // Importe as funções de formatação, se necessário
const { formatToAdminData } = require("../../utils/formatRequest"); // Importe as funções de formatação, se necessário
const bcrypt = require("bcrypt");

const addAdmin = async (req, res) => {
  const body = req.body;
  const fieldsAreValid = checkFieldsAdmin(body, "post");
  if (fieldsAreValid) {
    const newAdmin = formatToAdminData(body);

    try {
      const emailExists = await ADMIN.findOne({
        where: { EMAIL: newAdmin.EMAIL },
      });
      if (emailExists) {
        return res.status(400).json({
          message: "Já existe uma conta com o EMAIL cadastrado.",
        });
      }

      const adminResult = await ADMIN.create(newAdmin);
      return res.json({
        message: "ADMIN adicionado com sucesso",
        result: adminResult.dataValues,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "Houve um erro ao adicionar um novo ADMIN!",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const updateAdmin = async (req, res) => {
  const adminId = req.params.id;
  const body = req.body;
  const fieldsAreValid = checkFieldsAdmin(body, "update");

  if (fieldsAreValid) {
    const updateAdminData = {
      NOME: body.name.trim(),
      PASSWORD: body.password.trim(),
      ROLE: body.role.toUpperCase().trim(),
    };

    try {
      const admin = await ADMIN.findByPk(adminId);
      if (!admin) {
        return res.status(404).json({
          message: "Não foi possível localizar o ADMIN.",
        });
      }

      await admin.update(updateAdminData);

      console.log("ADMIN atualizado com sucesso!");
      return res.json({
        message: "ADMIN atualizado com sucesso.",
        updatedAdmin: admin.dataValues,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Ocorreu um erro ao atualizar o admin.",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const searchAdmin = async (req, res) => {
  const { id, email } = req.query;

  if (id) {
    try {
      const adminResult = await ADMIN.findOne({
        where: { ID_ADMIN: id },
      });
      if (!adminResult) {
        return res.status(404).json({ message: "ADMIN não encontrado." });
      }

      const formattedAdmin = formatToJsonAdmin(adminResult.dataValues);
      return res.status(200).json(formattedAdmin);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao buscar o ADMIN." });
    }
  }

  try {
    const adminResult = await ADMIN.findAll();
    const adminPromise = adminResult.map((item) => {
      return formatToJsonAdmin(item.dataValues);
    });
    const admins = await Promise.all(adminPromise);
    return res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar ADMINS." });
  }
};

const removeAdmin = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await ADMIN.findOne({ where: { ID_ADMIN: adminId } });
    if (!admin) {
      return res.status(404).json({ message: "ADMIN não encontrado" });
    }

    await admin.destroy();
    return res.json({
      message: "ADMIN excluído com sucesso.",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao deletar o ADMIN." });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminResult = await ADMIN.findOne({
      where: { EMAIL: email },
    });
    console.log(adminResult);

    if (!adminResult) {
      return res.json({ success: false, message: "Credenciais inválidas" });
    }

    const storedHashedPassword = adminResult.SENHA;
    const userInputPassword = password;
    const passwordMatches = await bcrypt.compare(
      userInputPassword,
      storedHashedPassword
    );

    if (passwordMatches) {
      const formattedAdmin = formatToJsonAdmin(adminResult.dataValues);
      return res.json({ success: true, user: formattedAdmin });
    } else {
      return res.json({ success: false, message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Erro no servidor" });
  }
};

module.exports = {
  addAdmin,
  searchAdmin,
  updateAdmin,
  removeAdmin,
  loginAdmin,
};
