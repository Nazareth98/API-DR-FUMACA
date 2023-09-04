const express = require("express");
const {
  addCategory,
  removeCategory,
  searchCategory,
} = require("../controller");

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", addCategory);
categoriesRoutes.delete("/:id", removeCategory);
categoriesRoutes.get("/", searchCategory);

module.exports = { categoriesRoutes };
