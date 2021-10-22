import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Tabs: React.FC<any> = (props) => {
  const history = useHistory();

  return (
    <Container style={{ marginBottom: "1rem" }}>
      <Nav
        onSelect={(e) => {
          props.setViewBy && props.setViewBy(e);
        }}
        justify
        variant="tabs"
        defaultActiveKey="myToken"
        className="mt-4"
      >
        <Nav.Item>
          <Nav.Link eventKey="myToken">보유 사진</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="myTokenOnSale">판매 사진</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="History">거래 내역</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Tabs;
