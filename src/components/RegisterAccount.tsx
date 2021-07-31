import React, { useState, useReducer } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import caver from "../configs/klaytn";
import { useUsers } from "../hooks/useUsers";

const RegisterAccount: React.FC<{}> = () => {
  const [user_privatekey, setPrivateKey] = useState(null);

  const generatePrivateKey = () => {
    const { privateKey: pk } = caver.klay.accounts.create();
    setPrivateKey(pk);
    console.log(pk);
    console.log(pk.length);
  };

  const initialFormStates = {
    user_id: "",
    user_password: "",
    user_passwordcheck: "",
    checkPassword: false,
  };

  const [formState, setFormState] = useReducer(
    (curVals: any, newVals: any) => ({ ...curVals, ...newVals }),
    initialFormStates
  );

  const { user_id, user_password, user_passwordcheck } = formState;

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({ [name]: value });
  };

  const history = useHistory();

  const { signUpUser } = useUsers();
  async function signup() {
    const res = await signUpUser({
      user_id,
      // user_password,
      user_account: user_privatekey,
    });
    console.log(res.data);
    const token = res.data;
  }

  return (
    <Container style={{ marginTop: "4rem", height: "100%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> ID</Form.Label>
          <Form.Control
            type="id"
            placeholder="아이디"
            name="user_id"
            onChange={handleFormChange}
            value={user_id}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호"
            name="user_password"
            onChange={handleFormChange}
            value={user_password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            name="user_passwordcheck"
            value={user_passwordcheck}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>프라이빗 키</Form.Label>
          <Form.Control
            type="password"
            placeholder="Private Key 생성을 누르세요"
            name="user_privatekey"
            value={user_privatekey || ""}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Text className="text-muted" style={{ marginRight: "0.5rem" }}>
          We'll never share your PrivateKey with anyone else.
        </Form.Text>
        <Button
          variant="primary"
          type="button"
          onClick={generatePrivateKey}
          size="sm"
        >
          Private Key 생성
        </Button>
        <br />
        <Button variant="success" type="button" onClick={signup}>
          회원가입
        </Button>
      </Form>

      <p style={{ marginTop: "2rem" }}>
        계정이 있으신가요?
        <Button
          variant="outline-secondary"
          style={{ marginLeft: "0.2rem" }}
          size="sm"
          onClick={() => {
            history.push({
              //state: state,
              pathname: "/login",
            });
          }}
        >
          로그인
        </Button>
      </p>
    </Container>
  );
};
export default RegisterAccount;

{
  /* 
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
                <Button variant="primary" style={{margin: '1rem '}} onClick={()=>{history.push('/login')}}>로그인하러가기</Button>{' '}
                  <Button variant="outline-primary" style={{margin: '1rem '}} onClick={()=>{history.push('/')}}>홈으로</Button>{' '}
                  </Nav>
                </Accordion.Body>
            </Accordion.Item>
            
    </Accordion>
    </div>
    </Nav>

    */
}
