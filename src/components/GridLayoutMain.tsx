import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CardsBuyMain from "./CardsBuyMain";

const GridLayoutMain: React.FC<any> = (props) => {
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
    <CardsBuyMain key={index} value={x} />
  ));

  return (
    <Container
      style={{
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Row style={{ height: "100%", paddingTop: "5vh" }}>
        {loading ? loadingComp : errors ? errorsComp : picturesComp}
      </Row>
      {paginationBasic}
    </Container>
  );
};

export default GridLayoutMain;
