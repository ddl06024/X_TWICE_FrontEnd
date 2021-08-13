import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";
import "../App.css";
const LoginPage: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
};

export default LoginPage;
