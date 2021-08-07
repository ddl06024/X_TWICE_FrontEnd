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
  Row,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { getCookie, removeCookie } from "../configs/cookie";
const Header: React.FC<any> = (props) => {
  const history = useHistory();
  const [token, setToken] = useState(getCookie("myToken"));
  const [search, setSearch] = useState("");
  const handleSearchWords = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    history.push({
      pathname: "/viewPictures/popularity",
      state: { word: search },
    });
  };

  const location = useLocation<any>();
  useEffect(() => {
    if (location.state) {
      setToken(location.state.tk);
    }
  }, [location]);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      style={{ minHeight: "75px" }}
    >
      <Container>
        <Image
          src="../tempImages/NFT_Icon.png"
          fluid
          style={{
            cursor: "pointer",
            height: "auto",
            width: "auto",
            maxHeight: "72px",
            maxWidth: "50px",
          }}
          onClick={() => {
            history.push("/");
          }}
        />
        <Navbar.Brand
          style={{
            cursor: "pointer",
            alignContent: "center",
            marginRight: "40px",
          }}
          className="AppName"
          onClick={() => {
            history.push("/");
          }}
        >
          사진 거래소
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                style={{ width: "40vw" }}
                onChange={handleSearchWords}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Nav>
          {token ? (
            <Nav>
              <Nav.Link
                onClick={() => {
                  removeCookie("myToken");
                  setToken(getCookie("myToken"));
                  console.log(getCookie("myToken"));
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
