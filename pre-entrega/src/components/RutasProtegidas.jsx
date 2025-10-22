import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const RutasProtegidas = ({ 
    children, 
    isAuthenticated, 
    redirectPath = '/login' 
}) => {
    const location = useLocation();

    // Si no esta autenticado, te redirige al login guardando la ubicación actual
    if (!isAuthenticated) {
        return (
            <Navigate 
                to={redirectPath} 
                replace 
                state={{ from: location }}
            />
        );
    }

    return children;
};

export default RutasProtegidas;