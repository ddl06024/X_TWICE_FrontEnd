import React, { useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Nav,
  Row,
  Image,
  Spinner,
  Pagination,
  Card,
} from "react-bootstrap";
import "../assets/css/CarouselMain.css";
import { useHistory, useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { usePictures } from "../hooks/usePictures";
import { usePagination } from "../hooks/usePagination";
import GridLayoutMain from "./GridLayoutMain";
import { getCookie } from "../configs/cookie";

const CarouselMain: React.FC<any> = (props) => {
  const [token, setToken] = useState(getCookie("myToken"));
  const location = useLocation<any>();
  useEffect(() => {
    setToken(getCookie("myToken"));
  }, [location]);
  const { loading, setLoading, errors, setErrors } = useFetch();
  const {
    first,
    setFirst,
    offset,
    setOffset,
    pageNum,
    setPageNum,
    count,
    setCount,
    pageCount,
    setPageCount,
  } = usePagination();
  useEffect(() => {
    getFirstPictures();
  }, []);
  useEffect(() => {
    setOffset(3);
    setPageCount(Math.ceil(count / offset));
  }, [count]);
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === pageNum}>
        {number}
      </Pagination.Item>
    );
  }

  function pagination(event: any) {
    const text = event?.target?.text;
    const num = Number(text);
    if (num) {
      setPageNum(num);
      const firstNum = (num - 1) * offset;
      setFirst(firstNum);
    }
  }
  useEffect(() => {
    getFirstPictures();
  }, [first]);
  const paginationBasic = (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Pagination
        className="whiteShadow"
        onClick={(event) => pagination(event)}
      >
        {items}
      </Pagination>
    </div>
  );
  const [pictures, setPictures] = useState<Array<any>>([]);
  const { fetchPicturesByPopularity } = usePictures();
  async function getFirstPictures() {
    try {
      setLoading(true);
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);
      const { data } = await fetchPicturesByPopularity({
        first: first,
        last: 3,
      });
      // console.log(errors);
      setCount(data.count);
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
    //
    /* <Nav
      className="justify-content-center"
      style={{
        marginTop: "4rem",
        height: "100%",
        //backgroundImage: "url(../tempImages/background.jpg)",
      }}
    >
      <Row style={{ width: "80%" }} className="align-items-center "> */
    <div>
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
                    className="d-block w-100 mainBottomShadow"
                    onError={imageErrorHandler}
                    src={x.picture_url}
                    alt="First slide"
                    style={{
                      width: "auto",
                      height: "100vh",
                    }}
                  />

                  <div className="zkzkzk"> </div>

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
      <Card
        border="dark"
        bg="dark"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: "100wh",
          borderRadius: "0px",
        }}
      >
        <Col
          md="auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100wh",
            paddingTop: "4rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "100vh",
            }}
          >
            <h1
              className="textWhiteShadow"
              style={{ fontWeight: "bold", color: "white" }}
            >
              NFT를 수집하고
            </h1>
            <h1
              className="textWhiteShadow"
              style={{ fontWeight: "bold", color: "white" }}
            >
              {" "}
              판매해보세요!
            </h1>
            <Nav className="justify-content-center ">
              <Button
                className="whiteShadow"
                variant="primary"
                size="lg"
                style={{ margin: 10 }}
                onClick={() => {
                  if (token) {
                    history.push("/registerPicture");
                  } else {
                    alert("로그인 하세요");
                  }
                }}
              >
                만들기
              </Button>{" "}
              <Button
                className="whiteShadow"
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
          </div>
        </Col>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GridLayoutMain
            value={{ errors, count, pictures, loading, paginationBasic }}
          />
        </div>
      </Card>
    </div>
    /*    </Row>
    </Nav>*/
  );
};

export default CarouselMain;
