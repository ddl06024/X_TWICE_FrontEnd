import React, { useState } from "react";
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
import { usePictures } from "../hooks/usePictures";
import { useHistory } from "react-router-dom";
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

  return (
    <Col
      style={{
        padding: "0.7rem",
      }}
    >
      <Card>
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
            <ListGroupItem>사진 ID : {props.value.token_id}</ListGroupItem>
            <ListGroupItem>
              가격 : {props.value.picture_price} klay
            </ListGroupItem>
          </ListGroup>
          <Button
            variant="dark"
            onClick={onClickHandler}
            style={{ marginTop: "0.8rem" }}
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
