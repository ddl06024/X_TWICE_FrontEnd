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
              props.setCategory("One");
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onSelect={() => {
              props.setCategory("Two");
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onSelect={() => {
              props.setCategory("Three");
            }}
          >
            Option 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onSelect={() => {
              props.setCategory("Four");
            }}
          >
            Option 4
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            onSelect={() => {
              props.setCategory("Five");
            }}
          >
            Option 5
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            onSelect={() => {
              props.setCategory("Six");
            }}
          >
            Option 6
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-6"
            onSelect={() => {
              props.setCategory("Seven");
            }}
          >
            Option 7
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CategoryTab;
