const {
  ORDER,
  ADDRESS,
  CUSTOMER,
  ORDER_PRODUCTS,
  PRODUCT,
} = require("../../models");
const { formatToOrderData } = require("../../utils/formatRequest");
const { formatToJsonOrder } = require("../../utils/formatResponse");
const { checkFieldsOrder } = require("../be");

const addOrder = async (req, res) => {
  const body = req.body;
  const fieldsAreValid = checkFieldsOrder(body, "post");

  if (fieldsAreValid) {
    const newOrder = formatToOrderData(body);

    if (newOrder.NFC !== null) {
      const orderExists = await ORDER.findOne({
        where: { NFC: newOrder.NFC },
      });
      if (orderExists) {
        return res.status(400).json({
          message: "Já existe uma VENDA com a NFC informada.",
        });
      }
    }

    try {
      const orderResult = await ORDER.create(newOrder);
      for (const product of body.products) {
        await ORDER_PRODUCTS.create({
          ID_PEDIDO: orderResult.ID_PEDIDO,
          ID_PRODUTO: product.productId,
          QUANTIDADE: product.quantity,
        });
      }
      return res.json({
        message: "Produto adicionado com sucesso",
        result: {
          newOrder: orderResult.dataValues,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "Houve um erro ao adicionar um nova VENDA!",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const body = req.body;
  const fieldsAreValid = checkFieldsOrder(body, "update");

  if (fieldsAreValid) {
    const updateOrder = {
      STATUS_PAGAMENTO: body.paymentStatus,
      NFC: body.nfc,
      DATA_ENTREGA: body.deliveryDate,
    };

    try {
      const order = await ORDER.findByPk(orderId);
      if (!order) {
        return res.status(404).json({
          message: "Não foi possível localizar o PEDIDO.",
        });
      }

      await order.update(updateOrder);

      console.log("ADMIN atualizado com sucesso!");
      return res.json({
        message: "PRODUTO atualizado com sucesso.",
        updatedOrder: order.dataValues,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Ocorreu um erro ao atualizar o PRODUTO.",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const searchOrder = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const orderResult = await ORDER.findOne({
        where: { ID_PEDIDO: id },
        include: [
          { model: ADDRESS },
          { model: CUSTOMER },
          {
            model: PRODUCT,
            through: {
              model: ORDER_PRODUCTS,
              attributes: ["QUANTIDADE"],
            },
          },
        ],
      });
      if (!orderResult) {
        return res.status(404).json({ message: "PEDIDO não encontrado." });
      }

      const formattedOrder = formatToJsonOrder(orderResult.dataValues);
      return res.status(200).json(formattedOrder);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao buscar o PEDIDO." });
    }
  }

  try {
    const orderResult = await ORDER.findAll({
      include: [ADDRESS, CUSTOMER, { model: PRODUCT, through: ORDER_PRODUCTS }],
    });

    const orderPromise = orderResult.map((item) => {
      return formatToJsonOrder(item.dataValues);
    });

    const orders = await Promise.all(orderPromise);
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar CLIENTES." });
  }
};

const removeOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await ORDER.findByPk(id);

    if (!order) {
      return res.status(404).json({
        message: "Não foi possível localizar o PEDIDO.",
      });
    }

    await ORDER_PRODUCTS.destroy({ where: { ID_PEDIDO: id } });

    await order.destroy();
    return res.json({
      message: `PEDIDO ${id} excluído com sucesso.`,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao deletar PEDIDO." });
  }
};

module.exports = {
  addOrder,
  updateOrder,
  searchOrder,
  removeOrder,
};
