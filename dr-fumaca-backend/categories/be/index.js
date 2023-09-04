const { CATEGORY } = require("../../models");

const checkFieldsCategory = ({ name }) => {
  if (typeof name === "string" && name.length > 0) {
    return true;
  } else {
    return false;
  }
};

const checkCategoryExists = async ({ NOME }) => {
  const exists = await CATEGORY.findOne({ where: { NOME } });

  if (exists) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  checkFieldsCategory,
  checkCategoryExists,
};
