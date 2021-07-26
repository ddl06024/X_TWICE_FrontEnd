import React, {useState} from "react";
import {  Button, Col, Container, Row } from "react-bootstrap";
import CardsSell from "../containers/CardsSell"
import {useLocation} from "react-router";

const GridLayoutSell: React.FC<any> = (props) => {
    const nft = props.nft.nft;

    return (
        <div style={{width: '100%', margin:'2rem auto'}}>
          <div style={{width: '85%', margin: '1rem auto'}}>
    
            <Row>
               {Array.from(nft.contents).map((x:any, index) =>  {if(x.onSale===false) return(
           <CardsSell  key={index} value={x} /> );
               })}
            </Row>
          </div>
          
        </div>
    );
};

export default GridLayoutSell;

