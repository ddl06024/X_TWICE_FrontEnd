import React from "react";
import { Button, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { useHistory} from 'react-router-dom';
const RegisterPicture: React.FC<{}> = () => {
    const history = useHistory();
    return ( 
        <Nav className="justify-content-center" style={{width: '40rem auto', margin:'4rem auto'}}>
        <div style={{ width: 860, height: 'auto' }}>
        <Form>
            <Row className="mb-3">
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>사진</Form.Label>
                <Form.Control type="file" />
                </Form.Group>
            </Row>
        
            <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>제목</Form.Label>
            <Form.Control placeholder="입력" />
            </Form.Group>
        
            <FloatingLabel className="mb-3" controlId="floatingSelect" label="카테고리선택">
                <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                </Form.Select>
            </FloatingLabel>
        
            <Row className="mb-3">
            <FloatingLabel controlId="floatingTextarea2" label="설명">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            </Row>
        
            
        
            <Button variant="primary" type="submit" onClick={()=>{history.push('/registerPicture/result')}}>
            Submit
        </Button>
      </Form>
      </div>
      </Nav>
    );
};

export default RegisterPicture;




