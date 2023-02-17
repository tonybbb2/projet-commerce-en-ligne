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

function App() {
  return (
    <AuthContextProvider>
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
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;