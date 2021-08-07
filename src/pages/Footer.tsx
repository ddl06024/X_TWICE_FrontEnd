import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import CardsSell from "../containers/CardsSell";
import { useLocation } from "react-router";
import "../assets/css/Footer.css";

const Footer: React.FC<any> = () => {
  console.log("wow");
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="https://uos.ac.kr/main.do?epTicket=LOG#">
              <Image
                src="../tempImages/20160906160546.png"
                fluid
                style={{ width: "10rem" }}
              />
            </a>
          </div>
          <div className="col">
            <h4>Contacts</h4>
            <ul className="list-unstyled">
              <li>
                서울 특별시 동대문구 서울시립대로 163 정보기술관 3층 325호
              </li>
              <li>+82-2-6490-5733</li>
            </ul>
          </div>
          <div className="col">
            <h4>Professor</h4>
            <ul className="list-unstyled">
              <li>Phone: +82-2-6490-2451</li>
              <li>Fax : +82-2-6490-2444</li>
              <li>Email : bjlee@uos.ac.kr</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            Developed by Minhye Kim & Jisung Kim & Jiwon Park & Euisin Gee
            <br />
            Copyright&copy;{new Date().getFullYear()} by 서울시립대학교 지능형
            소프트웨어공학연구실. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
