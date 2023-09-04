import React from "react";
import "./styles.scss";
import CustomSubtitle from "../shared/subtitle";
import logo from "../../assets/images/logo-navbar.png";
import IconInstagram from "../../assets/svg/IconInstagram";
import IconWhatsapp from "../../assets/svg/IconWhatsapp";

const Footer = () => {
  return (
    <footer>
      <section className="footer-background">
        <div className="main-container footer-container">
          <div className="footer-section">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">email@generico.com</a>
                </li>
                <li>
                  <a href="#">(41) 99999-6455</a>
                </li>
                <li>
                  <a href="#">Endereço</a>
                </li>
              </ul>
            </div>
            <div>
              <IconInstagram width="30px" />
              <IconWhatsapp width="30px" />
            </div>
          </div>
          <div className="footer-section">
            <CustomSubtitle text="Navegação" />
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Minha Conta</a>
              </li>
              <li>
                <a href="#">Carrinho</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <CustomSubtitle text="Minha Conta" />
            <ul>
              <li>
                <a href="#">Meus endereços</a>
              </li>
              <li>
                <a href="#">Meus pedidos</a>
              </li>
              <li>
                <a href="#">Meus dados</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <CustomSubtitle text="Formas de Pagamento" />
          </div>
        </div>
      </section>

      <section className="credits-background">
        <p>
          &copy; 2023. Todos os direitos reservados. Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/patrick-nazareth-dev/"
            target="_blank"
            rel="noreferrer"
          >
            Patrick Nazareth
          </a>
          .
        </p>
      </section>
    </footer>
  );
};

export default Footer;
