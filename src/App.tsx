import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import CardsBuy from "./components/CardsBuy"
import CardsSell from "./components/CardsSell"
import RegisterPicture from "./components/RegisterPicture"
import CarouselMain from "./components/CarouselMain"
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";
import GridLayoutBuy from "./components/GridLayoutBuy"

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Tabs/>
      <CarouselMain/>
      <CardsBuy/>
      <CardsSell/>
      <RegisterPicture/>
      <GridLayoutBuy/>
      {/*<RenderForm />*/}
    </>
  );
};

export default App;
