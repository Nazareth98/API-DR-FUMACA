const checkFieldsOrder = (body, verb) => {
  switch (verb) {
    case "post":
      if (
        !body.shipping ||
        !body.total ||
        !body.orderDate ||
        !body.paymentStatus ||
        !body.customerId ||
        !body.addressId ||
        !body.products
      ) {
        console.log(
          "Todos os campos precisam ser enviados, confira a documentação!",
          body
        );
        return false;
      }

      if (
        body.shipping.length < 1 ||
        body.total.length < 1 ||
        body.orderDate.length < 1 ||
        body.paymentStatus.length < 1 ||
        body.customerId.length < 1 ||
        body.addressId.length < 1 ||
        body.products.length < 1
      ) {
        console.log("Erro relacionado ao preencimento dos campos");
        return false;
      }

      if (
        typeof body.shipping !== "number" ||
        typeof body.total !== "number" ||
        typeof body.orderDate !== "string" ||
        typeof body.paymentStatus !== "string" ||
        typeof body.customerId !== "number" ||
        typeof body.addressId !== "number"
      ) {
        console.log("Erro relacionado ao tipo");
        return false;
      }

      for (let i = 0; i < body.products.length; i++) {
        if (
          typeof body.products[i].productId !== "number" ||
          typeof body.products[i].quantity !== "number"
        ) {
          console.log("Erro relacionado ao tipo linha 47");
          return false;
        }
      }

      console.log("Todos os campos válidos.");
      return true;
    case "update":
      if (!body.paymentStatus || body.paymentStatus.length === 0) {
        console.log(
          "Todos os campos precisam ser enviados, confira a documentação!",
          body
        );
        return false;
      }
      console.log("Todos os campos válidos.");
      return true;
    default:
      return false;
  }
};

module.exports = {
  checkFieldsOrder,
};
