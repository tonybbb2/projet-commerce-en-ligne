import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import Cart from "./Cart"

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;