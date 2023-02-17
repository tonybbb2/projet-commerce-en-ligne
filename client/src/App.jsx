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
          <Route path="/produts/men" element={<MenProducts />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;