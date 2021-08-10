import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Tabs: React.FC<any> = (props) => {
  const history = useHistory();
  console.log(props);
  return (
    <Container style={{ marginBottom: "1rem" }}>
      <Nav
        onSelect={(e) => {
          console.log(e);
          props.setViewBy && props.setViewBy(e);
        }}
        justify
        variant="tabs"
        defaultActiveKey="myToken"
        className="mt-4"
      >
        <Nav.Item>
          <Nav.Link eventKey="myToken">나의 보유토큰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="myTokenOnSale">나의 판매중인 토큰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="History">나의 거래내역</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Tabs;
