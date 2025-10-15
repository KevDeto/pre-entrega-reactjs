import React from "react";
import Carrito from "./components/Carrito";
import Header from "./components/Header";
import Productos from "./components/Productos";
import Navegacion from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column gap-3 container-app">
        <div className="sticky-top shadow-sm">
          <div className="container-header">
            <Header />
          </div>
          <div className="container-navbar">
            <Navegacion />
          </div>
        </div>
        <div >
          <Routes>
            {/*<Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />*/}
            <Route path="/productos/categoria/:categoria" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
