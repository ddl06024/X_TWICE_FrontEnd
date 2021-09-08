import React, { useRef, useReducer, useEffect, useState } from "react";

import { Button, Container, Form, Modal, Row } from "react-bootstrap";

const SellTokenModal: React.FC<any> = ({
  show,
  onHide,
  setOnSale,
  setUpdateToken,
  token_id,
  picture_title,
  picture_price,
  sell_price,
}) => {
  const clickHandler = () => {
    setOnSale();
    setUpdateToken(new Date().getMilliseconds());
    alert("판매중으로 변경완료");
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
            <div style={{ minWidth: "90px" }}>
              NFT 아이디 :
              <br />
              토큰 제목 :
              <br />
              전에 판매 됐던 가격 :
            </div>

            <div style={{ marginLeft: "1rem" }}>
              {token_id}
              <br />
              {picture_title}
              <br />
              <span style={{ fontWeight: "bold" }}>{picture_price}</span>

              {" klay"}
            </div>
          </div>
          <hr />
          <div className="text-truncate" style={{ display: "flex" }}>
            <div style={{ minWidth: "90px" }}>판매 할 가격 :</div>

            <div style={{ marginLeft: "4.35rem" }}>
              <span style={{ fontWeight: "bold" }}> {sell_price}</span>
              {" klay"}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={clickHandler}>
          판매하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SellTokenModal;
