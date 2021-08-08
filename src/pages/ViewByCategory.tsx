import React from "react";
import Header from "../components/Header";
import GridLayoutBuy from "../components/GridLayoutBuy";
import CategoryTab from "../components/CategoryTab";
import SearchWordCategoryTab from "../components/SearchWordCategoryTab";
import Footer from "../components/Footer";
import "../App.css";
const ViewByCategory: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <SearchWordCategoryTab />
      <CategoryTab />
      <GridLayoutBuy value="category" />
      <Footer />
    </main>
  );
};

export default ViewByCategory;
