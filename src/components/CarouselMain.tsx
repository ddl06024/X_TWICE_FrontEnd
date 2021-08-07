import React from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Nav,
  Row,
  Image,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CarouselMain: React.FC<any> = (props) => {
  const history = useHistory();
  const srcArray = [
    "../tempImages/noimage.png",
    "../tempImages/noimage.png",
    "../tempImages/noimage.png",
  ];
  return (
    <Nav
      className="justify-content-center"
      style={{
        marginTop: "4rem",
        //backgroundImage: "url(../tempImages/background.jpg)",
      }}
    >
      <Row style={{ width: "80%" }} className="align-items-center">
        <Col md="auto" style={{ marginRight: "1rem" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>NFT를 수집하고</h1>
            <h1 style={{ fontWeight: "bold" }}> 판매해보세요!</h1>
          </div>
          <Nav className="justify-content-center">
            <Button
              variant="primary"
              size="lg"
              style={{ margin: 10 }}
              onClick={() => {
                history.push("/registerPicture");
              }}
            >
              만들기
            </Button>{" "}
            <Button
              size="lg"
              variant="outline-primary"
              style={{ margin: 10 }}
              onClick={() => {
                history.push("/viewPictures/popularity");
              }}
            >
              보기
            </Button>
          </Nav>
        </Col>

        <Col style={{ alignContent: "center" }}>
          <Carousel>
            {Array.from(srcArray).map((x: any, index) => {
              if (index < 5)
                return (
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src={x}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{x.title}</h3>
                      <p>{x.desc}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
            })}
          </Carousel>
        </Col>
      </Row>
    </Nav>
  );
};

export default CarouselMain;
