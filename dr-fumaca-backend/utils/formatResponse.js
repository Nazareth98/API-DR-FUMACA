const formatToJsonCustomer = (res) => {
  let formattedCustomer = {
    customerId: res.ID_CLIENTE,
    name: res.NOME,
    lastName: res.ULTIMO_NOME,
    email: res.EMAIL,
    password: res.SENHA,
    cpf: res.CPF,
    phone: res.TELEFONE,
    gender: res.SEXO,
    dateOfBirth: res.DATA_NASCIMENTO,
    address: [],
  };

  for (let i = 0; i < res.TB_ENDERECOs.length; i++) {
    formattedCustomer.address.push({
      addressId: res.TB_ENDERECOs[i].dataValues.ID_ENDERECO,
      cep: res.TB_ENDERECOs[i].dataValues.CEP,
      street: res.TB_ENDERECOs[i].dataValues.RUA,
      number: res.TB_ENDERECOs[i].dataValues.NUMERO,
      district: res.TB_ENDERECOs[i].dataValues.BAIRRO,
      complement: res.TB_ENDERECOs[i].dataValues.COMPLEMENTO,
      city: res.TB_ENDERECOs[i].dataValues.CIDADE,
      stateCode: res.TB_ENDERECOs[i].dataValues.UF,
      status: 1,
      customerId: res.ID_CLIENTE,
    });
  }
  return formattedCustomer;
};

const formatToJsonProduct = (res) => {
  const formattedProduct = {
    productId: res.ID_PRODUTO,
    name: res.NOME,
    description: res.DESCRICAO,
    price: res.PRECO,
    brand: res.MARCA,
    photos: res.FOTOS,
    status: res.STATUS,
    flavors: [],
    category: {
      categoryId: res.TB_CATEGORIum.dataValues.ID_CATEGORIA,
      name: res.TB_CATEGORIum.dataValues.NOME,
    },
  };

  for (let i = 0; i < res.TB_SABOREs.length; i++) {
    formattedProduct.flavors.push({
      flavorId: res.TB_SABOREs[i].dataValues.ID_SABOR,
      productId: res.TB_SABOREs[i].dataValues.ID_PRODUTO,
      name: res.TB_SABOREs[i].dataValues.NOME,
      stock: res.TB_SABOREs[i].dataValues.ESTOQUE,
    });
  }

  return formattedProduct;
};

const formatToJsonOrder = (res) => {
  const formattedOrder = {
    orderId: res.ID_PEDIDO,
    shipping: res.FRETE,
    total: res.TOTAL,
    orderDate: res.DATA_PEDIDO,
    deliveryDate: res.DATA_ENTREGA,
    paymentStatus: res.STATUS_PAGAMENTO,
    nfc: res.NFC,
    products: [],
    customer: {
      customerId: res.tb_cliente.dataValues.ID_CLIENTE,
      name: res.tb_cliente.dataValues.NOME,
      lastName: res.tb_cliente.dataValues.ULTIMO_NOME,
      email: res.tb_cliente.dataValues.EMAIL,
      password: res.tb_cliente.dataValues.SENHA,
      cpf: res.tb_cliente.dataValues.CPF,
      phone: res.tb_cliente.dataValues.TELEFONE,
      gender: res.tb_cliente.dataValues.SEXO,
      dateOfBirth: res.tb_cliente.dataValues.DATA_NASCIMENTO,
    },
    address: {
      addressId: res.TB_ENDERECO.dataValues.ID_ENDERECO,
      cep: res.TB_ENDERECO.dataValues.CEP,
      street: res.TB_ENDERECO.dataValues.RUA,
      number: res.TB_ENDERECO.dataValues.NUMERO,
      district: res.TB_ENDERECO.dataValues.BAIRRO,
      complement: res.TB_ENDERECO.dataValues.COMPLEMENTO,
      city: res.TB_ENDERECO.dataValues.CIDADE,
      stateCode: res.TB_ENDERECO.dataValues.UF,
      status: res.TB_ENDERECO.dataValues.STATUS,
      customerId: res.TB_ENDERECO.dataValues.ID_CLIENTE,
    },
  };

  for (let i = 0; i < res.TB_PRODUTOs.length; i++) {
    formattedOrder.products.push({
      productId: res.TB_PRODUTOs[i].dataValues.ID_PRODUTO,
      name: res.TB_PRODUTOs[i].dataValues.NOME,
      description: res.TB_PRODUTOs[i].dataValues.DESCRICAO,
      price: res.TB_PRODUTOs[i].dataValues.PRECO,
      brand: res.TB_PRODUTOs[i].dataValues.MARCA,
      photos: res.TB_PRODUTOs[i].dataValues.FOTOS,
      status: res.TB_PRODUTOs[i].dataValues.STATUS,
      categoryId: res.TB_PRODUTOs[i].dataValues.ID_CATEGORIA,
      quantity:
        res.TB_PRODUTOs[i].dataValues.ORDER_PRODUCTS.dataValues.QUANTIDADE,
    });
  }

  return formattedOrder;
};

const formatToJsonAdmin = (res) => {
  const formattedAdmin = {
    adminId: res.ID_ADMIN,
    name: res.NOME,
    email: res.EMAIL,
    password: res.SENHA,
    role: res.ROLE,
  };

  return formattedAdmin;
};

module.exports = {
  formatToJsonCustomer,
  formatToJsonProduct,
  formatToJsonOrder,
  formatToJsonAdmin,
};
