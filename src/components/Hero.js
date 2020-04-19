import React from 'react';
import Jumbroton from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Hero(){

    return (
        <Jumbroton>
            <Container>
                <Row>
                    <Col>
                    <h2>David Moran-Silva</h2>
                    </Col>
                </Row>
            </Container>
        </Jumbroton>
    );
    
}
export default Hero