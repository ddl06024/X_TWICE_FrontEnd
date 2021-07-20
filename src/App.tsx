import React from "react";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <RenderForm />
    </>
  );
};

export default App;
