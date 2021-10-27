import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap"; //
import { useKlaytn } from "../hooks/useKlaytn";
import { useHistory, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getCookie, removeCookie } from "../configs/cookie";
import ModalWallet from "./ModalWallet";
import { AnySchema } from "yup";
const Header: React.FC<any> = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { handleLogout } = useKlaytn();
  const history = useHistory();
  const [token, setToken] = useState(getCookie("myToken"));
  const [search, setSearch] = useState("");

  const handleSearchWords = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const decoded = token && jwt_decode(token.toString());
  const handleSearch = (e: any) => {
    //props.setViewBy("search");
    //props.setSearchWord(search);
    e.preventDefault();
    if (search == "") {
      alert("검색어를 입력하세요");
      return;
    }
    if (e.keyCode === 13) {
      history.push({
        pathname: "/viewPictures",
        state: { viewBy: "search", search: search },
      });
    }
    history.push({
      pathname: "/viewPictures",
      state: { viewBy: "search", search: search },
    });
  };

  const location = useLocation<any>();
  useEffect(() => {
    //if (location.state) {
    //  setToken(location.state.tk);
    //}
    setToken(getCookie("myToken"));
  }, [location, token]);
  const onLogoutHandler = () => {
    removeCookie("myToken");
    removeCookie("userId");
    removeCookie("walletInstance");

    setToken(getCookie("myToken"));
    handleLogout();

    history.push("/");
  };
  const userInfo = (
    <span
      style={{
        paddingRight: "8px",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "8px",
      }}
      className="d-inline-block text-truncate"
    >
      <span style={{ fontWeight: "bold" }}>
        {decoded && (decoded as any).user_id}
      </span>

      {"님 환영합니다."}
      {/*
      <br />
       <span style={{ color: "green" }}>{"14klay"}</span>
      {" 보유"} */}
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
          src="../tempImages/nfticon.png"
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
            <Form className="d-flex  flex-grow-1 " onSubmit={handleSearch}>
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
              >
                Search
              </Button>
            </Form>
          </Nav>
          {token && decoded ? (
            <Nav>
              {userInfo}
              <Nav.Link onClick={() => setModalShow(true)}>지갑정보</Nav.Link>
              <ModalWallet
                show={modalShow}
                onHide={() => {
                  setModalShow(false);
                }}
              />
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
