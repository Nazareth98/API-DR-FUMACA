const express = require("express");
const { productsRoutes } = require("./products/routes");
const { categoriesRoutes } = require("./categories/routes");
const { ordersRoutes } = require("./orders/routes");
const { customersRoutes } = require("./customers/routes");
const { adminsRoutes } = require("./admins/routes");
const routes = express.Router();

routes.use("/produtos", productsRoutes);
routes.use("/categorias", categoriesRoutes);
routes.use("/vendas", ordersRoutes);
routes.use("/clientes", customersRoutes);
routes.use("/admins", adminsRoutes);

module.exports = {
  routes,
};
