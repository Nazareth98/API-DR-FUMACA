const { PRODUCT } = require("../../models");

const checkFieldsProduct = (
  { name, description, price, brand, status, categoryId, flavors },
  verb
) => {
  switch (verb) {
    case "update":
      if (
        name.length < 1 ||
        description.length < 1 ||
        brand.length < 1 ||
        flavors.length < 1
      ) {
        console.log("Erro relacionado ao comprimento dos campos");
        return false;
      }

      if (
        typeof name !== "string" ||
        typeof description !== "string" ||
        typeof brand !== "string" ||
        typeof price !== "number" ||
        typeof status !== "number"
      ) {
        console.log("Erro relacionado ao tipo");
        return false;
      }

      for (let i = 0; i < flavors.length; i++) {
        if (flavors[i].name.length < 1) {
          console.log(
            "Erro relacionado ao comprimento dos campos em: 'flavors'"
          );
          return false;
        }
      }
      console.log("Todos os campos válidos.");
      return true;
    case "post":
      if (
        name.length < 1 ||
        description.length < 1 ||
        brand.length < 1 ||
        flavors.length < 1
      ) {
        console.log("Erro relacionado ao comprimento dos campos");
        return false;
      }

      if (
        typeof name !== "string" ||
        typeof description !== "string" ||
        typeof brand !== "string" ||
        typeof price !== "number" ||
        typeof status !== "number" ||
        typeof categoryId !== "number"
      ) {
        console.log("Erro relacionado ao tipo");
        return false;
      }

      for (let i = 0; i < flavors.length; i++) {
        if (flavors[i].name.length < 1) {
          console.log(
            "Erro relacionado ao comprimento dos campos em: 'flavors'"
          );
          return false;
        }

        if (flavors[i].stock < 1) {
          console.log(
            "Erro relacionado a estoque, quantidade precisa ser maior que 0"
          );
          return false;
        }
      }

      console.log("Todos os campos válidos.");
      return true;
    default:
      return false;
  }
};

module.exports = {
  checkFieldsProduct,
};
