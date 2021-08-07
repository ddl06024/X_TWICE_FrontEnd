import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Navbar,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
const CardsMyTokenOnSale: React.FC<any> = (props) => {
  const onClickHandle = () => {
    props.value.onSale = false;
    props.onClick(props.value);
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [src, setSrc] = useState("zzz");
  const imageErrorHandler = () => {
    setSrc("../tempImages/noimage.png");
  };
  return (
    <Col
      style={{
        padding: "0.7rem",
      }}
    >
      <Card>
        <Card.Img
          variant="bottom"
          src={src}
          onError={() => imageErrorHandler()}
          style={{ width: "100%", height: "12rem" }}
        />
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
              placeholder={props.value.price + " klay"}
              readOnly
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ textAlign: "center" }}
            />
            <Button variant="danger" id="button-addon2" onClick={onClickHandle}>
              판매취소
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsMyTokenOnSale;
