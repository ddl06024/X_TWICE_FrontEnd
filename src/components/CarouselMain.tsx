import React from "react";
import { Button, Carousel, Col, Container, Nav, Row } from "react-bootstrap";

const CarouselMain: React.FC<{}> = () => {
    return (
      
      <Container  className="mt-4">
        <Nav className="justify-content-center">
        <Row>
        
        <Col  md="auto" >
          <h1>NFT를 수집하고</h1>
          <h1> 판매해보세요!</h1>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="outline-primary">Primary</Button>{' '}
        </Col>
        
    <Col><div style={{ width: 560, height: 'auto' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../tempImages/big.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../tempImages/big.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../tempImages/big.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div></Col>
    
  
      
        </Row>
        </Nav>
        </Container>
      
    );
};

export default CarouselMain;


