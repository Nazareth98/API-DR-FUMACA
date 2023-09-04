export const treatDataOrders = (orders) => {
  const currentDate = new Date();
  const lastWeekDate = new Date();
  lastWeekDate.setDate(currentDate.getDate() - 7);
  const lastMonthDate = new Date();
  lastMonthDate.setDate(currentDate.getDate() - 30);

  const todaySales = {
    quantity: 0,
    total: 0,
  };
  const lastWeekSales = {
    quantity: 0,
    total: 0,
  };
  const lastMonthSales = {
    quantity: 0,
    total: 0,
  };

  orders.forEach((order) => {
    const orderDate = new Date(order.orderDate);

    if (orderDate >= currentDate) {
      todaySales.quantity++;
      todaySales.total += parseFloat(order.total);
    }

    if (orderDate >= lastWeekDate) {
      lastWeekSales.quantity++;
      lastWeekSales.total += parseFloat(order.total);
    }

    if (orderDate >= lastMonthDate) {
      lastMonthSales.quantity++;
      lastMonthSales.total += parseFloat(order.total);
    }
  });

  return {
    today: todaySales,
    lastWeek: lastWeekSales,
    lastMonth: lastMonthSales,
  };
};

/*
[


  {
     "orderId":13,
     "shipping":"30.00",
     "total":"132.65",
     "orderDate":"2023-08-22",
     "deliveryDate":"2023-09-22",
     "paymentStatus":"PENDENTE",
     "nfc":"12359",
     "products":[
        {
           "productId":12,
           "name":"PRODUTO EDITADO PERICSHONW",
           "description":"Mata lento e dura bastante",
           "price":"90.00",
           "brand":"VAPERZ",
           "photos":{
              "url":"teste/imagem1.png"
           },
           "status":1,
           "categoryId":1,
           "quantity":2
        }
     ],
     "customer":{
        "customerId":1,
        "name":"PATRICK",
        "lastName":"DA SILVA NAZARETH",
        "email":"patrick@gmail.com",
        "password":"$2b$10$tRYwFygOPTz0a5gomkFPxuivGnn2LCuIz6ZqJGi8VTgo/1vmUd8kW",
        "cpf":"08194729998",
        "phone":"45998550838",
        "gender":"M",
        "dateOfBirth":"1998-04-17"
     },
     "address":{
        "addressId":8,
        "cep":"83055250",
        "street":"RUA DOMINGOS NOVO",
        "number":"206",
        "district":"IPÊ",
        "complement":"APTO 03",
        "city":"SÃO JOSÉ DOS PINHAIS",
        "stateCode":"PR",
        "status":1,
        "customerId":1
     }
  }

]


*/
