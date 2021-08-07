import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import GridLayoutSell from "../components/GridLayoutSell";
import Footer from "../components/Footer";
import "../App.css";
const MyToken: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <Tabs />
      <GridLayoutSell />
      <Footer />
    </main>
  );
};

export default MyToken;
