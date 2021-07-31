import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import RegisterPicture from "./containers/RegisterPicture";
import Login from "./containers/Login";
import CarouselMain from "./components/CarouselMain";
import RegisterAccount from "./components/RegisterAccount";
import TransactionTable from "./components/TransactionTable";
import CardsSimilarity from "./components/CardsSimilarity";
import GridLayoutBuy from "./containers/GridLayoutBuy";
import CategoryTab from "./components/CategoryTab";
import { Route } from "react-router-dom";
import SearchWord from "./components/SearchWord";
import GridLayoutSell from "./containers/GridLayoutSell";
import GridLayoutMyTokenOnSale from "./containers/GridLayoutMyTokenOnSale";
import { getCookie } from "./hooks/cookie";
const App: React.FC<{}> = () => {
  return (
    <div style={{ height: "100%" }}>
      {/** <Route exact path="/Auth" render={()=><Auth/>}/>  */}
      <Route path="/" render={() => <Header />} />
      <Route exact path="/" render={() => <CarouselMain />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/registerAccount" render={() => <RegisterAccount />} />
      <Route path="/search" render={() => <SearchWord />} />
      <Route path="/search" render={() => <GridLayoutBuy />} />
      <Route exact path="/registerPicture" render={() => <RegisterPicture />} />
      <Route
        exact
        path="/registerPicture/result"
        render={() => <CardsSimilarity />}
      />
      <Route path="/myPage" render={() => <Tabs />}></Route>
      <Route path="/myPage/myToken" render={() => <GridLayoutSell />} />
      <Route
        path="/myPage/myTokenOnSale"
        render={() => <GridLayoutMyTokenOnSale />}
      />
      <Route path="/myPage/transactions" render={() => <TransactionTable />} />
      <Route path="/viewPictures" render={() => <SearchWord />} />
      <Route path="/viewPictures/category" render={() => <CategoryTab />} />
      <Route
        path={[
          "/viewPictures/price",
          "/viewPictures/popularity",
          "/viewPictures/category/1",
        ]}
        render={() => <GridLayoutBuy />}
      />
    </div>
  );
};

export default App;
