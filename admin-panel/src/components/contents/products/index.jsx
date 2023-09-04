import React, { useEffect, useState } from "react";
import "./styles.scss";
import Button from "../../shared/button";
import Table from "../../shared/table";
import Product from "./product";
import IconProducts from "../../../assets/svg/IconProducts";
import Title from "../../shared/title";
import { deleteData, getData } from "../../../api";

const Products = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const headers = ["Nome do Produto", "Preço", "Categoria", "Marca"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const json = await getData("produtos");
        const newDataTable = json.map((product) => ({
          id: product.productId,
          columns: [
            product.name,
            product.price,
            product.category.name,
            product.brand,
          ],
        }));
        setDataTable(newDataTable);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setShowProduct(true);
  };

  const handleRemoveProduct = (event) => {
    event.preventDefault();
    const id = event.target.id;
    try {
      deleteData("produtos", id).then(async () => {
        const json = await getData("produtos");
        const newDataTable = json.map((product) => ({
          id: product.productId,
          columns: [product.name],
        }));
        setDataTable(newDataTable);
      });
    } catch (error) {
      alert("Ocorreu um erro ao excluir Produto.");
    }
  };

  const handleEditProduct = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    const id = event.target.id;
    try {
      setSelectedProduct(id);
      setShowProduct(true);
    } catch (error) {
      console.log("Erro ao direcionar para ediçção de produto.");
    }
  };

  return (
    <div className="products-container">
      {showProduct ? (
        <Product id={selectedProduct} />
      ) : (
        <>
          <div className="content-title">
            <IconProducts width="30px" />
            <Title text="Produtos" size="small" />
          </div>
          <Button
            text="Adicionar produto"
            buttonType="main-button"
            onClick={handleAddProduct}
          />
          <Table
            data={dataTable}
            headers={headers}
            canEdit={true}
            canRemove={true}
            handleRemove={handleRemoveProduct}
            handleEdit={handleEditProduct}
          />
        </>
      )}
    </div>
  );
};

export default Products;
