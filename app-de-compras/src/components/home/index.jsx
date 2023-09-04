import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import CustomTable from "../shared/table";

const Home = () => {
  const [itemsData, setItemsData] = useState(null);
  const data = [];
  const headers = ["Nome", "Nível de prioridade", "Preço (R$)", "Categoria"];

  useEffect(() => {
    const getItems = async () => {
      const data = await getData();
      setItemsData(data);
    };
    getItems();
  }, []);

  if (itemsData) {
    for (let i = 0; i < itemsData.length; i++) {
      data.push({
        id: i,
        columns: [
          itemsData[i].name,
          itemsData[i].priority,
          itemsData[i].price,
          itemsData[i].category,
        ],
      });
    }
  }

  return (
    <div>
      <CustomTable headers={headers} data={data} />
    </div>
  );
};

export default Home;
