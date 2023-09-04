import React from "react";
import "./styles.scss";
import IconCart from "../../../assets/svg/IconCart";
import CustomTitle from "../../shared/title";
import imageTest from "../../../assets/images/banner-principal.jpg";
import CustomButton from "../../shared/button";

const MyOrders = () => {
  return (
    <section className="myOrders-container">
      <div className="title-container">
        <IconCart width="30px" color="#f27d52" />
        <CustomTitle text="Meus Pedidos" />
      </div>
      <div className="myOrders-content-container">
        <div className="myOrders-item">
          <div className="myOrders-item-product">
            <div>
              <div>
                <img src={imageTest} alt="Imagem do produto" />
              </div>
              <div>
                <strong>Nome do produto</strong>
              </div>
              <ul>
                <li>
                  Quantidade: <strong>1</strong>
                </li>
                <li>
                  Sabor: <strong>Mango Reiz</strong>
                </li>
                <li>
                  Valor Unitário: <strong>R$ 120,00</strong>
                </li>
              </ul>
            </div>
            <div>
              <p>
                Status: <strong>Em trânsito</strong>
              </p>
              <CustomButton text="Rastrear pedido" buttonType="main-button" />
            </div>
            <div>
              <p>
                <strong>Resumo da compra</strong>
              </p>
              <ul>
                <li>
                  Pedido: <strong>12365</strong>
                </li>
                <li>
                  Data do pedido: <strong>30/08/2023</strong>
                </li>
                <li>
                  Valor total: <strong>R$ 120,00</strong>
                </li>
                <li>
                  Previsão de entrega: <strong>15/09/2023</strong>
                </li>
              </ul>
              <CustomButton text="Detalhes" />
            </div>
          </div>
        </div>
        <div className="myOrders-item">
          <div className="myOrders-item-product">
            <div>
              <div>
                <img src={imageTest} alt="Imagem do produto" />
              </div>
              <div>
                <strong>Nome do produto</strong>
              </div>
              <ul>
                <li>
                  Quantidade: <strong>1</strong>
                </li>
                <li>
                  Sabor: <strong>Mango Reiz</strong>
                </li>
                <li>
                  Valor Unitário: <strong>R$ 120,00</strong>
                </li>
              </ul>
            </div>
            <div>
              <p>
                Status: <strong>Em trânsito</strong>
              </p>
              <CustomButton text="Rastrear pedido" buttonType="main-button" />
            </div>
            <div>
              <p>
                <strong>Resumo da compra</strong>
              </p>
              <ul>
                <li>
                  Pedido: <strong>12365</strong>
                </li>
                <li>
                  Data do pedido: <strong>30/08/2023</strong>
                </li>
                <li>
                  Valor total: <strong>R$ 120,00</strong>
                </li>
                <li>
                  Previsão de entrega: <strong>15/09/2023</strong>
                </li>
              </ul>
              <CustomButton text="Detalhes" />
            </div>
          </div>
          <div className="myOrders-item-product">
            <div>
              <div>
                <img src={imageTest} alt="Imagem do produto" />
              </div>
              <div>
                <strong>Nome do produto</strong>
              </div>
              <ul>
                <li>
                  Quantidade: <strong>1</strong>
                </li>
                <li>
                  Sabor: <strong>Mango Reiz</strong>
                </li>
                <li>
                  Valor Unitário: <strong>R$ 120,00</strong>
                </li>
              </ul>
            </div>
            <div>
              <p>
                Status: <strong>Em trânsito</strong>
              </p>
              <CustomButton text="Rastrear pedido" buttonType="main-button" />
            </div>
            <div>
              <p>
                <strong>Resumo da compra</strong>
              </p>
              <ul>
                <li>
                  Pedido: <strong>12365</strong>
                </li>
                <li>
                  Data do pedido: <strong>30/08/2023</strong>
                </li>
                <li>
                  Valor total: <strong>R$ 120,00</strong>
                </li>
                <li>
                  Previsão de entrega: <strong>15/09/2023</strong>
                </li>
              </ul>
              <CustomButton text="Detalhes" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
