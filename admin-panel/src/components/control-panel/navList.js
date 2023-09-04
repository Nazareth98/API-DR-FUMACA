import IconCart from "../../assets/svg/IconCart";
import IconCategory from "../../assets/svg/IconCategory";
import IconDashboard from "../../assets/svg/IconDashboard";
import IconExit from "../../assets/svg/IconExit";
import IconPerson from "../../assets/svg/IconPerson";
import IconProducts from "../../assets/svg/IconProducts";

const items = [
  {
    id: 1,
    name: "Dashboard",
    icon: <IconDashboard width="25px" />,
    selected: true,
  },
  {
    id: 2,
    name: "Produtos",
    icon: <IconProducts width="25px" />,
    selected: false,
  },
  {
    id: 3,
    name: "Categorias",
    icon: <IconCategory width="25px" />,
    selected: false,
  },
  {
    id: 4,
    name: "Vendas",
    icon: <IconCart width="25px" />,
    selected: false,
  },
  {
    id: 5,
    name: "Administradores",
    icon: <IconPerson width="25px" />,
    selected: false,
  },
  {
    id: 6,
    name: "Sair",
    icon: <IconExit width="25px" />,
    selected: false,
  },
];

export default items;
