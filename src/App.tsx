import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import CardsBuy from "./components/CardsBuy"
import CardsSell from "./components/CardsSell"
import RegisterPicture from "./components/RegisterPicture"
import Login from "./components/Login"
import CarouselMain from "./components/CarouselMain"
import RegisterAccount from "./components/RegisterAccount"
import TransactionTable from "./components/TransactionTable"
import CardsSimilarity from "./components/CardsSimilarity"
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
      <CardsSimilarity/>
      <RegisterPicture/>
      <Login/>
      <GridLayoutBuy/>
      <RegisterAccount/>
      <TransactionTable/>
      {/*<RenderForm />*/}
    </>
  );
};

export default App;
