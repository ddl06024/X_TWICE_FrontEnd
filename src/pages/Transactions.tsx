import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import TransactionTable from "../components/TransactionTable";
import Footer from "../components/Footer";
import "../App.css";
const Transaction: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <Tabs />
      <TransactionTable />
      <Footer />
    </main>
  );
};

export default Transaction;
