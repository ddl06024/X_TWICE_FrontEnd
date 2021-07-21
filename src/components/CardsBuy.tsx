import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
const CardsBuy: React.FC<{}> = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="bottom" src="../tempImages/big.jpg" />
      <Card.Body>
        <Card.Title>제목</Card.Title>
        <Card.Text>
          사진 ID : 12<br/>
          소유자 : 지의신<br/>
          게시일 : 2021.07.21<br/>
        </Card.Text>
        <Row >
        <Col><h6 style={{
                      textAlign:"center", marginTop:7, color:"green"
                    }}>1.5klay</h6></Col>
        <Col><Button variant="secondary">구매하기</Button></Col>

          </Row>
        
      </Card.Body>
    </Card>
  );
                  }
export default CardsBuy;


