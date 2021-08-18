import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getCookie, removeCookie } from "../configs/cookie";
const Header: React.FC<any> = (props) => {
  const history = useHistory();
  const [token, setToken] = useState(getCookie("myToken"));
  const [search, setSearch] = useState("");
  const handleSearchWords = (e: any) => {
    setSearch(e.target.value);
  };

  const decoded = token && jwt_decode(token);

  const handleSearch = () => {
    //props.setViewBy("search");
    //props.setSearchWord(search);
    history.push({
      pathname: "/viewPictures",
      state: { viewBy: "search", search: search },
    });
  };

  const location = useLocation<any>();
  useEffect(() => {
    if (location.state) {
      setToken(location.state.tk);
    }
  }, [location]);
  const onLogoutHandler = () => {
    removeCookie("myToken");
    removeCookie("userId");
    setToken(getCookie("myToken"));

    history.push("/");
  };
  const userInfo = (
    <span
      style={{ marginLeft: "8px", marginRight: "8px" }}
      className="d-inline-block text-truncate"
    >
      <span style={{ fontWeight: "bold" }}>
        {decoded && (decoded as any).user_id}
      </span>
      {" 님 환영합니다."}
      <br />
      <span style={{ color: "green" }}>{"14klay"}</span>
      {" 보유"}
    </span>
  );
  return (
    <Navbar
      collapseOnSelect
      className="shadow p-3 bg-white rounded"
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      style={{
        minHeight: "75px",
      }}
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
          {/*사진 거래소 */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto d-flex flex-fill ">
            <Form className="d-flex  flex-grow-1 ">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 "
                aria-label="Search"
                //style={{ width: "40vw" }}

                onChange={handleSearchWords}
              />
              <Button
                variant="outline-success "
                style={{ marginRight: "3rem" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Form>
          </Nav>
          {token ? (
            <Nav>
              {userInfo}
              <Nav.Link onClick={onLogoutHandler}>로그아웃</Nav.Link>
              <Nav.Link
                eventKey={2}
                onClick={() => {
                  history.push("/myPage");
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
