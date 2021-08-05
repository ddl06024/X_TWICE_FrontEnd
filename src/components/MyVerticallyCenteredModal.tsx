import { Button, Modal, Image } from "react-bootstrap";
import React from "react";

function MyVerticallyCenteredModal(props: any) {
  console.log(props);
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
