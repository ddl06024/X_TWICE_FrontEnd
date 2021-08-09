import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyToken from "./pages/MyToken";
import MyTokenOnSale from "./pages/MyTokenOnSale";
import RegisterAccountPage from "./pages/RegisterAccountPage";
import RegisterPicturePage from "./pages/RegisterPicturePage";
import Search from "./pages/Search";
import Transactions from "./pages/Transactions";
import ViewPictures from "./pages/ViewPictures";

const App: React.FC<{}> = () => {
  return (
    <div style={{ height: "100%" }} className="page-container">
      <div className="content-wrap">
        <Route exact path="/" render={() => <MainPage />}></Route>
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/registerAccount" render={() => <RegisterAccountPage />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/registerPicture" render={() => <RegisterPicturePage />} />
        <Route path="/myPage/myToken" render={() => <MyToken />} />
        <Route path="/myPage/myTokenOnSale" render={() => <MyTokenOnSale />} />
        <Route path="/myPage/transactions" render={() => <Transactions />} />
        <Route path={"/viewPictures"} render={() => <ViewPictures />} />
      </div>
    </div>
  );
};

export default App;
