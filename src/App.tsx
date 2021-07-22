import React, {useState} from "react";
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
import { Container } from "react-bootstrap";
import CategoryTab from "./components/CategoryTab"
import { Route, Switch } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <div>
       
       <Header />
      <Switch>
      
        <Route exact path="/"  component={CarouselMain}/>
        <Route path="/login" component={Login}/>
        <Route path="/registerAccount" component={RegisterAccount}/>
        <Route exact path="/registerPicture"  component={RegisterPicture}/>
        <Route exact path="/registerPicture/result"  component={CardsSimilarity}/>
        <Route path="/myPage" component={Tabs}/>
        <Route path="/myPage/myToken" component={GridLayoutBuy}/>
        <Route path="/myPage/myTokenOnSale" component={GridLayoutBuy}/>
        <Route path="/myPage/transactions" component={TransactionTable}/>
        <Route path="/viewPictures" component={Tabs}/>
        <Route path="/viewPictures/price" component={GridLayoutBuy}/>
        <Route path="/viewPictures/popularity" component={GridLayoutBuy}/>
        <Route path="/viewPictures/category" component={CategoryTab}/>
        <Route path="/viewPictures/category/1" component={GridLayoutBuy}/>
        </Switch>

 
    </div> 
  );
};

export default App;
