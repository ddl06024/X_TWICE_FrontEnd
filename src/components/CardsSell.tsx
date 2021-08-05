import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const CardsSell: React.FC<any> = (props) => {
  const [price, setPrice] = useState<any>(null);
  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };
  const sellHandle = () => {
    if (!price) {
      alert("값을 입력하세요");
      return;
    }
    props.value.price = price;
    props.value.onSale = true;
    props.onClick(props.value);
  };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col lg={3} md={4} xs={12} style={{ margin: "1rem auto" }}>
      <Card>
        <Card.Img variant="bottom" src="../tempImages/big.jpg" />
        <Card.Body style={{ height: "210px" }}>
          <Card.Text
            style={{
              fontWeight: "bold",
              marginBottom: "0.3rem",
              maxWidth: "100%",
            }}
            className="d-inline-block text-truncate"
          >
            제목 : {props.value.title}
          </Card.Text>
          <br />
          <span style={{ fontSize: "0.8rem" }}>사진 ID : 12</span>
          <br />
          <Button
            variant="dark"
            onClick={() => setModalShow(true)}
            style={{ marginTop: "0.8rem" }}
          >
            자세히 보기
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            title={props.value.title}
            desc={props.value.desc}
            src="../tempImages/big.jpg"
            category={props.value.category}
          />
          <hr />
          <InputGroup className="mb-3" style={{ marginTop: "1rem" }}>
            <FormControl
              placeholder="가격(klay)"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ textAlign: "center" }}
              onChange={handleChange}
            />
            <Button variant="success" id="button-addon2" onClick={sellHandle}>
              판매하기
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsSell;
