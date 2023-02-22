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
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

export const CartContext = React.createContext();

function App() {
  const [cartId, setcartId] = useState('cart');
  const [cart, setCart] = useState([]);
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    let id = Cookies.get('cart');
    if (!id) {
      let id = ('cart' + uuidv4()).replaceAll("-", "");
      Cookies.set('cart', id, { expires: 365 });
    }
    setcartId(id);
  }, []);

  useEffect(() => {
    console.log(cartId);
  }, [cartId]);


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