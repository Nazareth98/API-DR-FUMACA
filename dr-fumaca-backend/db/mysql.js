const Sequelize = require("sequelize");

const sequelize = new Sequelize("dr_fumaca_schema", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Conexão com Banco de Dados realizada com sucesso!"))
  .catch(() => console.log("ERROR: Conexão com Banco de Dados não realizada!"));

module.exports = {
  sequelize,
};
