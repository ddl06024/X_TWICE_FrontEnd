import React, { useState } from "react";
import Header from "../components/Header";
import GridLayoutBuy from "../components/GridLayoutBuy";
import CategoryTab from "../components/CategoryTab";
import SearchWordCategoryTab from "../components/SearchWordCategoryTab";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import "../App.css";
const ViewByCategory: React.FC<{}> = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const onSelect = (data: string) => {
    setCategory(data);
    history.push(`/viewPictures/category/${data}`);
  };
  return (
    <main>
      <Header />
      <SearchWordCategoryTab />
      <CategoryTab parentFunction={onSelect} />
      <GridLayoutBuy value="category" category={category} />
      <Footer />
    </main>
  );
};

export default ViewByCategory;
