import React from "react";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header: React.FC<{}> = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container style={{margin:'1rem'}}>
                <Col><Navbar.Brand className="AppName" href="#home">
                크립토그래퍼
                    </Navbar.Brand></Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Col ><Nav className="me-auto">
                    <Form className="d-flex">
                        <FormControl
                            style={{marginLeft:'10rem', width:'30rem'}}
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Nav>
                    </Col>
                    <Nav>
                    <Nav.Link href="#Login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#RegisterAccount">
                        RegisterAccount
                    </Nav.Link>
                    </Nav>
                 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;