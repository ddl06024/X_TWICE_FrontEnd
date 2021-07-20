import React from "react";
import { Nav } from "react-bootstrap";
//d
const Tabs: React.FC<{}> = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">나의 보유토큰</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">나의 판매중인 토큰</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">나의 거래내역</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Tabs;