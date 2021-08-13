import React, { useState, useEffect } from "react";
import { getCookie } from "../configs/cookie";
import {
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Button,
  Card,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
import { useTransactions } from "../hooks/useTransactions";
const CardsBuy: React.FC<any> = (props) => {
  const history = useHistory();
  const { insertHistory } = useTransactions();
  const { BuyToken } = usePictures();
  const [userId, setUserId] = useState(getCookie("userId"));
  useEffect(() => {
    const user = getCookie("userId");
    setUserId(user);
  }, []);
  const location = useLocation<any>();
  const [information, setInformation] = useState(location.state.information);
  const [usernum2, setUsernum2] = useState(location.state.user_num2);
  useEffect(() => {
    if (location.state) {
      setInformation(location.state.information);
      setUsernum2(location.state.user_num2);
    }
  }, [location]);
  const [src, setSrc] = useState(information.picture_url);
  const imageErrorHandler = () => {
    setSrc("../tempImages/noimage.png");
  };

  const [erros, setErrors] = useState<any>(undefined);
  async function onBuyHandler() {
    try {
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);

      await insertHistory({
        user_num2: usernum2.user_num,
        token_id: information.token_id,
        picture_url: information.picture_url,
        picture_title: information.picture_title,
        picture_price: information.picture_price,
        picture_info: information.picture_info,
      });

      const { data } = await BuyToken({ token_id: information.token_id });

      console.log(data);
    } catch (err) {
      const isAxiosError = err?.isAxiosError ?? false;
      if (isAxiosError) {
        const {
          response: { data },
        } = err;
        console.log(data);
        setErrors(data);
        console.log(err);
      }
    }
    history.goBack();
  }
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
              {userId && userId.user_num == information.user_num ? (
                <></>
              ) : typeof userId == "undefined" ? (
                <></>
              ) : (
                <Button onClick={onBuyHandler} variant="success">
                  구매하기
                </Button>
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
