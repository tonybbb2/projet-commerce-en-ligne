import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from './components/Home'
import { Details } from './components/Details'
import Cart from "./components/Cart"

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
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;