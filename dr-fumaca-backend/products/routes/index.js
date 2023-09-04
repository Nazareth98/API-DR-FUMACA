const express = require("express");
const {
  addProduct,
  updateProduct,
  searchProduct,
  removeProduct,
} = require("../controller");

const productsRoutes = express.Router();

productsRoutes.post("/", addProduct);
productsRoutes.put("/:id", updateProduct);
productsRoutes.get("/", searchProduct);
productsRoutes.delete("/:id", removeProduct);

module.exports = { productsRoutes };
