import React from "react";
import "./styles.scss";
import imageTeste from "../../../assets/images/banner-principal.jpg";
import CustomButton from "../button";
import IconCart from "../../../assets/svg/IconCart";
import { addToCart } from "../../../utils";

const CardProduct = (props) => {
  const handleAddToCart = (event) => {
    const productId = event.currentTarget.id;
    addToCart(productId);
  };

  return (
    <div className="cardProduct-container">
      <div id={props.id} className="cardProduct-image" onClick={props.onClick}>
        <img src={imageTeste} alt="imagem do produto" />
      </div>
      <div className="cardProduct-info">
        <div className="cardProduct-name">
          <span>Vape 6000 Puffs</span>
        </div>
        <div className="cardProduct-price">
          <span className="price">$98,00</span>
          <CustomButton
            id={props.id}
            buttonType="main-button"
            onClick={handleAddToCart}
          >
            <span>Add +</span>
            <IconCart width="20px" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
