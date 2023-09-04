const express = require("express");
const {
  addCustomer,
  searchCustomer,
  updateCustomer,
  removeCustomer,
  loginCustomer,
  checkToken,
} = require("../controller");
const { CUSTOMER, ADDRESS } = require("../../models");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { formatToCustomerData } = require("../../utils/formatRequest");
const { formatToJsonCustomer } = require("../../utils/formatResponse");

dotenv.config();

const customersRoutes = express.Router();

customersRoutes.post("/", addCustomer);
customersRoutes.delete("/:id", removeCustomer);
customersRoutes.get("/", searchCustomer);
customersRoutes.put("/:id", updateCustomer);
customersRoutes.post("/login", loginCustomer);

// private route
customersRoutes.get("/:id", async (req, res) => {});

// public routes
customersRoutes.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ message: "Email é obrigatório!" });
  }
  if (!password) {
    return res.status(422).json({ message: "Senha é obrigatória!" });
  }

  // check if user exists
  const customerResult = await CUSTOMER.findOne({
    where: { EMAIL: email },
    include: [ADDRESS],
  });
  if (!customerResult) {
    return res.status(404).json({
      success: false,
      message: "Não foi possível localizar o email informado.",
    });
  }
  const formattedCustomer = formatToJsonCustomer(customerResult.dataValues);
  // check if password match
  const checkPassword = await bcrypt.compare(password, customerResult.SENHA);
  if (!checkPassword) {
    return res.status(422).json({ message: "Senha incorreta!" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: formattedCustomer.customerId,
        email: customerResult.email,
      },
      secret
    );

    return res
      .status(200)
      .json({ message: "Autenticação realizada com sucesso!", token: token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Aconteceu um erro no serivdor, tente novamente mais tarde!",
    });
  }
});
module.exports = { customersRoutes };
