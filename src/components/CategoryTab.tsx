import React from "react";
import { Nav } from "react-bootstrap";

const CategoryTab: React.FC<{}> = () => {
    return (
      <div style={{width: '85%', margin: '1rem auto'}}>
          <Nav justify variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Option 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
        
            <Nav.Item>
              <Nav.Link eventKey="link-2">Option 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Option 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Option 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5">Option 6</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-6">Option 7</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
    );
};

export default CategoryTab;