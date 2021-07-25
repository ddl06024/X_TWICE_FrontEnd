import React, {useState} from "react";
import {  Button, Col, Container, Row } from "react-bootstrap";
import CardsSell from "./CardsSell"
import {useLocation} from "react-router";

const GridLayoutSell: React.FC<{}> = () => {
   //const location = useLocation();
    const location = useLocation<any>();
    console.log(Array.from(location.state.contents).map((x:any,index)=> x.title));


    return (
        <div style={{width: '100%', margin:'2rem auto'}}>
          <div style={{width: '85%', margin: '1rem auto'}}>
    
            <Row>
              {Array.from(location.state.contents).map((x:any, index) => (
              <CardsSell key={index} title={x.title} desc={x.desc}/>
            ))}
            </Row>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <Button>더보기</Button>
          </div>
        </div>
    );
};

export default GridLayoutSell;


