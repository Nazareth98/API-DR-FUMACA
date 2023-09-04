const { CATEGORY } = require("../../models");
const { checkFieldsCategory, checkCategoryExists } = require("../be");

const addCategory = async (req, res) => {
  const body = req.body;
  const fieldsAreValid = checkFieldsCategory(body);
  console.log(body);
  if (fieldsAreValid === true) {
    const newCategory = {
      NOME: body.name.toUpperCase().trim(),
    };
    const alreadyExists = await checkCategoryExists(newCategory);

    if (alreadyExists === false) {
      try {
        const result = await CATEGORY.create(newCategory);
        return res.json({
          message: "Categoria adicionada com sucesso",
          categories: result,
        });
      } catch (err) {
        return res.status(400).json(err);
      }
    } else {
      return res.status(400).json({
        message: "Categoria já existente.",
      });
    }
  } else {
    return res.status(400).json({
      message:
        "Certifique-se de que o campo 'nome' foi preenchido corretamente.",
    });
  }
};

const removeCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await CATEGORY.findOne({ where: { ID_CATEGORIA: id } });
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }

    await category.destroy();
    return res.json({ message: "Categoria deletada com sucesso" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao deletar a categoria" });
  }
};

const searchCategory = async (req, res) => {
  try {
    const result = await CATEGORY.findAll();
    const categoryPromise = result.map((item) => {
      return { categoryId: item.ID_CATEGORIA, name: item.NOME };
    });
    const categories = await Promise.all(categoryPromise);
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar as categorias" });
  }
};

module.exports = {
  addCategory,
  removeCategory,
  searchCategory,
};
