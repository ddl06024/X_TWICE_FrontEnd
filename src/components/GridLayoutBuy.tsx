import React, {useState} from "react";
import {  Button, Col, Container, Row } from "react-bootstrap";
import CardsBuy from "./CardsBuy"

const GridLayoutBuy: React.FC<{}> = () => {
  const [Pictures, setPictures] = useState(20);
  const loadMorePictures = () => {
    setPictures(Pictures+20);
  }
    return (
        <div style={{width: '100%', margin:'2rem auto'}}>
          <div style={{width: '85%', margin: '1rem auto'}}>
    
            <Row>
              {Array.from({ length: Pictures }).map((_, index) => (
              <CardsBuy/>
            ))}
            </Row>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <Button onClick={loadMorePictures}>더보기</Button>
          </div>
        </div>
    );
};

export default GridLayoutBuy;


