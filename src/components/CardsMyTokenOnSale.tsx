import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { usePictures } from "../hooks/usePictures";
import { useKlaytn } from "../hooks/useKlaytn.js";
const CardsMyTokenOnSale: React.FC<any> = (props) => {
  const { onCancelsellToken } = useKlaytn();
  const { cancleTokenOnSale } = usePictures();
  const [errors, setErrors] = useState<any>(undefined);
  async function setOnSale() {
    try {
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);

      const { data } = await cancleTokenOnSale({
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
  const cancleHandler = () => {
    if (window.confirm("판매 취소 하시겠습니까?")) {
      onCancelsellToken(props.value.token_id);
      setOnSale().then(function () {
        props.setUpdateToken(new Date().getMilliseconds());
      });
    } else {
    }
  };
  const history = useHistory();
  const onClickHandler = () => {
    history.push({
      pathname: "/viewPictures/info",
      state: { information: props.value, mypage: true },
    });
  };
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
      <Card
        style={{ borderColor: "green" }}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <Card.Img
          variant="bottom"
          src={src}
          onError={() => imageErrorHandler()}
          style={{ width: "100%", height: "12rem" }}
        />
        <Card.Body style={{ height: "260px" }}>
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
            className="d-inline-block text-truncate"
            variant="dark"
            onClick={onClickHandler}
            style={{ marginTop: "0.8rem" }}
          >
            자세히 보기
          </Button>

          <InputGroup className="mb-3" style={{ marginTop: "1rem" }}>
            <Button
              className="d-inline-block text-truncate"
              variant="danger"
              id="button-addon2"
              onClick={cancleHandler}
            >
              판매취소
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardsMyTokenOnSale;
