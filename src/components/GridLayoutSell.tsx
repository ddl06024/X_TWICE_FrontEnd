import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardsSell from "../components/CardsSell";
import CardsBuy from "../components/CardsBuy";

const GridLayoutSell: React.FC<any> = (props) => {
  const tempArray = [""];
  return (
    <Container style={{ height: "100%" }}>
      <Row lg={{ cols: 4 }} md={{ cols: 3 }} xs={{ cols: 2 }}>
        {Array.from(tempArray).map((x: any, index) => {
          return (
            <>
              <CardsBuy key={index} value={x} />
              <CardsSell key={index} value={x} />
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default GridLayoutSell;
