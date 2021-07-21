import React from "react";
import { Accordion,  Button,  Card, Nav} from "react-bootstrap";

const RegisterAccount: React.FC<{}> = () => {
    return (
     
        <Nav className="justify-content-center" style={{width: '40rem', margin:'4rem auto'}}>
        <div style={{ width: '40rem', height: 'auto' }}>
        <Accordion defaultActiveKey="0">
            
            <Accordion.Item eventKey="0">
                <Accordion.Header>#1 아래 링크로 들어가서 계정을 생성해주세요!</Accordion.Header>
                <Accordion.Body >
                    <Nav className="justify-content-center">
                <Card style={{ width: '18rem' }} >
                    <Card.Body >
                        <Card.Title >Klaytn Wallet</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">아래 링크를 눌러 확인하세요.</Card.Subtitle>
                        <Card.Text>
                         계정을 생성하고 키스토어파일을 준비해주세요.
                        </Card.Text>
                        <Card.Link href="https://baobab.wallet.klaytn.com/create">baobab.wallet.klaytn.com</Card.Link>
                    </Card.Body>
                </Card>
                </Nav>
                </Accordion.Body>
                
            </Accordion.Item>
            
            <Accordion.Item eventKey="0" >
                <Accordion.Header>#2 KeyStore파일과 비밀번호로 로그인해주세요.</Accordion.Header>
                <Accordion.Body>
                    <Nav className="justify-content-center" style={{width: '100%', margin:'2rem auto'}}>
                <Button variant="primary" style={{margin: '1rem '}}>로그인하러가기</Button>{' '}
                  <Button variant="outline-primary" style={{margin: '1rem '}}>홈으로</Button>{' '}
                  </Nav>
                </Accordion.Body>
            </Accordion.Item>
            
    </Accordion>
    </div>
    </Nav>

    
    );
};

export default RegisterAccount;



