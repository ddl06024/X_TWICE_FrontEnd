import React from "react";
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

  return (
    <Col lg={3} md={4} xs={12} style={{ margin: "1rem auto" }}>
      <Card>
        <Card.Img variant="bottom" src="../tempImages/big.jpg" />
        <Card.Body style={{ height: "210px" }}>
          <Card.Title>{props.value.title}</Card.Title>
          <Card.Text>
            사진 ID : 12
            <br />
            <Button
              variant="dark"
              onClick={() => setModalShow(true)}
              style={{ marginTop: "0.5rem" }}
            >
              자세히 보기
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title={props.value.title}
              desc={props.value.desc}
              src="../tempImages/big.jpg"
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
              <Button
                variant="danger"
                id="button-addon2"
                onClick={onClickHandle}
              >
                판매취소
              </Button>
            </InputGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsMyTokenOnSale;
