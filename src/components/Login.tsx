import React from "react";
import { Button, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";

const Login: React.FC<{}> = () => {
    return (
        <Nav className="justify-content-center">
        <div style={{ width: 860, height: 'auto' }}>
        <Form>
            <Row className="mb-3">
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>KeyStoreFile</Form.Label>
                <Form.Control type="file" />
                </Form.Group>
            </Row>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
        
           
        
            
        
            <Button variant="primary" type="submit">
            로그인
        </Button>
      </Form>
      </div>
      </Nav>
    );
};

export default Login;




