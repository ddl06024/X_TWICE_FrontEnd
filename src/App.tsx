import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";

import RegisterAccountPage from "./pages/RegisterAccountPage";
import RegisterPicturePage from "./pages/RegisterPicturePage";
import ViewPictures from "./pages/ViewPictures";
import PictureInfo from "./pages/PictureInfo";

const App: React.FC<{}> = () => {
  return (
    <div style={{ height: "100%" }} className="page-container">
      <div className="content-wrap">
        <Route exact path="/" render={() => <MainPage />}></Route>
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/registerAccount" render={() => <RegisterAccountPage />} />
        <Route path="/registerPicture" render={() => <RegisterPicturePage />} />
        <Route path="/myPage" render={() => <MyPage />} />
        {/*  <Route path="/myPage/myTokenOnSale" render={() => <MyTokenOnSale />} />*/}
        {/* <Route path="/myPage/transactions" render={() => <Transactions />} />*/}
        <Route exact path={"/viewPictures"} render={() => <ViewPictures />} />
        <Route path={"/viewPictures/info"} render={() => <PictureInfo />} />
      </div>
    </div>
  );
};

export default App;
