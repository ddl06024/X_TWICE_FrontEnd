import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardsMyTokenOnSale from "../containers/CardsMyTokenOnSale";

const GridLayoutMyTokenOnSale: React.FC<any> = (props) => {
  const nft = props.nft.nft;
  return (
    <div style={{ width: "100%", margin: "2rem auto" }}>
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Row>
          {Array.from(nft.contents).map((x: any, index) => {
            if (x.onSale === true)
              return <CardsMyTokenOnSale key={index} value={x} />;
          })}
        </Row>
      </div>
      {/*<div style={{display:'flex', justifyContent:'center'}}>
            <Button onClick={loadMorePictures}>더보기</Button>
              </div>*/}
    </div>
  );
};

export default GridLayoutMyTokenOnSale;
