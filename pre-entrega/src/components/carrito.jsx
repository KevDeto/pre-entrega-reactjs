import React from 'react';
import { useCarrito } from '../hooks/useCarrito';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Carrito = () => {
    const { carrito } = useCarrito();

    if (carrito.length === 0) {
        return (
        <Container className='my-4 carrito'>
            <Card>
                <Card.Body>
                    <Card.Title>Carrito de compras</Card.Title>
                    <Card.Text>El carrito esta vacio</Card.Text>
                </Card.Body>
            </Card>
        </Container>
        );
    }

    const totalGeneral = carrito.reduce((sum, item) => sum + item.precioTotal, 0);

    return ( 
        <Container className='carrito'>
            <Row>
                {
                    carrito.map((item) => (
                        <Col lg={12}>
                            <Card className="mb-3" key={item.id}>
                                <Container className='d-flex justify-content-between align-items-center'>
                                    <Card.Img src={item.imagen} style={{width:"80px"}}/>
                                    <Card.Body className='p-3'> {item.nombre} - cantidad {item.cantidad}</Card.Body>
                                    <Card.Footer className='p-3'>${item.precio}</Card.Footer>
                                </Container>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <Card className="mt-4">
                <Card.Body className="text-end">
                    <h4>Total General: ${totalGeneral}</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}
 
export default Carrito;