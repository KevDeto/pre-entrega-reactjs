import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (  
        <Navbar bg="black" >
            <Container>
                <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" href="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/productos" href="productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/carrito" href="carrito">Carrito</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
 
export default Navegacion;