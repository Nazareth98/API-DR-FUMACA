const emailValidator = require("email-validator");

const checkFieldsAdmin = (body, verb) => {
  switch (verb) {
    case "post":
      if (!body.name || !body.email || !body.password || !body.role) {
        console.log(
          "Todos os campos precisam ser enviados, confira a documentação!",
          body
        );
        return false;
      }

      if (
        body.name.length < 1 ||
        body.email.length < 1 ||
        body.password.length < 1 ||
        body.role.length < 1
      ) {
        console.log("Erro relacionado ao preencimento dos campos");
        return false;
      }

      if (
        typeof body.name !== "string" ||
        typeof body.email !== "string" ||
        typeof body.password !== "string" ||
        typeof body.role !== "string"
      ) {
        console.log("Erro relacionado ao tipo linha 30");
        return false;
      }

      const isValid = emailValidator.validate(body.email);

      if (!isValid) {
        console.log("O endereço de e-mail não é válido.");
        return false;
      }

      return true;

    case "update":
      if (!body.name || !body.password || !body.role) {
        console.log(
          "Todos os campos precisam ser enviados, confira a documentação!",
          body
        );
        return false;
      }

      if (
        body.name.length < 1 ||
        body.password.length < 1 ||
        body.role.length < 1
      ) {
        console.log("Erro relacionado ao preencimento dos campos");
        return false;
      }

      if (
        typeof body.name !== "string" ||
        typeof body.password !== "string" ||
        typeof body.role !== "string"
      ) {
        console.log("Erro relacionado ao tipo");
        return false;
      }

      return true;

    default:
      return false;
  }
};

module.exports = {
  checkFieldsAdmin,
};
