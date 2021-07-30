import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { getCookie, removeCookie } from "../hooks/cookie";
const Header: React.FC<any> = (props) => {
  const history = useHistory();
  const [token, setToken] = useState(getCookie("myToken"));
  const location = useLocation<any>();
  useEffect(() => {
    if (location.state) {
      setToken(location.state);
    }
  }, [location]);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ position: "fixed", top: "0", width: "100%" }}
    >
      <Container style={{ margin: "1rem" }}>
        {/*<Col><Navbar.Brand><Image src="../tempImages/NFT_Icon.png" fluid style={{width:"50%"}}/></Navbar.Brand></Col>*/}
        <Col>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            className="AppName"
            onClick={() => {
              history.push("/");
            }}
          >
            크립토그래퍼
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col>
            <Nav className="me-auto">
              <Form className="d-flex">
                <FormControl
                  style={{ marginLeft: "10rem", width: "30rem" }}
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  onClick={() => {
                    history.push("/search");
                  }}
                >
                  검색
                </Button>
              </Form>
            </Nav>
          </Col>
          {token ? (
            <Nav>
              <Nav.Link
                onClick={() => {
                  removeCookie("myToken");
                  setToken(getCookie("myToken"));
                }}
              >
                로그아웃
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                onClick={() => {
                  history.push("/myPage/myToken");
                }}
              >
                마이페이지
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                onClick={() => {
                  history.push("/registerAccount");
                }}
              >
                회원가입
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
