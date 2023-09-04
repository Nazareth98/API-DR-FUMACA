const formatToCustomerData = (body) => {
  const formattedCustomer = {
    NOME: body.name.toUpperCase().trim(),
    ULTIMO_NOME: body.lastName.toUpperCase().trim(),
    EMAIL: body.email.trim(),
    SENHA: body.password.trim(),
    CPF: body.cpf.trim(),
    TELEFONE: body.phone.trim(),
    SEXO: body.gender.toUpperCase().trim(),
    DATA_NASCIMENTO: body.dateOfBirth,
    ENDERECO: [],
  };

  for (let i = 0; i < body.address.length; i++) {
    formattedCustomer.ENDERECO.push({
      ID_ENDERECO: body.address[i].addressId,
      CEP: body.address[i].cep.trim(),
      RUA: body.address[i].street.toUpperCase().trim(),
      NUMERO: body.address[i].number.trim(),
      BAIRRO: body.address[i].district.toUpperCase().trim(),
      COMPLEMENTO: body.address[i].complement.toUpperCase().trim(),
      CIDADE: body.address[i].city.toUpperCase().trim(),
      UF: body.address[i].stateCode.toUpperCase().trim(),
      STATUS: Number(body.address[i].status),
    });
  }

  return formattedCustomer;
};

const formatToProductData = (body) => {
  const formattedProduct = {
    NOME: body.name.toUpperCase().trim(),
    DESCRICAO: body.description.trim(),
    PRECO: body.price,
    MARCA: body.brand.toUpperCase().trim(),
    FOTOS: body.photos,
    STATUS: body.status,
    ID_CATEGORIA: body.categoryId,
  };

  if (body.flavors) {
    formattedProduct.SABORES = body.flavors;
  }

  return formattedProduct;
};

const formatToOrderData = (body) => {
  const formattedOrder = {
    FRETE: body.shipping,
    TOTAL: body.total,
    DATA_PEDIDO: body.orderDate.trim(),
    DATA_ENTREGA: body.deliveryDate,
    STATUS_PAGAMENTO: body.paymentStatus.toUpperCase().trim(),
    NFC: body.nfc,
    ID_CLIENTE: body.customerId,
    ID_ENDERECO: body.addressId,
  };

  if (formattedOrder.NFC !== null) {
    formattedOrder.NFC = body.nfc.trim();
  }

  if (formattedOrder.DATA_ENTREGA !== null) {
    formattedOrder.DATA_ENTREGA = body.deliveryDate.trim();
  }

  return formattedOrder;
};

const formatToAdminData = (body) => {
  const formattedAdmin = {
    NOME: body.name.trim(),
    EMAIL: body.email.trim(),
    SENHA: body.password.trim(),
    ROLE: body.role.toUpperCase().trim(),
  };

  return formattedAdmin;
};

module.exports = {
  formatToCustomerData,
  formatToProductData,
  formatToOrderData,
  formatToAdminData,
};
