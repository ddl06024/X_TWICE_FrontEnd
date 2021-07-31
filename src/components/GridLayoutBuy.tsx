import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardsBuy from "../containers/CardsBuy";

const GridLayoutBuy: React.FC<any> = (props) => {
  const nft = props.nft.nft;
  return (
    <Container style={{ height: "100%" }}>
      <Row>
        {Array.from(nft.contents).map((x: any, index) => {
          if (x.onSale === true) return <CardsBuy key={index} value={x} />;
        })}
      </Row>
    </Container>
  );
};

export default GridLayoutBuy;
