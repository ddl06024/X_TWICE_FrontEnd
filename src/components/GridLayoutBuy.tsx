import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import CardsSell from "./CardsSell"

const GridLayoutBuy: React.FC<{}> = () => {
    return (
        <Container>
        <Row >
          <Col  ><CardsSell/></Col>
          <Col><CardsSell/></Col>
          <Col><CardsSell/></Col>
        </Row>
        <Row>
          <Col><CardsSell/></Col>
          <Col><CardsSell/></Col>
          <Col><CardsSell/></Col>
        </Row>
        <Row>
          <Col><CardsSell/></Col>
          <Col><CardsSell/></Col>
          <Col><CardsSell/></Col>
        </Row>
    
      </Container>
    );
};

export default GridLayoutBuy;


