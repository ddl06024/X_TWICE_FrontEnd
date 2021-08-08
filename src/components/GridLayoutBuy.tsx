import React, { useEffect, useState } from "react";
import { Container, Pagination, Row, Spinner } from "react-bootstrap";
import CardsBuy from "../components/CardsBuy";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { usePictures } from "../hooks/usePictures";

const GridLayoutBuy: React.FC<any> = (props) => {
  console.log(props);
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const { loading, setLoading, errors, setErrors } = useFetch();
  const { first, setFirst, last, setLast } = usePagination();
  useEffect(() => {
    setPageCount(Math.ceil(count / 10));
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
      const firstNum = (num - 1) * last;
      const lastNum = firstNum + 12;
      setFirst(firstNum);
      setLast(lastNum);
    }
  }
  useEffect(() => {
    getFirstPictures();
  }, [first]);
  const paginationBasic = (
    <div>
      <Pagination onClick={(event) => pagination(event)}>{items}</Pagination>
    </div>
  );

  const [pictures, setPictures] = useState<Array<any>>([]);
  const { getPicturesPopular, getPicturesPrice, getPicturesCategory } =
    usePictures();

  async function getFirstPictures() {
    try {
      setLoading(true);
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);
      console.log("first = " + first + ", " + "last = " + last + " .");

      const { data } =
        props.value === "popular"
          ? await getPicturesPopular({ first, last })
          : props.value === "price"
          ? await getPicturesPrice({ first, last })
          : await getPicturesCategory({
              category: props.category,
              first,
              last,
            });

      //const { data } = await getPicturesPopular({ first, last });
      console.log(data);
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

  return (
    <Container style={{ height: "100%" }}>
      <Row lg={{ cols: 4 }} md={{ cols: 3 }} xs={{ cols: 2 }}>
        {errors && (
          <p>
            {" "}
            {errors.name} {errors.status}{" "}
          </p>
        )}
        {loading ? (
          <Spinner animation="border" role="status" style={{ margin: "auto" }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          pictures.map((x: any, index) => {
            return <CardsBuy key={index} value={x} />;
          })
        )}
      </Row>
      {paginationBasic}
    </Container>
  );
};

export default GridLayoutBuy;
