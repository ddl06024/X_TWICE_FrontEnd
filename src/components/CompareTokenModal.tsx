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
          style={{ fontWeight: "bold", color: "blue" }}
        >
          이미 등록되어 있는 사진과 너무 유사하여 등록이 안됩니다!
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
                  style={{ maxHeight: "400px" }}
                  src={preImage}
                />
                <Card.Body>
                  <Card.Title style={{ color: "green" }}>
                    고객님이 등록을 시도한 사진
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="bottom"
                  style={{ maxHeight: "400px" }}
                  src={similarUrl}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>
                    이미 등록되어 있는 사진
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
