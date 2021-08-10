import React from "react";
import Header from "../components/Header";
import RegisterAccount from "../components/RegisterAccount";
import Footer from "../components/Footer";
import "../App.css";
const RegisterAccountPage: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <RegisterAccount />
      <Footer />
    </main>
  );
};

export default RegisterAccountPage;
