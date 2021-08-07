import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardsMyTokenOnSale from "../components/CardsMyTokenOnSale";

const GridLayoutMyTokenOnSale: React.FC<any> = (props) => {
  const tempArray = [""];
  return (
    <Container style={{ height: "100%" }}>
      <Row lg={{ cols: 4 }} md={{ cols: 3 }} xs={{ cols: 2 }}>
        {Array.from(tempArray).map((x: any, index) => {
          return <CardsMyTokenOnSale key={index} value={x} />;
        })}
      </Row>
      {/*<div style={{display:'flex', justifyContent:'center'}}>
            <Button onClick={loadMorePictures}>더보기</Button>
              </div>*/}
    </Container>
  );
};

export default GridLayoutMyTokenOnSale;
