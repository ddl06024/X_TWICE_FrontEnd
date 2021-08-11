import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { getCookie } from "../configs/cookie";
import { usePictures } from "../hooks/usePictures";
import { useHistory, useLocation } from "react-router-dom";
import MyVerticallyCenteredModalBuy from "./MyVerticallyCenteredModalBuy";
const CardsBuy: React.FC<any> = (props) => {
  const { increasePostsViews } = usePictures();
  const [errors, setErrors] = useState<any>(undefined);
  async function increaseViews() {
    try {
      setErrors(undefined);
      const { data } = await increasePostsViews({
        token_id: props.value.token_id,
      });
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
  }
  const onClickHandler = () => {
    increaseViews();
    history.push({
      pathname: "/viewPictures/info",
      state: { information: props.value },
    });
  };
  const history = useHistory();
  //const [modalShow, setModalShow] = React.useState(false);
  const [src, setSrc] = useState(props.value.picture_url);
  const imageErrorHandler = () => {
    setSrc("../tempImages/noimage.png");
  };
  const [userId, setUserId] = useState(getCookie("userId"));
  const location = useLocation<any>();
  useEffect(() => {
    const user = getCookie("userId");
    setUserId(user);
  }, []);

  const owner = (
    <ListGroupItem variant="success" className="d-inline-block text-truncate">
      본인소유
    </ListGroupItem>
  );
  const notOwner = (
    <Card.Text
      style={{
        maxWidth: "100%",
        paddingLeft: "1vw",
      }}
      className="d-inline-block text-truncate"
    >
      &nbsp;
    </Card.Text>
  );

  return (
    <Col
      style={{
        padding: "0.7rem",
      }}
    >
      <Card style={{ borderColor: "green" }}>
        {userId && userId.user_num == props.value.user_num ? owner : notOwner}
        <Card.Img
          variant="bottom"
          src={src}
          onError={() => imageErrorHandler()}
          style={{ width: "100%", height: "12rem" }}
        />
        <Card.Body style={{ height: "210px" }}>
          <Card.Text
            style={{
              fontWeight: "bold",
              marginBottom: "0.3rem",
              maxWidth: "100%",
            }}
            className="d-inline-block text-truncate"
          >
            제목 : {props.value.picture_title}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="d-inline-block text-truncate">
              사진 ID : {props.value.token_id}
            </ListGroupItem>
            <ListGroupItem className="d-inline-block text-truncate">
              가격 : {props.value.picture_price} klay
            </ListGroupItem>
          </ListGroup>
          <Button
            variant="dark"
            onClick={onClickHandler}
            style={{ marginTop: "0.8rem" }}
            className="d-inline-block text-truncate"
          >
            자세히 보기
          </Button>
          {/*  <MyVerticallyCenteredModalBuy
            show={modalShow}
            onHide={() => setModalShow(false)}
            info={props}
            //category={props.value.category}
        /> */}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsBuy;
