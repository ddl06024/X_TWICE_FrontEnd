import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import GridLayoutSell from "../components/GridLayoutSell";
import Footer from "../components/Footer";
import "../App.css";
import { getCookie } from "../configs/cookie";
import { usePictures } from "../hooks/usePictures";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { useTransactions } from "../hooks/useTransactions";
import { Pagination } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import TransactionTable from "../components/TransactionTable";
const MyToken: React.FC<{}> = () => {
  const { fetchHistories } = useTransactions();

  const [updateToken, setUpdateToken] = useState<any>(null);
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
  const [viewBy, setViewBy] = useState("myToken");

  useEffect(() => {
    setOffset(12);
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
    getPictures();
  }, [first, viewBy, updateToken]);

  const paginationBasic = (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Pagination onClick={(event) => pagination(event)}>{items}</Pagination>
    </div>
  );

  const [pictures, setPictures] = useState<Array<any>>([]);
  const userId = getCookie("userId");
  const { getUsersToken } = usePictures();
  async function getPictures() {
    try {
      setLoading(true);
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);

      console.log(first, offset, userId.user_id, viewBy);

      const { data } =
        viewBy == "myToken"
          ? await getUsersToken({
              state: "N",
              first,
              last: offset,
            })
          : viewBy == "myTokenOnSale"
          ? await getUsersToken({
              state: "Y",
              first,
              last: offset,
            })
          : await fetchHistories({
              first,
              last: offset,
            });

      console.log(data);
      setCount(data.count);

      setPictures(data.items);
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
  const tokens = (
    <GridLayoutSell
      setUpdateToken={setUpdateToken}
      value={{ errors, count, pictures, loading, paginationBasic }}
    />
  );
  const historyTable = (
    <TransactionTable
      value={{ errors, count, pictures, loading, paginationBasic }}
    />
  );

  return (
    <main>
      <Header />
      <Tabs setViewBy={setViewBy} />
      {viewBy != "History" ? tokens : historyTable}
      <Footer />
    </main>
  );
};

export default MyToken;
