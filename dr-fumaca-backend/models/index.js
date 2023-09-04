const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/mysql");
const bcrypt = require("bcrypt");

const CATEGORY = sequelize.define(
  "TB_CATEGORIA",
  {
    ID_CATEGORIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "TB_CATEGORIA" }
);

const PRODUCT = sequelize.define(
  "TB_PRODUTOS",
  {
    ID_PRODUTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRICAO: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    PRECO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FOTOS: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_CATEGORIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const FLAVOR = sequelize.define(
  "TB_SABORES",
  {
    ID_SABOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_PRODUTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ESTOQUE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const CUSTOMER = sequelize.define(
  "tb_cliente",
  {
    ID_CLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ULTIMO_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const hashedPassword = bcrypt.hashSync(value, 10);
        this.setDataValue("SENHA", hashedPassword);
      },
    },
    CPF: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TELEFONE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DATA_NASCIMENTO: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "TB_CLIENTE" }
);

const ADDRESS = sequelize.define(
  "TB_ENDERECOS",
  {
    ID_ENDERECO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CEP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RUA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    COMPLEMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UF: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_CLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CUSTOMER,
        key: "ID_CLIENTE",
      },
    },
  },
  { timestamps: false, tableName: "TB_ENDERECOS" }
);

const ORDER = sequelize.define(
  "TB_PEDIDOS",
  {
    ID_PEDIDO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FRETE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    TOTAL: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    DATA_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DATA_ENTREGA: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    STATUS_PAGAMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NFC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ID_CLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CUSTOMER,
        key: "ID_CLIENTE",
      },
    },
    ID_ENDERECO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ADDRESS,
        key: "ID_ENDERECO",
      },
    },
  },
  { timestamps: false, tableName: "TB_PEDIDOS" }
);

const ORDER_PRODUCTS = sequelize.define(
  "ORDER_PRODUCTS",
  {
    ID_PEDIDO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "TB_PEDIDOS",
        key: "ID_PEDIDO",
      },
    },
    ID_PRODUTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "TB_PRODUTOS",
        key: "ID_PRODUTO",
      },
    },
    QUANTIDADE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "TB_PEDIDOS_PRODUTOS" }
);

const ADMIN = sequelize.define(
  "tb_admins",
  {
    ID_ADMIN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const hashedPassword = bcrypt.hashSync(value, 10);
        this.setDataValue("SENHA", hashedPassword);
      },
    },
    ROLE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "tb_admins",
  }
);

PRODUCT.belongsTo(CATEGORY, { foreignKey: "ID_CATEGORIA" });
PRODUCT.hasMany(FLAVOR, { foreignKey: "ID_PRODUTO" });
FLAVOR.belongsTo(PRODUCT, { foreignKey: "ID_PRODUTO" });
CUSTOMER.hasMany(ADDRESS, { foreignKey: "ID_CLIENTE" });
ADDRESS.belongsTo(CUSTOMER, { foreignKey: "ID_CLIENTE" });
CUSTOMER.hasMany(ORDER, { foreignKey: "ID_CLIENTE" });
ORDER.belongsTo(CUSTOMER, { foreignKey: "ID_CLIENTE" });
ADDRESS.hasMany(ORDER, { foreignKey: "ID_ENDERECO" });
ORDER.belongsTo(ADDRESS, { foreignKey: "ID_ENDERECO" });
ORDER.belongsToMany(PRODUCT, {
  through: ORDER_PRODUCTS,
  foreignKey: "ID_PEDIDO",
});
PRODUCT.belongsToMany(ORDER, {
  through: ORDER_PRODUCTS,
  foreignKey: "ID_PRODUTO",
});

module.exports = {
  CATEGORY,
  PRODUCT,
  FLAVOR,
  CUSTOMER,
  ADDRESS,
  ORDER,
  ORDER_PRODUCTS,
  ADMIN,
};
