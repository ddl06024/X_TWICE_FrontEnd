import React from "react";
import { Button, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login: React.FC<{}> = () => {
    const history = useHistory();
    return (
        <Nav className="justify-content-center" style={{width: '40rem auto', margin:'4rem auto'}}>
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
        
           
        
            
        
            <Button variant="primary" type="submit" onClick={()=>{history.push('/')}}>
            로그인
        </Button>
      </Form>
      </div>
      </Nav>
    );
};

export default Login;




