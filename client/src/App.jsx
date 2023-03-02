import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import  Footer  from "./components/Footer";
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { AuthContextProvider } from "./components/context/AuthContext";
import { Home } from './components/Home'
import { Details } from './components/Details'
import { Cart } from "./components/Cart"
import { Checkout } from "./components/Checkout"
import { Collections } from "./components/Collections"
import { ProductsByGender } from "./components/ProductsByGender";
import { AllProducts } from "./components/AllProducts";
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

export const CartContext = React.createContext();

function App() {
  const [cartId, setcartId] = useState('cart');
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);

  // useEffect(() => {
  //   let id = Cookies.get('cart');
  //   if (!id) {
  //     let id = ('cart' + uuidv4()).replaceAll("-", "");
  //     Cookies.set('cart', id, { expires: 365 });
  //   }
  //   setcartId(id);
  // }, []);

  // useEffect(() => {
  //   //console.log(cartId);
  // }, [cartId]);


  const cartIdContext = { cartId, setcartId, cart, setCart, cartItems, setCartItems, totalPrice, settotalPrice }
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
            <Route path="/collections/:type" element={<Collections />} />
            <Route path="/products/:gender" element={<ProductsByGender />} />
            <Route path="/products" element={<AllProducts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </AuthContextProvider>
  );
}

export default App;