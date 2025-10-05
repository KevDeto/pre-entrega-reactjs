import React from "react";
import { Container, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className='my-4 inicio'>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenido a Mi Tienda</Card.Title>
                    <Card.Text>
                        Explora nuestros productos y encuentra las mejores ofertas.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;