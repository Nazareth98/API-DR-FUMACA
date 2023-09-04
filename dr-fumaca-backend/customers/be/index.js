const emailValidator = require("email-validator");
const CPF = require("cpf");

const checkFieldsCustomer = (body, verb) => {
  switch (verb) {
    case "post":
      if (
        !body.name ||
        !body.lastName ||
        !body.email ||
        !body.password ||
        !body.cpf ||
        !body.phone ||
        !body.gender ||
        !body.dateOfBirth
      ) {
        console.log(
          "Todos os campos precisam ser enviados, confira a documentação!",
          body
        );
        return false;
      }

      if (
        body.name.length < 1 ||
        body.lastName.length < 1 ||
        body.email.length < 1 ||
        body.password.length < 1 ||
        body.cpf.length < 1 ||
        body.phone.length < 1 ||
        body.gender.length < 1 ||
        body.dateOfBirth.length < 1
      ) {
        console.log("Erro relacionado ao preencimento dos campos");
        return false;
      }

      if (
        typeof body.name !== "string" ||
        typeof body.lastName !== "string" ||
        typeof body.email !== "string" ||
        typeof body.password !== "string" ||
        typeof body.cpf !== "string" ||
        typeof body.phone !== "string" ||
        typeof body.gender !== "string" ||
        typeof body.dateOfBirth !== "string"
      ) {
        console.log("Erro relacionado ao tipo");
        return false;
      }

      const isValid = emailValidator.validate(body.email);

      if (!isValid) {
        console.log("O endereço de e-mail não é válido.");
        return false;
      }

      const isValidCPF = CPF.isValid(body.cpf);

      if (!isValidCPF) {
        console.log("O CPF não é válido.");
        return false;
      }

      for (let i = 0; i < body.address.length; i++) {
        if (
          !body.address[i].cep ||
          !body.address[i].street ||
          !body.address[i].number ||
          !body.address[i].district ||
          !body.address[i].complement ||
          !body.address[i].city ||
          !body.address[i].stateCode
        ) {
          console.log(
            "Todos os campos precisam ser enviados, confira a documentação!",
            body
          );
          return false;
        }

        if (
          body.address[i].cep < 1 ||
          body.address[i].street < 1 ||
          body.address[i].number < 1 ||
          body.address[i].district < 1 ||
          body.address[i].complement < 1 ||
          body.address[i].city < 1 ||
          body.address[i].stateCode < 1
        ) {
          console.log(
            "Erro relacionado ao preencimento dos campos dos endereços!"
          );
          return false;
        }
      }

      console.log("Todos os campos válidos.");
      return true;
    case "update":
      if (
        !body.name ||
        !body.lastName ||
        !body.email ||
        !body.password ||
        !body.cpf ||
        !body.phone ||
        !body.gender ||
        !body.dateOfBirth
      ) {
        console.log(
          "Todos os campos precisam ser enviados, confira a documentação!",
          body
        );
        return false;
      }

      if (
        body.name.length < 1 ||
        body.lastName.length < 1 ||
        body.email.length < 1 ||
        body.password.length < 1 ||
        body.cpf.length < 1 ||
        body.phone.length < 1 ||
        body.gender.length < 1 ||
        body.dateOfBirth.length < 1
      ) {
        console.log("Erro relacionado ao preencimento dos campos");
        return false;
      }

      if (
        typeof body.name !== "string" ||
        typeof body.lastName !== "string" ||
        typeof body.email !== "string" ||
        typeof body.password !== "string" ||
        typeof body.cpf !== "string" ||
        typeof body.phone !== "string" ||
        typeof body.gender !== "string" ||
        typeof body.dateOfBirth !== "string"
      ) {
        console.log("Erro relacionado ao tipo");
        return false;
      }

      for (let i = 0; i < body.address.length; i++) {
        if (
          !body.address[i].cep ||
          !body.address[i].street ||
          !body.address[i].number ||
          !body.address[i].district ||
          !body.address[i].complement ||
          !body.address[i].city ||
          !body.address[i].stateCode
        ) {
          console.log(
            "Todos os campos precisam ser enviados, confira a documentação!",
            body
          );
          return false;
        }

        if (
          body.address[i].cep < 1 ||
          body.address[i].street < 1 ||
          body.address[i].number < 1 ||
          body.address[i].district < 1 ||
          body.address[i].complement < 1 ||
          body.address[i].city < 1 ||
          body.address[i].stateCode < 1
        ) {
          console.log(
            "Erro relacionado ao preencimento dos campos dos endereços!"
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
  checkFieldsCustomer,
};
