import { useContext } from "react";
import { DataContext } from "../contexts/Context";

export function useCarrito() {
    const context = useContext(DataContext);
    
    if (!context) {
        throw new Error('useCarrito debe ser usado dentro de un ContextProvider');
    }
    
    return context;
}