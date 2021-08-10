import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import CardsSell from "../components/CardsSell";
import CardsBuy from "../components/CardsBuy";
import CardsMyTokenOnSale from "./CardsMyTokenOnSale";

const GridLayoutSell: React.FC<any> = (props) => {
  const { errors, count, pictures, loading, paginationBasic } = props.value;

  const errorsComp =
    count == 0 ? (
      <p>검색하신 결과가 없습니다.</p>
    ) : (
      errors && (
        <p>
          {errors.name} {errors.status}{" "}
        </p>
      )
    );

  const loadingComp = (
    <Spinner animation="border" role="status" style={{ margin: "auto" }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  if (pictures[0]) {
    console.log(pictures[0].picture_state);
  }

  const picturesComp =
    pictures[0] && pictures[0].picture_state == "N"
      ? pictures.map((x: any, index: any) => (
          <CardsSell
            setUpdateToken={props.setUpdateToken}
            key={index}
            value={x}
          />
        ))
      : pictures.map((x: any, index: any) => (
          <CardsMyTokenOnSale
            setUpdateToken={props.setUpdateToken}
            key={index}
            value={x}
          />
        ));
  return (
    <Container style={{ height: "100%" }}>
      {count}개
      <Row lg={{ cols: 4 }} md={{ cols: 3 }} xs={{ cols: 2 }}>
        {loading ? loadingComp : errors ? errorsComp : picturesComp}
      </Row>
      {paginationBasic}
    </Container>
  );
};

export default GridLayoutSell;
