const express = require("express");
const app = express();
const PORT = 3090;
const { itemsArray } = require("../items");

// Definir rota de teste
app.get("/", (req, res) => {
  const addedItems = itemsArray.map((item) => item.name);

  res.send(addedItems);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
