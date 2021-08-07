import React, { useEffect, useState } from "react";
import {
  Badge,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormSelect,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
const SearchWord: React.FC<any> = (props) => {
  const history = useHistory();
  const location = useLocation<any>();
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    if (location.state) {
      setBadge(location.state.word);
    }
  }, [location]);
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Navbar style={{ padding: "0" }}>
        <Container>
          <span>
            개 결과
            {badge ? (
              <span style={{ marginLeft: "1rem" }}>
                검색어 : <Badge bg="secondary">{badge}</Badge>{" "}
              </span>
            ) : null}
          </span>
          <Navbar
            className="d-flex align-items-end flex-column"
            style={{ padding: "0" }}
          >
            <Form.Select
              onChange={(e: any) => {
                if (e.target.value === "3") {
                  history.push("/viewPictures/category/1");
                } else if (e.target.value === "1") {
                  history.push("/viewPictures/popularity");
                } else {
                  history.push("/viewPictures/price");
                }
              }}
            >
              <option value="1">인기순</option>
              <option value="2">가격순</option>
              <option value="3">카테고리</option>
            </Form.Select>
          </Navbar>
        </Container>
      </Navbar>
      <hr />
    </Container>
  );
};

export default SearchWord;
