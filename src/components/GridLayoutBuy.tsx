import React, {useState} from "react";
import {  Button, Col, Container, Row } from "react-bootstrap";
import CardsBuy from "../containers/CardsBuy"

const GridLayoutBuy: React.FC<any> = (props) => {
  const nft = props.nft.nft;
    return (
        <div style={{width: '100%', margin:'2rem auto'}}>
          <div style={{width: '85%', margin: '1rem auto'}}>
    
            <Row>
            {Array.from(nft.contents).map((x:any, index) =>  {if(x.onSale===true) return(
           <CardsBuy  key={index} value={x} /> );
               })}
            </Row>
          </div>
          
        </div>
    );
};

export default GridLayoutBuy;


