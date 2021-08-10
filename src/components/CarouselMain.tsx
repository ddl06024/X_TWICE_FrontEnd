import React, { useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Nav,
  Row,
  Image,
  Spinner,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { usePictures } from "../hooks/usePictures";

const CarouselMain: React.FC<any> = (props) => {
  const { loading, setLoading, errors, setErrors } = useFetch();
  useEffect(() => {
    getFirstPictures();
  }, []);
  const [pictures, setPictures] = useState<Array<any>>([]);
  const { fetchPicturesByPopularity } = usePictures();
  async function getFirstPictures() {
    try {
      setLoading(true);
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);
      const { data } = await fetchPicturesByPopularity({ first: 0, last: 5 });
      console.log(data);
      // console.log(errors);
      setPictures(data.items);
      //setErrors(errors);
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
    } finally {
      setLoading(false);
    }
  }
  const history = useHistory();
  /*const [src, setSrc] = useState(pictures[0].picture_url);*/
  const imageErrorHandler = (e: any) => {
    e.target.src = "../tempImages/noimage.png";
  };
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
                history.push("/viewPictures");
              }}
            >
              보기
            </Button>
          </Nav>
        </Col>

        <Col style={{ alignContent: "center", overflow: "hidden" }}>
          <Carousel>
            {errors && (
              <p>
                {" "}
                {errors.name} {errors.status}{" "}
              </p>
            )}
            {loading ? (
              <Spinner
                animation="border"
                role="status"
                style={{ margin: "auto" }}
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              pictures.map((x: any, index) => {
                return (
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      onError={imageErrorHandler}
                      src={x.picture_url}
                      alt="First slide"
                      style={{
                        width: "auto",
                        height: "450px",
                        maxHeight: "450px",
                      }}
                    />
                    <Carousel.Caption>
                      <h3>{x.picture_title}</h3>
                      <p>{x.picture_info}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })
            )}
          </Carousel>
        </Col>
      </Row>
    </Nav>
  );
};

export default CarouselMain;
