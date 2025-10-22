import React, { useContext, useMemo } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { DataContext } from "../contexts/Context";

const Navegacion = () => {
    const { products } = useContext(DataContext);
    
    // guarda las categorias para evitar hacer el mismo calculo en cada renderizado
    const categorias = useMemo(() => {
        return [...new Set(products.map(producto => producto.categoria))];
    }, [products]);

    const formatCategoria = (categoria) => {
        return categoria.charAt(0).toUpperCase() + categoria.slice(1);
    };

    return (  
        <Navbar expand="md">
            <Container className='navbar-container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown 
                            title="Productos" 
                            id="productos-dropdown"
                        >
                            {categorias.map(categoria => (
                                <NavDropdown.Item 
                                    key={categoria} 
                                    as={Link} 
                                    to={`/productos/categoria/${categoria.toLowerCase()}`}
                                >
                                    {formatCategoria(categoria)}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Navegacion;