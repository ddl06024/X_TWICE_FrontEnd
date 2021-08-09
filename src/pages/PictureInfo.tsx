import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import "../App.css";
const PictureInfo: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <Info />
      <Footer />
    </main>
  );
};

export default PictureInfo;
