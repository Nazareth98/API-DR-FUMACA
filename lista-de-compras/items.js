/*
  {
    name: "string",
    price: "number",
    priority: "number",
    category: "string",
    quantity: {
      month: "number",
      week: "number",
    },
  },
*/

const itemsArray = [
  {
    name: "Arroz 5Kg",
    price: 19,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Feijão",
    price: 6,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Macarrão",
    price: 4,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 6,
      week: 1,
    },
  },
  {
    name: "Óleo",
    price: 5,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 4,
      week: 1,
    },
  },
  {
    name: "Sal",
    price: 3,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Açúcar 5KG",
    price: 20,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Molho de tomate",
    price: 2.5,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 8,
      week: 2,
    },
  },
  {
    name: "Creme de leite",
    price: 2.5,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 6,
      week: 2,
    },
  },
  {
    name: "Farofa",
    price: 7,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Ovo",
    price: 20,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Farinha de trigo",
    price: 18,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Fermento de Pão",
    price: 1.5,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 8,
      week: 2,
    },
  },
  {
    name: "Leite",
    price: 5,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Tempeiros",
    price: 2,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 8,
      week: 2,
    },
  },
  {
    name: "Milho",
    price: 2,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 4,
      week: 1,
    },
  },
  {
    name: "Batata palha",
    price: 7,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Caldo de Carne/frango",
    price: 5,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Mostarda",
    price: 17,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Biscoito",
    price: 6,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Doce de Pão",
    price: 8,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Calabresa",
    price: 8,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Baccon",
    price: 10,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Alho",
    price: 3,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Cebola",
    price: 3,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Cenoura",
    price: 3,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Pimentão",
    price: 4,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Batata",
    price: 3,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Batata Doce",
    price: 3,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Salada",
    price: 3,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Banana",
    price: 3,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Detergente",
    price: 2.5,
    priority: 3,
    category: "limpeza",
    quantity: {
      month: 5,
      week: 1,
    },
  },
  {
    name: "Amaciante",
    price: 20,
    priority: 2,
    category: "limpeza",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Desinfetante",
    price: 8,
    priority: 2,
    category: "limpeza",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Sabão Líquido",
    price: 20,
    priority: 3,
    category: "limpeza",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Café",
    price: 14,
    priority: 3,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Leite Condensado",
    price: 6,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Limão",
    price: 4,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Barbecue",
    price: 17,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Sabonete",
    price: 3,
    priority: 3,
    category: "higiene",
    quantity: {
      month: 6,
      week: 2,
    },
  },
  {
    name: "Veneno",
    price: 10,
    priority: 1,
    category: "higiene",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Papel Toalha",
    price: 4,
    priority: 1,
    category: "utensílio",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Papel Higiênico",
    price: 10,
    priority: 2,
    category: "higiene",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Bolo",
    price: 4,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 3,
      week: 1,
    },
  },
  {
    name: "Veja",
    price: 6,
    priority: 1,
    category: "limpeza",
    quantity: {
      month: 2,
      week: 0,
    },
  },
  {
    name: "Chá",
    price: 4,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 2,
      week: 1,
    },
  },
  {
    name: "Pipoca",
    price: 5,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Creme Dental",
    price: 10,
    priority: 1,
    category: "higiene",
    quantity: {
      month: 2,
      week: 0,
    },
  },
  {
    name: "Enxaguante Bucal",
    price: 10,
    priority: 1,
    category: "higiene",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Shampoo",
    price: 20,
    priority: 2,
    category: "higiene",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Fermento Químico",
    price: 6,
    priority: 2,
    category: "alimentação",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Qboa 5L",
    price: 15,
    priority: 2,
    category: "limpeza",
    quantity: {
      month: 1,
      week: 0,
    },
  },
  {
    name: "Frango",
    price: 8,
    priority: 1,
    category: "alimentação",
    quantity: {
      month: 4,
      week: 2,
    },
  },
];

module.exports = {
  itemsArray,
};
