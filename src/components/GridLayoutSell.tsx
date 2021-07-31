import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardsSell from "../containers/CardsSell";
import { useLocation } from "react-router";

const GridLayoutSell: React.FC<any> = (props) => {
  const nft = props.nft.nft;

  return (
    <Container style={{ height: "100%" }}>
      <Row>
        {Array.from(nft.contents).map((x: any, index) => {
          if (x.onSale === false) return <CardsSell key={index} value={x} />;
        })}
      </Row>
    </Container>
  );
};

export default GridLayoutSell;
