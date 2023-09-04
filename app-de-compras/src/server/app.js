const express = require("express");
const cors = require("cors");
const app = express();
const { itemsArray } = require("../items");

const PORT = 3090;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const addedItems = itemsArray.map((item) => item);
  console.log(addedItems);
  return res.status(200).json(addedItems);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
