import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./styles/main.scss";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Products from "./components/products";
import Login from "./components/login";
import Account from "./components/account";
import Cart from "./components/cart";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";
import ProductDetails from "./components/productDetails";
import SignUp from "./components/signUp";
import FloatingWhatsAppIcon from "./components/floatWppIcon";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScreenSizeProvider>
          <AuthProvider>
            <Navbar />
            <FloatingWhatsAppIcon />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="produtos" element={<Products />} />
              <Route path="produtos/:id" element={<ProductDetails />} />
              <Route path="login" element={<Login />} />
              <Route path="conta" element={<Account />} />
              <Route path="carrinho" element={<Cart />} />
              {/*<Route path="sobre" element={<About />} />*/}
              <Route path="cadastrar" element={<SignUp />} />
            </Routes>
          </AuthProvider>
        </ScreenSizeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
