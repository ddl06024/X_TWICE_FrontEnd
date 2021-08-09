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
import { useHistory } from "react-router";
const SearchWord: React.FC<any> = (props) => {
  const history = useHistory();
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    if (props.searchWord) {
      setBadge(props.searchWord);
    }
  }, [props.searchWord]);
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Navbar style={{ padding: "0" }}>
        <Container>
          <span>
            {props.count}개 결과
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
              aria-label="Default select example"
              onChange={(e: any) => {
                props.setViewBy(e.target.value.toString());
                history.push("/viewPictures");
              }}
            >
              <option value="popularity">인기순</option>
              <option value="price">가격순</option>
              <option value="category">카테고리</option>
            </Form.Select>
          </Navbar>
        </Container>
      </Navbar>
      <hr />
    </Container>
  );
};

export default SearchWord;
