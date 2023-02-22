import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { AuthContextProvider } from "./components/context/AuthContext";
import { Home } from './components/Home'
import { Details } from './components/Details'
import { Cart } from "./components/Cart"
import { Checkout } from "./components/Checkout"
import { Collections } from "./components/Collections"
import { MenProducts } from "./components/MenProducts";
import axios from 'axios'

export const CartContext = React.createContext();

function App() {
  const [cartId, setcartId] = useState('cart');
  const [cart, setCart] = useState([]);
  const [cartItems, setcartItems] = useState([]);

  //Prend l'adresse ip de l'utilisateur pour créer un cartId
  const getIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    var ip = res.data.IPv4.replaceAll(".", "");
    setcartId('cart' + ip);
  }

  useEffect(() => {
    getIP()
  }, [])


  const cartIdContext = { cartId, setcartId, cart, setCart, cartItems, setcartItems }
  return (
    <AuthContextProvider>
      <CartContext.Provider value={cartIdContext}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/products/men" element={<MenProducts />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </AuthContextProvider>
  );
}

export default App;