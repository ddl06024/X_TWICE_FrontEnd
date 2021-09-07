import React from "react";
import { Nav } from "react-bootstrap";

const CategoryTab: React.FC<any> = (props) => {
  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <Nav justify variant="pills" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onSelect={() => {
              props.setCategory("산");
            }}
          >
            산
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onSelect={() => {
              props.setCategory("바다");
            }}
          >
            바다
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onSelect={() => {
              props.setCategory("나무");
            }}
          >
            나무
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onSelect={() => {
              props.setCategory("꽃");
            }}
          >
            꽃
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            onSelect={() => {
              props.setCategory("구름");
            }}
          >
            구름
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            onSelect={() => {
              props.setCategory("건물");
            }}
          >
            건물
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-6"
            onSelect={() => {
              props.setCategory("동물");
            }}
          >
            동물
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CategoryTab;
