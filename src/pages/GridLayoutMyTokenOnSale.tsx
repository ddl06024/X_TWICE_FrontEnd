import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardsMyTokenOnSale from "../containers/CardsMyTokenOnSale";

const GridLayoutMyTokenOnSale: React.FC<any> = (props) => {
  const nft = props.nft.nft;
  return (
    <Container style={{ height: "100%" }}>
      <Row lg={{ cols: 4 }} md={{ cols: 3 }} xs={{ cols: 2 }}>
        {Array.from(nft.contents).map((x: any, index) => {
          if (x.onSale === true)
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
