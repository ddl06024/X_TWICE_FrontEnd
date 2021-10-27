import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import CardsSell from "../components/CardsSell";
import "../assets/css/Footer.css";

const Footer: React.FC<any> = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
          >
            <a href="https://uos.ac.kr/main.do?epTicket=LOG#">
              <Image
                src="../tempImages/logo.png"
                fluid
                style={{ width: "10rem" }}
              />
            </a>
          </div>

          <div className="col" style={{ flexGrow: 2 }}>
            Developed by Minhye Kim & Jisung Kim & Jiwon Park & Euisin Gee
            <br />
            Copyright&copy;{new Date().getFullYear()} by 서울시립대학교 지능형
            소프트웨어공학연구실. All Rights Reserved.
          </div>
        </div>
        <hr />
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Footer;
