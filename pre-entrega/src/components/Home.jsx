import React from "react";
import { Container, Card } from 'react-bootstrap';
import '../styles/home.css';

const Home = () => {
    return (
        <Container className='my-4 home-container'>
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