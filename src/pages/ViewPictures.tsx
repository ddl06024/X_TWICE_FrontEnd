import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GridLayoutBuy from "../components/GridLayoutBuy";
import SearchWordCategoryTab from "../components/SearchWordCategoryTab";
import Footer from "../components/Footer";
import "../App.css";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { usePictures } from "../hooks/usePictures";
import { Pagination } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import CategoryTab from "../components/CategoryTab";
import { useKlaytn } from "../hooks/useKlaytn.js";
import { getCookie } from "../configs/cookie";
const ViewByPopularity: React.FC<{}> = () => {
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
  const location = useLocation<any>();
  const { displayMyTokensAndSale } = useKlaytn();

  const [searchWord, setSearchWord] = useState(null);
  const [viewBy, setViewBy] = useState("popularity");
  const [category, setCategory] = useState("One");
  useEffect(() => {
    if (location.state) {
      setViewBy(location.state.viewBy);
      setSearchWord(location.state.search);
    }
  }, [location]);
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
    getFirstPictures();
    console.log(getCookie("walletInstance"));
    displayMyTokensAndSale(getCookie("walletInstance"));
  }, [first, viewBy, category, searchWord]);

  const paginationBasic = (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Pagination onClick={(event) => pagination(event)}>{items}</Pagination>
    </div>
  );

  const [pictures, setPictures] = useState<Array<any>>([]);
  const {
    fetchPicturesByCategory,
    fetchPicturesByPopularity,
    fetchPicturesByPrice,
    fetchPicturesBySearch,
  } = usePictures();
  const history = useHistory();

  async function getFirstPictures() {
    try {
      setLoading(true);
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);
      const { data } =
        viewBy == "popularity"
          ? await fetchPicturesByPopularity({
              first,
              last: offset,
            })
          : viewBy == "price"
          ? await fetchPicturesByPrice({
              first,
              last: offset,
            })
          : viewBy == "search"
          ? await fetchPicturesBySearch({
              keyword: searchWord,
              first,
              last: offset,
            })
          : await fetchPicturesByCategory({
              category: category,
              first,
              last: offset,
            });
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
  const loadingComp = <CategoryTab setCategory={setCategory} />;
  return (
    <main>
      <Header />
      <SearchWordCategoryTab
        count={count}
        searchWord={searchWord}
        setViewBy={setViewBy}
        setSearchWord={setSearchWord}
      />
      {viewBy === "category" && loadingComp}
      <GridLayoutBuy
        value={{ errors, count, pictures, loading, paginationBasic }}
      />
      <Footer />
    </main>
  );
};

export default ViewByPopularity;
