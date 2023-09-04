import React, { useEffect, useState } from "react";
import "./styles.scss";
import CardProduct from "../shared/cardProduct";
import Footer from "../footer";
import CustomTitle from "../shared/title";
import IconProducts from "../../assets/svg/IconProducts";
import CustomSubtitle from "../shared/subtitle";
import CustomSelect from "../shared/select";
import { Link } from "react-router-dom";
import { getData } from "../../api";

const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategorires = async () => {
      const response = await getData("categorias");
      const data = response.map((item) => ({
        name: item.name,
        id: item.categoryId,
      }));
      setCategories(data);
    };
    getCategorires();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className="main-container products-container">
        <div className="title-container">
          <IconProducts width="30px" color="#f27d52" />
          <CustomTitle text="Produtos" />
        </div>
        <div className="filters-container">
          <CustomSubtitle text="Selecione um categoria:" />
          <CustomSelect options={categories} />
        </div>
        <div className="products-list-container">
          {products.map((product) => (
            <Link to={`/produtos/${product}`} key={product}>
              <CardProduct />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
