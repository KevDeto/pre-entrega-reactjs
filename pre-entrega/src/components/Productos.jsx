import React, { useMemo } from 'react';
import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCarrito } from '../hooks/useCarrito';

import '../styles/App.css';
import '../styles/productos.css';

const Productos = () => {
    const { products, loading, error, agregarAlCarrito } = useCarrito();
    const { categoria } = useParams();

    // guarda los productos filtrados para evitar cálculos innecesarios en cada renderizado
    const productosFiltrados = useMemo(() => {
        if (!categoria) return products;
        
        return products.filter(producto => 
            producto.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }, [products, categoria]);

    if (loading) {
        return (
            <Container className="my-4 text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando productos...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="my-4">
                <Alert variant="danger">
                    Error al cargar los productos: {error}
                </Alert>
            </Container>
        );
    }

    if (productosFiltrados.length === 0) {
        return (
            <Container className="my-4 text-center">
                <Alert variant="info">
                    {categoria 
                        ? `No se encontraron productos en la categoría "${categoria}"`
                        : 'No hay productos disponibles'
                    }
                </Alert>
            </Container>
        );
    }

    return (
        <Container className='my-4 productos'>
            <Row>
                {productosFiltrados.map((producto) => (
                    <Col key={producto.id} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img 
                                variant="top" 
                                src={producto.imagen} 
                                alt={producto.nombre}
                                className="card-img-custom"
                            />
                            <Card.Header className="border-bottom-0">
                                <Card.Title className="h6 mb-0 text-truncate">
                                    {producto.nombre}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column">
                                <Card.Text className="fw-bold text-white mb-auto">
                                    ${producto.precio}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <Button 
                                    variant="primary" 
                                    size="sm"
                                    onClick={() => agregarAlCarrito(producto)}
                                    className="w-100"
                                >
                                    Agregar al carrito
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
 
export default Productos;