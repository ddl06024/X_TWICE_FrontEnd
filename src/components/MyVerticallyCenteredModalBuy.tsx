import {
  Button,
  Modal,
  Image,
  FormControl,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import React from "react";

function MyVerticallyCenteredModalBuy(props: any) {
  const info = props.info.value;
  const onClickHandle = () => {
    //props.value.onSale = false;
    //props.onClick(props.value);
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          제목 : {info.picture_title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={info.picture_url} fluid />
        <h4>
          <ListGroup horizontal="md" className="my-2">
            <ListGroup.Item>카테고리 : {info.picture_category}</ListGroup.Item>
            <ListGroup.Item>ID : {info.token_id}</ListGroup.Item>
            <ListGroup.Item>조회수 : {info.picture_count} </ListGroup.Item>
          </ListGroup>
        </h4>
        <p>설명 : {info.picture_info}</p>
      </Modal.Body>
      <Modal.Footer>
        <InputGroup
          className="mb-3"
          size="lg"
          style={{ display: "flex", width: "20vw" }}
        >
          <FormControl
            // placeholder={props.value.price + " klay"}
            readOnly
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{
              textAlign: "center",
            }}
            placeholder={`${info.picture_price}` + " klay"}
          />
          <Button id="button-addon2" onClick={onClickHandle}>
            구매하기
          </Button>
        </InputGroup>
      </Modal.Footer>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModalBuy;
