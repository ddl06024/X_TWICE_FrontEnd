import React, {useState} from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";


const CardsSell: React.FC<any> = (props) => {
    const [price, setPrice] = useState<any>(0);
    const handleChange = (e:any)=>{
        setPrice(e.target.value);
    }
    const sellHandle = ()=>{
        props.value.price = price;
        props.value.onSale = true;
        props.onClick(props.value);
    }
    
    return (
        <Col lg={3} md={4} xs={12} >
      <Card>
        <Card.Img variant="bottom" src="../tempImages/big.jpg" />
        <Card.Body>
          <Card.Title>제목</Card.Title>
          <Card.Text>
            사진 ID : 12<br/> 제목 : {props.value.title}<br/>
            소유자 : 지의신<br/>게시일 : 2021.07.21<br/>
            설명 : {props.value.desc}
          </Card.Text>
          <Row>
          <Col><Form.Control placeholder="klay" onChange={handleChange} /></Col>
          <Col><Button variant="primary" onClick={sellHandle}>판매하기</Button></Col>
 
        </Row>
          
        </Card.Body>
      </Card>
      </Col>
    );
};
export default CardsSell;




