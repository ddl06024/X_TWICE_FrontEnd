import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { usePictures } from "../hooks/usePictures";
import MyVerticallyCenteredModalBuy from "./MyVerticallyCenteredModalBuy";
const CardsBuy: React.FC<any> = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [src, setSrc] = useState(props.value.picture_url);
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
            제목 : {props.value.picture_title}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>사진 ID : 12</ListGroupItem>
            <ListGroupItem>가격 : {""}</ListGroupItem>
          </ListGroup>
          <Button
            variant="dark"
            onClick={() => {
              setModalShow(true);
            }}
            style={{ marginTop: "0.8rem" }}
          >
            자세히 보기
          </Button>
          <MyVerticallyCenteredModalBuy
            show={modalShow}
            onHide={() => setModalShow(false)}
            info={props}
            //category={props.value.category}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsBuy;
