import React, { useMemo, useState } from 'react';
import { Container, Card, Row, Col, Button, ListGroup, Alert } from 'react-bootstrap';
import { useCarrito } from '../hooks/useCarrito';
import '../styles/carrito.css';

const Carrito = () => {
    const { carrito, limpiarCarrito } = useCarrito();
    const [compraRealizada, setCompraRealizada] = useState(false);


    const totalGeneral = useMemo(() => {
        return carrito.reduce((sum, item) => sum + item.precioTotal, 0);
    }, [carrito]);

    const handleFinalizarCompra = () => {
        limpiarCarrito();
        setCompraRealizada(true);
    };

    if (compraRealizada) {
        return (
            <Container className='my-4 carrito-comprado'>
                <Alert variant="success" className="text-center">
                    <Alert.Heading>¡Gracias por su compra!</Alert.Heading>
                    <p>Su pedido ha sido procesado exitosamente.</p>
                    <Button 
                        variant="outline-success" 
                        onClick={() => setCompraRealizada(false)}
                    >
                        Volver al carrito
                    </Button>
                </Alert>
            </Container>
        );
    }

    if (carrito.length === 0) {
        return (
            <Container className='my-4 carrito'>
                <Card className="text-center card-carrito-vacio">
                    <Card.Body className="py-5">
                        <Card.Title as="h2" className="mb-3">Carrito de compras</Card.Title>
                        <Card.Text className="fs-5">
                            Tu carrito está vacío
                        </Card.Text>
                        <Button variant="primary" href="/home">
                            Continuar comprando
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    return ( 
        <Container className='my-4 carrito'>
            <Row>
                <Col>
                    <Card className="mb-4 card-container-header">
                        <Card.Header>
                            <h2>Carrito de compras ({carrito.length} {carrito.length === 1 ? 'producto' : 'productos'})</h2>
                        </Card.Header>
                    </Card>
                    
                    {carrito.map((item) => (
                        <Card key={item.id} className="mb-3 shadow-sm">
                            <Card.Body className="p-3">
                                <Row className="align-items-center">
                                    <Col xs={3} md={2}>
                                        <Card.Img 
                                            src={item.imagen} 
                                            alt={item.nombre}
                                            className="img-fluid rounded"
                                        />
                                    </Col>
                                    <Col xs={9} md={6}>
                                        <Card.Title as="h6" className="mb-1">
                                            {item.nombre}
                                        </Card.Title>
                                        <Card.Text className="text-muted mb-0">
                                            Precio unitario: ${item.precio}
                                        </Card.Text>
                                    </Col>
                                    <Col xs={6} md={2} className="text-center">
                                        <Card.Text className="mb-1 fw-bold text-white">
                                            Cantidad: {item.cantidad}
                                        </Card.Text>
                                    </Col>
                                    <Col xs={6} md={2} className="text-end">
                                        <Card.Text className="mb-0 fw-bold ">
                                            ${item.precioTotal.toFixed(2)}
                                        </Card.Text>
                                        <Card.Text className="text-muted small">
                                            ${item.precio} c/u
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
            
            <Card className="mt-4 card-container-body">
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="mb-0">
                            Total ({carrito.length} {carrito.length === 1 ? 'producto' : 'productos'}):
                        </h4>
                    </div>
                    <div className="text-end">
                        <h3 className="mb-3">${totalGeneral.toFixed(2)}</h3>
                        <Button variant="success" size="lg" className="mt-2" onClick={handleFinalizarCompra}>
                            Finalizar compra
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
 
export default Carrito;