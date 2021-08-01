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

const CarouselMain: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <Nav className="justify-content-center" style={{ marginTop: "4rem" }}>
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
            </Button>{" "}
          </Nav>
        </Col>

        <Col style={{ alignContent: "center" }}>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="../tempImages/big.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../tempImages/big.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../tempImages/big.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Nav>
  );
};

export default CarouselMain;
