import { Button, Modal, Image, FormControl, InputGroup } from "react-bootstrap";
import React from "react";

function MyVerticallyCenteredModalBuy(props: any) {
  console.log(props);
  const onClickHandle = () => {
    props.value.onSale = false;
    props.onClick(props.value);
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
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.src} fluid />
        <h4>카테고리 : {props.category}</h4>
        <p>설명 : {props.desc}</p>
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
            placeholder="klay"
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
