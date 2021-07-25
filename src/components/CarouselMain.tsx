import React from "react";
import { Button, Carousel, Col, Container, Nav, Row } from "react-bootstrap";
import {useHistory} from 'react-router-dom'

const CarouselMain: React.FC<{}> = () => {
    const history = useHistory();
    
    return (
      
      <Container  style={{marginTop: '4rem'}}>
        <Nav className="justify-content-center"  >
        <Row style={{width:'75%'}} className="align-items-center">
        
        <Col md="auto"  >
        <div style={{textAlign:'center'}}>
          <h1>NFT를 수집하고</h1> 
          <h1> 판매해보세요!</h1>
         </div>
          <Nav className="justify-content-center" >
             <Button variant="primary" style={{margin:10}} onClick={()=>{history.push('/registerPicture')}}>만들기</Button>{' '}
          <Button variant="outline-primary" style={{margin:10}} onClick={()=>{history.push('/viewPictures/price')}}>보기</Button>{' '}</Nav>
          
        </Col>
        
    <Col style={{alignContent:'center'}} >
        <Carousel >
          <Carousel.Item >
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
        </Col>
    
  
      
        </Row>
        </Nav>
        </Container>
    
    );
};

export default CarouselMain;


