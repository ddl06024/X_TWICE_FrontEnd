import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { getCookie } from "../configs/cookie";
import { usePictures } from "../hooks/usePictures";
import { useHistory, useLocation } from "react-router-dom";
import "../assets/css/CardsBuyMain.css";
const CardsBuyMain: React.FC<any> = (props) => {
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
  const history = useHistory();
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

  const onClickHandler = () => {
    increaseViews();
    history.push({
      pathname: "/viewPictures/info",
      state: { information: props.value, user_num2: userId },
    });
  };

  const owner = (
    <Button
      variant="warning"
      onClick={onClickHandler}
      style={{ marginTop: "0.8rem" }}
      className="d-inline-block text-truncate"
    >
      내 사진 정보
    </Button>
  );
  const notOwner = (
    <Button
      variant="primary"
      onClick={onClickHandler}
      style={{ marginTop: "0.8rem" }}
      className="d-inline-block text-truncate"
    >
      자세히 보기
    </Button>
  );

  return (
    <Col
      style={{
        padding: "0.7rem",
        overflow: "hidden",
      }}
    >
      <Card
        className="cardShadow"
        border="dark"
        style={{ width: "300px", borderRadius: "5px" }}
      >
        <Card.Img
          variant="bottom"
          src={src}
          onError={() => imageErrorHandler()}
          style={{
            width: "100%",
            height: "12rem",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
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
          {userId && userId.user_num == props.value.user_num ? owner : notOwner}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsBuyMain;
