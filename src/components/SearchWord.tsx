import React from "react";
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
import { useHistory } from "react-router";
const SearchWord: React.FC<{}> = () => {
  const history = useHistory();
  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <Navbar style={{ padding: "0" }}>
        <Container>
          <span>
            1,120개 결과 검색어 : <Badge bg="secondary">하와이</Badge>
          </span>
          <Navbar
            className="d-flex align-items-end flex-column"
            style={{ padding: "0" }}
          >
            <Form.Control
              as="select"
              onChange={(e) => {
                if (e.target.value === "3") {
                  history.push("/viewPictures/category/1");
                } else if (e.target.value === "2") {
                  history.push("/viewPictures/popularity");
                } else {
                  history.push("/viewPictures/price");
                }
              }}
            >
              <option value="1">가격순</option>
              <option value="2">인기순</option>
              <option value="3">카테고리</option>
            </Form.Control>
          </Navbar>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default SearchWord;
