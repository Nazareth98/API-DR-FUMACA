import React, { useState } from "react";
import Title from "../shared/title";
import "./styles.scss";
import items from "./navList";
import IconSettings from "../../assets/svg/IconSettings";
import Dashboard from "../contents/dashboard";
import Products from "../contents/products";
import Categories from "../contents/categories";
import Orders from "../contents/orders";
import Admins from "../contents/admins";
import Initial from "../contents/initial";
import { useAuth } from "../../contexts/AuthContext";

const ControlPanel = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { logout, user } = useAuth();

  const handleToggleSession = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem?.name) {
      case "Dashboard":
        return <Dashboard />;
      case "Produtos":
        return <Products />;
      case "Categorias":
        return <Categories />;
      case "Vendas":
        return <Orders />;
      case "Administradores":
        return <Admins />;
      case "Sair":
        logout();
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="panel-container">
      <div className="panel-menu">
        <div className="panel-title">
          <IconSettings width="30px" />
          <Title text="Painel de controle" size="small" />
        </div>

        <nav>
          <ul>
            {items.map((item) => {
              if (user.role === "EDITOR" && item.name === "Administradores") {
                return null;
              }

              return (
                <div
                  onClick={() => handleToggleSession(item)}
                  className={
                    item === selectedItem
                      ? "item-container selected"
                      : "item-container"
                  }
                  key={item.id}
                >
                  {item.icon}
                  <li>{item.name}</li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
      <div
        className={
          selectedItem === null
            ? "panel-content-container"
            : "panel-content-container"
        }
      >
        {selectedItem ? renderContent() : <Initial />}
      </div>
    </div>
  );
};

export default ControlPanel;
