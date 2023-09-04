const express = require("express");
const {
  addAdmin,
  searchAdmin,
  updateAdmin,
  removeAdmin,
  loginAdmin,
} = require("../controller");

const adminsRoutes = express.Router();

adminsRoutes.post("/", addAdmin);
adminsRoutes.delete("/:id", removeAdmin);
adminsRoutes.get("/", searchAdmin);
adminsRoutes.put("/:id", updateAdmin);
adminsRoutes.post("/login", loginAdmin);

module.exports = { adminsRoutes };
