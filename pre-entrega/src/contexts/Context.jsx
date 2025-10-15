import { createContext, useState, useEffect} from "react";

const DataContext = createContext();

export function ContextProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://68e16bd68943bf6bb3c42d9c.mockapi.io/api/v1/productos');
                if (!response.ok) {
                    throw new Error('Error al cargar los productos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { 
                            ...item, 
                            cantidad: item.cantidad + 1, 
                            precioTotal: (item.cantidad + 1) * Number(item.precio) }
                        : item
                );
            } else {
                return [
                    ...prevCarrito, 
                    { 
                        ...producto,
                        cantidad: 1, 
                        precioTotal: Number(producto.precio) 
                    }];
            }
        });
    };

    const valor = {products, carrito, agregarAlCarrito, loading, error};

    return (
        <DataContext.Provider value={valor}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext };