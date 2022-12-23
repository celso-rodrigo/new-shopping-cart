import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./styles";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
