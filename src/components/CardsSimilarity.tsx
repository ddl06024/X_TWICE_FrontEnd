import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
const CardsSimilarity: React.FC<{}> = () => {
    const history = useHistory();
    return (
        <Nav className="justify-content-center" style={{width: '40rem auto', margin:'4rem auto'}}>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="bottom" src="../tempImages/big.jpg" />
        <Card.Body>
          <Card.Title>제목</Card.Title>
          <Card.Text>
             해당 사진이 유사도 검사를 통과하여 등록되었습니다.
          </Card.Text>
          
          <Row >
              <Col>
              <Nav className="justify-content-center" >
         <Button variant="success" onClick={()=>{history.push('/myPage/myToken')}} >마이페이지</Button></Nav></Col>
         <Col>
         <Nav className="justify-content-center">
         <Button variant="outline-success" onClick={()=>{history.push('/')}}>홈으로</Button></Nav></Col>
          
            </Row>
           
        </Card.Body>
      </Card>
      </Nav>
    );
};

export default CardsSimilarity;


