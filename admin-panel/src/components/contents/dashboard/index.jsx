import React, { useEffect, useState } from "react";
import "./styles.scss";
import Title from "../../shared/title";
import IconDashboard from "../../../assets/svg/IconDashboard";
import { getData } from "../../../api";
import { treatDataOrders } from "../../../utils";

const Dashboard = () => {
  const [ordersData, setOrdersData] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const json = await getData("vendas");
        const { today, lastWeek, lastMonth } = treatDataOrders(json);
        setOrdersData({ today, lastWeek, lastMonth });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="content-container">
      <div className="content-title">
        <IconDashboard width="30px" />
        <Title text="Página Inicial" size="small" />
      </div>
      <div className="dashboard-section">
        <h3>Vendas</h3>
        <div className="dashboard-card-container">
          {ordersData.today && (
            <div className="dashboard-card">
              <p>Hoje</p>
              <p>{ordersData.today.quantity}</p>
              <span>{ordersData.today.quantity} vendas hoje</span>
            </div>
          )}
          {ordersData.lastWeek && (
            <div className="dashboard-card">
              <p>Essa semana</p>
              <p>{ordersData.lastWeek.quantity}</p>
              <span>{ordersData.lastWeek.quantity} vendas essa semana</span>
            </div>
          )}
          {ordersData.lastMonth && (
            <div className="dashboard-card">
              <p>Esse mês</p>
              <p>{ordersData.lastMonth.quantity}</p>
              <span>{ordersData.lastMonth.quantity} vendas esse mês</span>
            </div>
          )}
        </div>
      </div>
      <div className="dashboard-section">
        <h3>Receitas</h3>
        <div className="dashboard-card-container">
          {ordersData.today && (
            <div className="dashboard-card">
              <p>Hoje</p>
              <p>{ordersData.today.quantity}</p>
              <span>{ordersData.today.quantity} vendas hoje</span>
            </div>
          )}
          {ordersData.lastWeek && (
            <div className="dashboard-card">
              <p>Essa semana</p>
              <p>{ordersData.lastWeek.quantity}</p>
              <span>{ordersData.lastWeek.quantity} vendas essa semana</span>
            </div>
          )}
          {ordersData.lastMonth && (
            <div className="dashboard-card">
              <p>Esse mês</p>
              <p>{ordersData.lastMonth.quantity}</p>
              <span>{ordersData.lastMonth.quantity} vendas esse mês</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
