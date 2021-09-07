import React, { useRef, useReducer, useEffect, useState } from "react";

import { Button, Container, Form, Modal, Row } from "react-bootstrap";


const BuyTokenModal: React.FC<any> = ({
  setErrors,
  information,
  insertHistory,
  buyToken,
  BuyToken,
  cancleTokenOnSale,
  show,
  onHide,
  history,
  decoded,
  balance,
  tokenUserAccount,
}) => {
  const buyHandler = async () => {
    try {
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);
      console.log(information.token_id.toString());
      await buyToken(information.token_id.toString());
      await insertHistory({
        user_num1: information.user_num,
        token_id: information.token_id.toString(),
        picture_url: information.picture_url.toString(),
        picture_title: information.picture_title.toString(),
        picture_price: information.picture_price,
      });
      const { data } = await BuyToken({ token_id: information.token_id });
      await cancleTokenOnSale({
        token_id: information.token_id,
      });
    } catch (err) {
      alert(err);
      const isAxiosError = err?.isAxiosError ?? false;
      if (isAxiosError) {
        const {
          response: { data },
        } = err;
        console.log(data);
        alert(data);
        setErrors(data);
        console.log(err);
      }
    }
    alert("구매성공!!");
    onHide();
    history.goBack();
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
          결제정보입니다.
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
          <div style={{ display: "flex" }}>
            <div style={{ minWidth: "90px" }}>
              현 주소 :
              <br />
              NFT 아이디 :
              <br />
              토큰 제목 :
              <br />
              가격 :
            </div>

            <div style={{ marginLeft: "1rem" }}>
              {tokenUserAccount}
              <br />
              {information.token_id}
              <br />
              {information.picture_title}
              <br />
              <span style={{ fontWeight: "bold" }}>
                {information.picture_price}
              </span>
              {" klay"}
            </div>
          </div>
          <hr />
          <h5>내 정보</h5>
          <div style={{ display: "flex" }}>
            <div style={{ minWidth: "90px" }}>
              내 주소 :
              <br />
              보유 클레이 :
            </div>
            <div style={{ marginLeft: "1rem" }}>
              {decoded.user_account}
              <br /> <span style={{ fontWeight: "bold" }}>{balance}</span>{" "}
              {" klay"}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={buyHandler}>
          결제하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyTokenModal;
