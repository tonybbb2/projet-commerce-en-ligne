import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login"
import { Hero } from "./components/Hero";
import { Register } from "./components/Register"
import Trending from "./components/Trending"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Trending />
    </BrowserRouter>
  );
}

export default App;
