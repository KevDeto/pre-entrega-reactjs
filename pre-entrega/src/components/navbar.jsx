import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { DataContext } from "../contexts/Context";
import { Link } from 'react-router-dom';

const Navegacion = () => {
    const { products } = useContext(DataContext);
  
    const categorias = [...new Set(products.map(producto => producto.categoria))];
    return (  
        <Navbar bg="white" expand="md">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link as={Link} to="/home" href="home">Home</Nav.Link>*/}
                        <NavDropdown title="Productos" id="productos-dropdown">
                            {categorias.map(categoria => (
                            <NavDropdown.Item key={categoria} as={Link} to={`/productos/categoria/${categoria.toLowerCase()}`}>
                                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                            </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to="/carrito" href="carrito">Carrito</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Navegacion;