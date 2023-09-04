const { PRODUCT, FLAVOR, CATEGORY } = require("../../models");
const { formatToProductData } = require("../../utils/formatRequest");
const { formatToJsonProduct } = require("../../utils/formatResponse");
const { checkFieldsProduct } = require("../be");

const addProduct = async (req, res) => {
  const body = req.body;
  const fieldsAreValid = checkFieldsProduct(body, "post");

  if (fieldsAreValid === true) {
    const newProduct = formatToProductData(body);
    const productExists = await CUSTOMER.findOne({
      where: { NOME: newProduct.NOME },
    });

    if (productExists) {
      let newFlavor = [];
      for (let i = 0; i < body.flavors.length; i++) {
        newFlavor.push({
          NOME: body.flavors[i].name.toUpperCase().trim(),
          ESTOQUE: body.flavors[i].stock,
        });
      }
      try {
        let result = await PRODUCT.create(newProduct);
        let productId = result.dataValues.ID_PRODUTO;
        let flavorsPromises = newFlavor.map(async (item) => {
          item.ID_PRODUTO = productId;
          return await FLAVOR.create(item);
        });
        const flavors = await Promise.all(flavorsPromises);
        result.flavors = flavors;
        return res.json({
          message: "Produto adicionado com sucesso",
          result: result,
        });
      } catch (err) {
        return res.status(400).json(err);
      }
    } else {
      return res.status(400).json({
        message: "Produto já existente.",
      });
    }
  } else {
    return res.status(400).json({
      message: "Certifique-se de que os campos foram preenchidos corretamente.",
    });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const body = req.body;
  const fieldsAreValid = checkFieldsProduct(body, "update");

  if (fieldsAreValid) {
    const updateProduct = formatToProductData(body);

    try {
      const product = await PRODUCT.findByPk(productId, { include: FLAVOR });

      if (!product) {
        return res.status(404).json({
          message: "Não foi possível localizar o PRODUTO.",
        });
      }

      await product.update(updateProduct);

      if (updateProduct.SABORES) {
        for (const flavorUpdateData of updateProduct.SABORES) {
          const existingFlavor = product.TB_SABOREs.find(
            (flavor) => flavor.ID_SABOR === flavorUpdateData.flavorId
          );

          if (existingFlavor) {
            await existingFlavor.update({
              NOME: flavorUpdateData.name,
              ESTOQUE: flavorUpdateData.stock,
            });
          } else {
            await FLAVOR.create({
              ID_PRODUTO: productId,
              NOME: flavorUpdateData.name,
              ESTOQUE: flavorUpdateData.stock,
            });
          }
        }

        const flavorIdsInUpdate = updateProduct.SABORES.map(
          (flavor) => flavor.flavorId
        );

        for (const flavor of product.TB_SABOREs) {
          if (!flavorIdsInUpdate.includes(flavor.ID_SABOR)) {
            await flavor.destroy();
          }
        }
      }

      return res.json({
        message: "PRODUTO atualizado com sucesso.",
        updatedProduct: product,
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

const removeProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await PRODUCT.findOne({ where: { ID_PRODUTO: id } });
    if (!product) {
      return res.status(404).json({ message: "PRODUTO não encontrado" });
    }

    await FLAVOR.destroy({ where: { ID_PRODUTO: id } });

    await product.destroy();
    return res.json({
      message: "PRODUTO e SABORES relacionados foram excluídos com sucesso.",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao deletar PRODUTO" });
  }
};

const searchProduct = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const result = await PRODUCT.findOne({
        where: { ID_PRODUTO: id },
        include: [FLAVOR, CATEGORY], // Incluir os sabores e categorias relacionados ao produto
      });

      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }
      const formatedProduct = formatToJsonProduct(result.dataValues);
      return res.status(200).json(formatedProduct);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao buscar o Produto." });
    }
  } else {
    try {
      const result = await PRODUCT.findAll({
        include: [FLAVOR, CATEGORY], // Incluir os sabores e categorias relacionados ao produto
      });
      const productPromise = result.map((item) => {
        return formatToJsonProduct(item.dataValues);
      });

      const products = await Promise.all(productPromise);

      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro ao buscar Produtos." });
    }
  }
};

module.exports = {
  addProduct,
  updateProduct,
  searchProduct,
  removeProduct,
};
