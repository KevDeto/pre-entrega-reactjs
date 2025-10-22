import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Carrito from "./components/Carrito";
import Header from "./components/Header";
import Productos from "./components/Productos";
import Navegacion from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import RutasProtegidas from "./components/RutasProtegidas";

import { ContextProvider } from "./contexts/Context";
import { AuthProvider } from "./contexts/AuthContext";

import { useAuth } from "./contexts/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/home.css";

function AppRoutes() {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productos/categoria/:categoria" element={<Productos />} />
            
            <Route 
                path="/carrito" 
                element={
                    <RutasProtegidas isAuthenticated={isAuthenticated}>
                        <Carrito />
                    </RutasProtegidas>
                } 
            />
            
            {/* Ruta 404 */}
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <ContextProvider>
                <Router>
                    <div className="d-flex flex-column gap-3 container-app">
                        <div className="sticky-top shadow-sm container-header-navbar">
                            <div className="container-header">
                                <Header />
                            </div>
                            <div className="container-navbar">
                                <Navegacion />
                            </div>
                        </div>
                        
                        <main>
                            <AppRoutes />
                        </main>
                    </div>
                </Router>
            </ContextProvider>
        </AuthProvider>
    );
}

export default App;