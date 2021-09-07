import React, { useRef, useReducer, useEffect, useState } from "react";

import { Button, Container, Form, Modal, Row } from "react-bootstrap";

const RegisterTokenModal: React.FC<any> = ({
  show,
  onHide,
  registerPicture,
  title,
  date,
  category,
  desc,
  preImage,
}) => {
  const clickHandler = () => {
    registerPicture();
    alert("사진등록 완료");
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
          판매정보입니다.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5>토큰 정보</h5>

          <div className="text-truncate" style={{ display: "flex" }}>
            <div style={{ minWidth: "90px" }}>판매 할 그림 :</div>

            <div style={{ marginLeft: "4.35rem" }}>
              <img src={preImage} />
            </div>
          </div>
          <hr />
          <div className="text-truncate" style={{ display: "flex" }}>
            <div style={{ minWidth: "90px" }}>
              토큰 제목 :
              <br />
              카테고리 :
              <br />
              판매일자 :
              <br />
              설명 :
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <span style={{ fontWeight: "bold" }}> {title}</span>
              <br />
              {category}
              <br />
              {date}
              <br />
              {desc}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={clickHandler}>
          결제하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterTokenModal;
