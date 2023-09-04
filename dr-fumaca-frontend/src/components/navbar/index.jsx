import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logoImg from "../../assets/images/logo-navbar.png";
import IconCart from "../../assets/svg/IconCart";
import IconPerson from "../../assets/svg/IconPerson";
import IconTabMenu from "../../assets/svg/IconTabMenu";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import IconProducts from "../../assets/svg/IconProducts";
import IconHome from "../../assets/svg/IconHome";
import IconAbout from "../../assets/svg/IconAbout";
import { useAuth } from "../../contexts/AuthContext";
import { formatString, getCartItems } from "../../utils";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isMobile } = useScreenSize();
  const { user } = useAuth();
  let name;
  const cartItems = getCartItems();
  const { login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      login({ token });
    }
  }, []);

  if (user) {
    name = formatString(user.name);
  }

  console.log(user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="nav-background">
      <div className="main-container nav-container">
        <div className="nav-session left-nav-session">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="nav-session right-nav-session">
          {isMobile ? (
            <div className="menu-toggle" onClick={toggleMenu}>
              <IconTabMenu width="40px" />
            </div>
          ) : (
            <>
              <nav className="nav-container">
                <Link to="/">Home</Link>
                <Link to="produtos">Produtos</Link>
                {/* <Link to="sobre">Sobre</Link> */}
              </nav>

              <div className="nav-container">
                {user ? (
                  <Link to="conta" className="title-container">
                    {name && <span>Olá, {name}!</span>}
                    <IconPerson width="30px" />
                  </Link>
                ) : (
                  <Link to="login">Entrar</Link>
                )}
              </div>
              <div className="nav-container">
                <Link to="carrinho">
                  <IconCart width="30px" />
                  {cartItems.length > 0 ? (
                    <div id="cartIcon-quantity">{cartItems.length}</div>
                  ) : null}
                </Link>
              </div>
            </>
          )}

          {menuVisible && isMobile && (
            <div
              className={`mobile-menu ${menuVisible ? "slide-in" : "fade-out"}`}
            >
              <Link to="/" onClick={closeMenu}>
                <IconHome width="30px" />
                <span>Home</span>
              </Link>
              <Link to="produtos" onClick={closeMenu}>
                <IconProducts width="30px" />
                <span>Produtos</span>
              </Link>
              <Link to="/" onClick={closeMenu}>
                <IconAbout width="30px" />
                <span>Sobre</span>
              </Link>
              <Link to="carrinho" onClick={closeMenu}>
                <IconCart width="30px" />
                <span>Carrinho</span>
              </Link>
              {user ? null : (
                <Link to="login" onClick={closeMenu}>
                  <IconPerson width="30px" />
                  <span>Entrar</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
