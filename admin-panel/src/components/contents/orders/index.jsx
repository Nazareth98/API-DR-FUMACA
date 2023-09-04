import React, { useEffect, useState } from "react";
import "./styles.scss";
import Table from "../../shared/table";
import Title from "../../shared/title";
import IconCart from "../../../assets/svg/IconCart";
import { getData } from "../../../api";

const Orders = () => {
  const [dataTable, setDataTable] = useState([]);
  const headers = ["Data", "Status do pagamento", "Comprador", "Detalhes"];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const json = await getData("vendas");
        console.log(json);
        const newDataTable = json.map((order) => ({
          id: order.orderId,
          columns: [
            order.orderDate,
            order.paymentStatus,
            `${order.customer.name} ${order.customer.lastName}`,
            `${order.nfc ? "NFC: " + order.nfc : "Pendente"}`,
          ],
        }));
        setDataTable(newDataTable);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="content-container">
      <div className="content-title">
        <IconCart width="30px" />
        <Title text="Vendas" size="small" />
      </div>
      <Table data={dataTable} headers={headers} />
    </div>
  );
};

export default Orders;
