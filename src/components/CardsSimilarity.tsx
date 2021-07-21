import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const CardsSimilarity: React.FC<{}> = () => {
    return (
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="bottom" src="../tempImages/big.jpg" />
        <Card.Body>
          <Card.Title>제목</Card.Title>
          <Card.Text>
             해당 사진에 대한 유사도 검사 결과 사진 등록이 가능합니다.
          </Card.Text>
          
          <Row >
          <Col><Button variant="success" style={{marginLeft:60}}>마이페이지</Button>{' '}
          </Col>
          
          <Col><Button variant="outline-success" style={{marginLeft:10}}>홈으로</Button>{' '}</Col>
          
            </Row>
           
        </Card.Body>
      </Card>
    );
};

export default CardsSimilarity;


