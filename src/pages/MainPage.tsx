import React from "react";
import Header from "../components/Header";
import CarouselMain from "../components/CarouselMain";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import "../App.css";
const MainPage: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <CarouselMain />
      <Introduction />
      <Footer />
    </main>
  );
};

export default MainPage;
