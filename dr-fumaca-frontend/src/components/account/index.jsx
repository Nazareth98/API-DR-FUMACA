import React, { useState } from "react";
import "./styles.scss";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../login";
import Footer from "../footer";
import IconCart from "../../assets/svg/IconCart";
import CustomSubtitle from "../shared/subtitle";
import IconPerson from "../../assets/svg/IconPerson";
import IconExit from "../../assets/svg/IconExit";
import IconAddress from "../../assets/svg/IconAddress";
import MyOrders from "./orders";
import MyData from "./data";
import MyAdresses from "./address";
import { useScreenSize } from "../../contexts/ScreenSizeContext";

const Account = () => {
  const { user, logout } = useAuth();
  const [activeMenuItem, setActiveMenuItem] = useState("pedidos");
  const { isMobile } = useScreenSize();

  if (!user) {
    return <Login />;
  }

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    renderContent();
  };

  const handleLogout = () => {
    logout();
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case "pedidos":
        return <MyOrders user={user} />;
      case "dados":
        return <MyData user={user} />;
      case "enderecos":
        return <MyAdresses user={user} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="account-background">
        <div className="main-container account-container">
          <div className="account-menu-container">
            <div
              className={`account-menu-item title-container ${
                activeMenuItem === "pedidos" ? "account-menu-active" : ""
              }`}
              onClick={() => handleMenuItemClick("pedidos")}
            >
              <IconCart width="25px" color="#f27d52" />
              {isMobile ? null : <CustomSubtitle text="Pedidos" />}
            </div>
            <div
              className={`account-menu-item title-container ${
                activeMenuItem === "dados" ? "account-menu-active" : ""
              }`}
              onClick={() => handleMenuItemClick("dados")}
            >
              <IconPerson width="25px" color="#f27d52" />
              {isMobile ? null : <CustomSubtitle text="Seus dados" />}
            </div>
            <div
              className={`account-menu-item title-container ${
                activeMenuItem === "enderecos" ? "account-menu-active" : ""
              }`}
              onClick={() => handleMenuItemClick("enderecos")}
            >
              <IconAddress width="25px" color="#f27d52" />
              {isMobile ? null : <CustomSubtitle text="Endereços" />}
            </div>
            <div
              className={`account-menu-item title-container ${
                activeMenuItem === "sair" ? "account-menu-active" : ""
              }`}
              onClick={handleLogout}
            >
              <IconExit width="25px" color="#f27d52" />
              {isMobile ? null : <CustomSubtitle text="Sair" />}
            </div>
          </div>
          <div className="account-menu-content">
            {activeMenuItem ? renderContent() : <MyOrders />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Account;
