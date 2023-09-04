const express = require("express");
const {
  addOrder,
  updateOrder,
  searchOrder,
  removeOrder,
} = require("../controller");

const ordersRoutes = express.Router();

ordersRoutes.post("/", addOrder);
ordersRoutes.put("/:id", updateOrder);
ordersRoutes.get("/", searchOrder);
ordersRoutes.delete("/:id", removeOrder);

module.exports = { ordersRoutes };
