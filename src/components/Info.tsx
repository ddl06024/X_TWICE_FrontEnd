import React, { useState, useEffect } from "react";
import { getCookie } from "../configs/cookie";
import jwt_decode from "jwt-decode";
import BuyTokenModal from "./BuyTokenModal";
import {
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Button,
  Card,
} from "react-bootstrap";
import { useKlaytn } from "../hooks/useKlaytn.js";
import { useHistory, useLocation } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
import { useTransactions } from "../hooks/useTransactions";
const CardsBuy: React.FC<any> = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { buyToken, getBalance } = useKlaytn();
  const history = useHistory();
  const { insertHistory } = useTransactions();
  const { BuyToken, getUserAccount, cancleTokenOnSale } = usePictures();
  const [userId, setUserId] = useState(getCookie("userId"));
  useEffect(() => {
    const user = getCookie("userId");
    setUserId(user);
  }, []);
  const [balance, setBalance] = useState("");

  useEffect(() => {
    getBalance().then(function (balance) {
      setBalance(balance);
    });
  }, [modalShow]);

  const location = useLocation<any>();
  const [information, setInformation] = useState(location.state.information);
  const [usernum2, setUsernum2] = useState(location.state.user_num2);
  useEffect(() => {
    if (location.state) {
      setInformation(location.state.information);
      setUsernum2(location.state.user_num2);
      console.log(location.state.information.picture_price);
    }
  }, [location]);
  const [src, setSrc] = useState(information.picture_url);
  const imageErrorHandler = () => {
    setSrc("../tempImages/noimage.png");
  };

  const [erros, setErrors] = useState<any>(undefined);

  async function onBuyHandler() {
    setModalShow(true);
  }
  const decoded = jwt_decode(getCookie("myToken"));
  const [tokenUserAccount, setTokenUserAccount] = useState("");
  const ac = information.token_id.toString();
  console.log(ac);
  getUserAccount({
    token_id: ac,
  }).then(function ({ data }) {
    console.log(data[0].user.user_account);
    setTokenUserAccount(data[0].user.user_account);
  });

  return (
    <Container style={{ height: "100%", marginTop: "2rem" }}>
      <Row>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <Image
            fluid
            style={{ height: "auto", width: "100%" }}
            src={src}
            onError={() => imageErrorHandler()}
          />
        </Col>
        <Col>
          <h2>제목 : {information.picture_title}</h2>
          <Breadcrumb>
            <Breadcrumb.Item active>
              ID : #{information.token_id}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              카테고리 : {information.picture_category}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              조회수 : {information.picture_count}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Card>
            <Card.Header as="h5">가격</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                {information.picture_price} Klay
              </Card.Title>
              {/*<Card.Text>구매하시겠습니까?</Card.Text>*/}
              {userId && userId == information.user_num ? (
                <></>
              ) : typeof userId == "undefined" ? (
                <></>
              ) : (
                <div>
                  <Button onClick={onBuyHandler} variant="success">
                    구매하기
                  </Button>
                  <BuyTokenModal
                    setErrors={setErrors}
                    information={information}
                    insertHistory={insertHistory}
                    buyToken={buyToken}
                    BuyToken={BuyToken}
                    cancleTokenOnSale={cancleTokenOnSale}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    history={history}
                    decoded={decoded}
                    balance={balance}
                    tokenUserAccount={tokenUserAccount}
                  />
                </div>
              )}
            </Card.Body>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <Card.Header style={{ fontWeight: "bold" }}>사진 설명</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {information.picture_info} </p>
                {/* <footer className="blockquote-footer">
                  by <cite title="Source Title">{information.user_num}</cite>
                </footer> * */}
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CardsBuy;
