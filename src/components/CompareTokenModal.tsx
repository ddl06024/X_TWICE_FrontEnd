import React, { useRef, useReducer, useEffect, useState } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

const CompareTokenModal: React.FC<any> = ({
  similarUrl,
  show,
  onHide,
  preImage,
}) => {
  const clickHandler = () => {
    onHide();
  };
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontWeight: "bold" }}
        >
          등록 불가 : 기존 사진과 유사!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="bottom"
                  style={{ maxHeight: "500px" }}
                  src={preImage}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    현재 사진
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="bottom"
                  style={{ maxHeight: "500px" }}
                  src={similarUrl}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    기존 사진
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={clickHandler}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompareTokenModal;
