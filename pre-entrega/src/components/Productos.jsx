import React from 'react';
import { useCarrito } from '../hooks/useCarrito';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/App.css';

const Productos = () => {
    const { products, loading, error, agregarAlCarrito } = useCarrito();
/*    
    if (loading) return <div>Cargando productos...</div>;
    if (error) return <div>Error: {error}</div>;
*/
    return (
        <Container className='my-4 productos'>
            <Row>
                {
                    products.map((item) => (
                        <Col sm={6} md={4} className="mb-4" key={item.id}>
                            <Card>
                                <Card.Header className=''>
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