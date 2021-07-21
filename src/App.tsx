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
import GridLayoutBuycopy from "./components/GridLayoutBuycopy"
import GridLayoutBuy from "./components/GridLayoutBuy"
import { Container } from "react-bootstrap";


const App: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      
      
        <RegisterAccount />
 
    </div>
  );
};

export default App;
