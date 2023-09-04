import React, { useEffect, useState } from "react";
import "./styles.scss";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import ErrorMessage from "../../../shared/errorMessage";
import Textarea from "../../../shared/textarea";
import InputImage from "../../../shared/inputImage";
import Title from "../../../shared/title";
import IconProducts from "../../../../assets/svg/IconProducts";
import CustomSelect from "../../../shared/select";
import { getData, postData, updateData } from "../../../../api";

const Product = ({ id }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [flavor, setFlavor] = useState("");
  const [stock, setStock] = useState(0);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [flavors, setFlavors] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const json = await getData("categorias");
        const newOptions = json.map((category) => ({
          id: category.categoryId,
          name: category.name,
        }));
        setOptions(newOptions);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategories();

    if (id) {
      const fetchProduct = async () => {
        try {
          const json = await getData("produtos", id);
          const productToEdit = json[0];
          setSelectedProduct(productToEdit);
          setName(productToEdit.name);
          const actualFlavors = productToEdit.flavors.map((flavor) => {
            return {
              id: flavor.flavorId,
              name: flavor.name,
              stock: flavor.stock,
            };
          });
          setName(productToEdit.name);
          setCategory(productToEdit.category.categoryId);
          setFlavors(actualFlavors);
          setBrand(productToEdit.brand);
          setDescription(productToEdit.description);
          setPrice(productToEdit.price);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchProduct();
    }
  }, []);

  const handleEditProduct = (event) => {
    event.preventDefault();

    if (
      !name ||
      !category ||
      !brand ||
      !description ||
      !price ||
      flavors.length === 0
    ) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    const productData = {
      name,
      description,
      price: Number(price),
      brand,
      photos: { url: "teste/imagem1.png" },
      status: 1,
      categoryId: Number(category),
      flavors,
    };

    try {
      updateData("produtos", productData, id);

      setName("");
      setCategory("");
      setBrand("");
      setFlavors([]);
      setDescription("");
      setPrice(null);
      setError(null);
    } catch (error) {
      setError("Houve um erro ao adicionar produto");
    }
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    if (
      !name ||
      !category ||
      !brand ||
      !description ||
      !price ||
      flavors.length === 0
    ) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    const productData = {
      name,
      description,
      price: Number(price),
      brand,
      photos: { url: "teste/imagem1.png" },
      status: 1,
      categoryId: Number(category),
      flavors,
    };
    try {
      postData("produtos", productData);

      setName("");
      setCategory("");
      setBrand("");
      setFlavors([]);
      setDescription("");
      setPrice(null);
      setError(null);
    } catch (error) {
      setError("Houve um erro ao adicionar PRODUTO");
    }
  };

  const handleAddFlavor = (event) => {
    event.preventDefault();
    if (flavor.length > 0 && stock > 0) {
      const newFlavor = { name: flavor, stock: Number(stock) };
      setFlavors([...flavors, newFlavor]);
      setError(null);
      setFlavor("");
      setStock(0);
    } else {
      setError("Error: Preencha todos os campos para adicionar um sabor.");
    }
  };

  const handleRemoveFlavor = (event) => {
    const idToRemove = parseInt(event.currentTarget.id);
    console.log(flavors, idToRemove);
    const updatedFlavors = flavors.filter((item) => item.id !== idToRemove);
    setFlavors(updatedFlavors);
    setError(null);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="product-container">
      <div className="content-title">
        <IconProducts width="30px" />
        <Title text="Gerenciar Produtos" size="small" />
      </div>
      <div className="product-section">
        <form action="">
          <Input
            type="text"
            label="Nome"
            placeholder="Digite o nome do produto"
            setValue={setName}
            value={name}
          />

          <CustomSelect
            label="Categoria"
            options={options}
            value={selectedProduct ? selectedProduct.category.id : ""}
            onSelect={handleCategoryChange}
          />

          <Input
            type="text"
            label="Marca"
            placeholder="Digite a marca do produto"
            setValue={setBrand}
            value={brand}
          />
          <div>
            <div className="product-prop-container">
              <div>
                <Input
                  type="text"
                  label="Sabor"
                  placeholder="Digite o nome do sabor"
                  setValue={setFlavor}
                  value={flavor}
                />
              </div>
              <div>
                <Input
                  type="number"
                  label="Estoque"
                  placeholder="Digite o estoque do sabor"
                  setValue={setStock}
                  value={stock}
                />
              </div>
              <div>
                <Button text="Adicionar Sabor" onClick={handleAddFlavor} />
              </div>
            </div>
            <div className="product-prop-container">
              {flavors
                ? flavors.map((item, index) => {
                    return (
                      <div
                        id={item.id}
                        className="flavor-card"
                        onClick={handleRemoveFlavor}
                      >
                        <span>
                          {item.name} {item.stock}
                        </span>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <Textarea
            label="Descrição"
            value={description}
            setValue={setDescription}
            rows="5"
          />
          <InputImage />
          <Input
            type="number"
            label="Preço"
            placeholder="Digite a preço do produto"
            setValue={setPrice}
            value={price}
          />

          <Button
            text="Salvar alterações"
            buttonType="main-button"
            onClick={selectedProduct ? handleEditProduct : handleAddProduct}
          />
        </form>
      </div>
      <div>{error ? <ErrorMessage message={error} /> : null}</div>
      <div className="product-section"></div>
    </div>
  );
};

export default Product;
