import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CategoryTab: React.FC<any> = (props) => {
  console.log(props);
  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <Nav justify variant="pills">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onSelect={() => {
              props.parentFunction("option1");
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onSelect={() => {
              props.parentFunction("option2");
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onSelect={() => {
              props.parentFunction("option3");
            }}
          >
            Option 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onSelect={() => {
              props.parentFunction("option4");
            }}
          >
            Option 4
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            onSelect={() => {
              props.parentFunction("option5");
            }}
          >
            Option 5
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            onSelect={() => {
              props.parentFunction("option6");
            }}
          >
            Option 6
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-6"
            onSelect={() => {
              props.parentFunction("option7");
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
