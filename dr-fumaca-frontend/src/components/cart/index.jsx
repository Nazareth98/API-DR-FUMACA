import React, { useState } from "react";
import "./styles.scss";
import Footer from "../footer";
import CustomTitle from "../shared/title";
import IconCart from "../../assets/svg/IconCart";
import CustomSubtitle from "../shared/subtitle";
import CustomButton from "../shared/button";
import CustomInput from "../shared/input";
import imageTest from "../../assets/images/banner-principal.jpg";
import IconMinus from "../../assets/svg/IconMinus";
import IconPlus from "../../assets/svg/IconPlus";
import IconTrash from "../../assets/svg/IconTrash";

const Cart = () => {
  const [cep, setCep] = useState();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section className="cart-background">
        <div className="main-container cart-container">
          <div className="cart-items-container">
            <div className="title-container">
              <IconCart width="30px" color="#f27d52" />
              <CustomTitle text="Meu carrinho" />
            </div>
            <div className="cart-item">
              <div>
                <img src={imageTest} alt="imagem do produto" />
                <div>
                  <p>
                    <strong>Nome do produto</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Sabor:</strong> mangoreiz
                    </li>
                    <li>
                      <strong>Marca:</strong> The best
                    </li>
                  </ul>
                </div>
                <CustomButton buttonType="main-button">
                  <IconTrash width="20px" />
                </CustomButton>
              </div>
              <div>
                <div>
                  <span>Quantidade:</span>
                  <div className="quantity-container">
                    <IconMinus
                      width="30px"
                      color="#000"
                      onClick={decreaseQuantity}
                    />
                    <CustomInput type="number" value={quantity} readOnly />
                    <IconPlus
                      width="30px"
                      color="#000"
                      onClick={increaseQuantity}
                    />
                  </div>
                </div>
                <div>
                  <CustomSubtitle text="R$ 260,00" />
                </div>
              </div>
            </div>
            <div className="calculate-shipping">
              <div>
                <CustomSubtitle text="Simule frete e prazo de entrega" />
              </div>
              <div className="title-container">
                <CustomInput
                  label="Digite aqui seu CEP"
                  placeholder="Somente números"
                  type="number"
                  value={cep}
                  setValue={setCep}
                />
                <CustomButton text="Calcular" />
              </div>
            </div>
          </div>
          <div className="cart-resume-container">
            <div className="title-container">
              <CustomSubtitle text="Resumo da compra" />
            </div>
            <div className="cart-info-container">
              <div>
                <span>Subtotal (1 item)</span>
                <span>R$ 260,00</span>
              </div>
              <div>
                <span>Frete</span>
                <span>R$ 15,00</span>
              </div>
              <div>
                <span>Valor Total</span>
                <span>R$ 275,00</span>
              </div>
              <CustomButton text="FINALIZAR" buttonType="main-button" />
              <CustomButton text="ESCOLHER MAIS PRODUTOS" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
