import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards"
import CarouselMain from "./components/CarouselMain"
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Tabs/>
      <CarouselMain/>
      <Cards/>
      {/*<RenderForm />*/}
    </>
  );
};

export default App;
