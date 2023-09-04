import React, { useEffect, useState } from "react";
import "./styles.scss";
import Table from "../../shared/table";
import Input from "../../shared/input";
import Button from "../../shared/button";
import ErrorMessage from "../../shared/errorMessage";
import Title from "../../shared/title";
import IconCategory from "../../../assets/svg/IconCategory";
import { deleteData, getData, postData } from "../../../api";

const Categories = () => {
  const [dataTable, setDataTable] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const json = await getData("categorias");
        const newDataTable = json.map((category) => ({
          id: category.categoryId,
          columns: [category.name],
        }));
        setDataTable(newDataTable);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (category.length > 0) {
      postData("categorias", { name: category }).then(async () => {
        const updatedCategories = await getData("categorias");
        const newDataTable = updatedCategories.map((category) => ({
          id: category.categoryId,
          columns: [category.name],
        }));
        setDataTable(newDataTable);
      });
      setCategory("");
      setError(null);
      const updatedCategories = await getData("categorias");
      const newDataTable = updatedCategories.map((category) => ({
        id: category.categoryId,
        columns: [category.name],
      }));
      setDataTable(newDataTable);
    } else {
      setError("Error: Preencha o nome da categoria para adicioná-la");
    }
  };

  const handleRemoveCategory = async (event) => {
    event.preventDefault();
    const id = event.target.id;
    try {
      deleteData("categorias", id).then(async () => {
        const updatedCategories = await getData("categorias");
        const newDataTable = updatedCategories.map((category) => ({
          id: category.categoryId,
          columns: [category.name],
        }));
        setDataTable(newDataTable);
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Esta categoria possui relacionamentos e não pode ser excluída.");
      } else {
        alert("Ocorreu um erro ao excluir a categoria.");
      }
    }
  };

  return (
    <div className="content-container">
      <div className="content-title">
        <IconCategory width="30px" />
        <Title text="Categorias" size="small" />
      </div>
      <div className="categories-add-container">
        <div>
          <Input
            label="Adicionar Categoria"
            placeholder="Digite o nome da categoria"
            value={category}
            setValue={setCategory}
          />
        </div>
        <Button
          text="Adicionar categoria"
          buttonType="main-button"
          onClick={handleAddCategory}
        />
      </div>
      {error ? <ErrorMessage message={error} /> : null}
      <Table
        data={dataTable}
        headers={["Nome do Produto"]}
        handleRemove={handleRemoveCategory}
        canRemove={true}
      />
    </div>
  );
};

export default Categories;
