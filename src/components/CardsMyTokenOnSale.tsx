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
const CardsMyTokenOnSale: React.FC<any> = (props) => {
  const onClickHandle = () => {
    props.value.onSale = false;
    props.onClick(props.value);
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  return (
    <Col lg={3} md={4} xs={12} style={{ margin: "1rem auto" }}>
      <Card>
        <Card.Img variant="bottom" src="../tempImages/big.jpg" />
        <Card.Body style={{ height: "185px" }}>
          <Card.Title>제목</Card.Title>
          <Card.Text>
            사진 ID : 12
            {/*  <br /> 제목 : {props.value.title}
            <br />
            소유자 : 지의신
            <br />
            게시일 : 2021.07.21*/}
            <br />
            {/*설명 : {props.value.desc} */}
            <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
              <Button style={{ marginTop: "0.5rem" }} variant="dark">
                자세히보기
              </Button>
            </OverlayTrigger>
            <br />
            <InputGroup className="mb-3" style={{ marginTop: "1rem" }}>
              <FormControl
                placeholder={props.value.price + " klay"}
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
