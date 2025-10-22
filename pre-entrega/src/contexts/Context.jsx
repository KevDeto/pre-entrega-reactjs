import { createContext, useState, useEffect, useCallback } from "react";

const DataContext = createContext();

// Constantes para URLs y mensajes
const API_URL = 'https://68e16bd68943bf6bb3c42d9c.mockapi.io/api/v1/productos';

export function ContextProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch de productos
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: No se pudieron cargar los productos`);
                }
                
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Función para agregar al carrito con useCallback
    const agregarAlCarrito = useCallback((producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { 
                            ...item, 
                            cantidad: item.cantidad + 1, 
                            precioTotal: (item.cantidad + 1) * Number(item.precio)
                          }
                        : item
                );
            } else {
                return [
                    ...prevCarrito, 
                    { 
                        ...producto,
                        cantidad: 1, 
                        precioTotal: Number(producto.precio)
                    }
                ];
            }
        });
    }, []);

    // Función para limpiar el carrito
    const limpiarCarrito = useCallback(() => {
        setCarrito([]);
    }, []);

    // Función para limpiar errores
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    // Valor del contexto
    const valor = {
        products,
        carrito,
        agregarAlCarrito,
        limpiarCarrito,
        loading,
        error,
        clearError
    };

    return (
        <DataContext.Provider value={valor}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext };