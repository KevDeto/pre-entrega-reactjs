import React from 'react';
import { useCarrito } from '../hooks/useCarrito';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

const Productos = () => {
    const { products, loading, error, agregarAlCarrito } = useCarrito();
  
    const { categoria } = useParams();
    const productosFiltrados = categoria 
        ? products.filter(producto => 
            producto.categoria.toLowerCase() === categoria.toLowerCase())
        : products;
    return (
        <Container className='my-4 productos'>
            <Row>
                {
                    productosFiltrados.map((item) => (
                        <Col sm={6} md={4} className="mb-4" key={item.id}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>{item.nombre}</Card.Title>
                                </Card.Header>
                                <Card.Img variant="top" src={item.imagen} />
                                <Card.Body>
                                    <Card.Text>Precio: ${item.precio}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={() => agregarAlCarrito(item)}>Agregar al carrito</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}
 
export default Productos;