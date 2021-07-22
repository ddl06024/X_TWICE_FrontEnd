import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
const Tabs: React.FC<{}> = () => {
    const history = useHistory();
    return (
        <div style={{width: '85%', margin: '1rem auto'}}>
        <Nav justify variant="tabs" defaultActiveKey='link-1' className="mt-4">
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{history.push('/myPage/myToken')}}>나의 보유토큰</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={()=>{history.push('/myPage/myTokenOnSale')}}>나의 판매중인 토큰</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" onClick={()=>{history.push('/myPage/transactions')}}>나의 거래내역</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    );
};

export default Tabs;