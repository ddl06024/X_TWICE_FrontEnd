import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import GridLayoutMyTokenOnSale from "../components/GridLayoutMyTokenOnSale";
import Footer from "../components/Footer";
import "../App.css";
const MyTokenOnSale: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <Tabs />
      <GridLayoutMyTokenOnSale />
      <Footer />
    </main>
  );
};

export default MyTokenOnSale;
