import React from "react";
import Header from "../components/Header";
import RegisterPicture from "../components/RegisterPicture";
import Footer from "../components/Footer";
import "../App.css";
const RegisterPicturePage: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <RegisterPicture />
      <Footer />
    </main>
  );
};

export default RegisterPicturePage;
