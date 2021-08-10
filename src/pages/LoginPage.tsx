import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import RegisterPicture from "../components/RegisterPicture";
import Login from "../components/Login";
import CarouselMain from "../components/CarouselMain";
import RegisterAccount from "../components/RegisterAccount";
import TransactionTable from "../components/TransactionTable";

import GridLayoutBuy from "../components/GridLayoutBuy";
import CategoryTab from "../components/CategoryTab";
import { Route } from "react-router-dom";
import SearchWord from "../components/SearchWordCategoryTab";
import GridLayoutSell from "../components/GridLayoutSell";

import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import "../App.css";
const LoginPage: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
};

export default LoginPage;
