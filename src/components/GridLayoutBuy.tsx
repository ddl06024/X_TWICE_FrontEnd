import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CardsBuy from "../components/CardsBuy";

const GridLayoutBuy: React.FC<any> = (props) => {
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

  const picturesComp = pictures.map((x: any, index: any) => (
    <CardsBuy key={index} value={x} />
  ));

  return (
    <Container style={{ height: "100%" }}>
      <Row lg={{ cols: 4 }} md={{ cols: 3 }} xs={{ cols: 2 }}>
        {loading ? loadingComp : errors ? errorsComp : picturesComp}
      </Row>
      {paginationBasic}
    </Container>
  );
};

export default GridLayoutBuy;
