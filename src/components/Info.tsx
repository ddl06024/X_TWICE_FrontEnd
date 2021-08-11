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
const CardsBuy: React.FC<any> = (props) => {
  const [userId, setUserId] = useState(getCookie("userId"));
  useEffect(() => {
    const user = getCookie("userId");
    setUserId(user);
  }, []);
  const location = useLocation<any>();
  console.log(location.state);
  const [information, setInformation] = useState(location.state.information);
  useEffect(() => {
    if (location.state) {
      setInformation(location.state.information);
    }
  }, [location]);
  const [src, setSrc] = useState(information.picture_url);
  const imageErrorHandler = () => {
    setSrc("../tempImages/noimage.png");
  };
  console.log(userId);
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
                <Button variant="success">구매하기</Button>
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
