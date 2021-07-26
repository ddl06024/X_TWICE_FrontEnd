import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Navbar, Row } from "react-bootstrap";
const CardsMyTokenOnSale: React.FC<any> = (props) => {
  const onClickHandle = ()=>{
    props.value.onSale = false;
    props.onClick(props.value);
  }
  return (
    <Col lg={3} md={4} xs={12} style={{margin:'1rem auto'}}>
    <Card >
      <Card.Img variant="bottom" src="../tempImages/big.jpg" />
      <Card.Body>
        <Card.Title>제목</Card.Title>
        <Card.Text>
            사진 ID : 12<br/> 제목 : {props.value.title}<br/>
            소유자 : 지의신<br/>게시일 : 2021.07.21<br/>
            설명 : {props.value.desc}
          </Card.Text>
        <Row >
        <Col><h6 style={{
                      textAlign:"center", marginTop:8, color:"red"
                    }}>{props.value.price}</h6></Col>
        <Col><Button variant="danger" onClick={onClickHandle}>판매취소</Button></Col>

          </Row>
        
      </Card.Body>
    </Card>
    </Col>
  );
                  }
export default CardsMyTokenOnSale;


