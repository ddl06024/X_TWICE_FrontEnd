import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Tabs/>
      {/*<RenderForm />*/}
    </>
  );
};

export default App;
