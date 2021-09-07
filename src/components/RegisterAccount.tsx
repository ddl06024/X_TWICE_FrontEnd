import React, { useState, useReducer, useRef, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useKlaytn } from "../hooks/useKlaytn.js";

const RegisterAccount: React.FC<{}> = () => {
  const { pkToAddress, createPrivateKey } = useKlaytn();
  const validationSchema = Yup.object().shape({
    user_id: Yup.string().required("ID는 필수항목 입니다."),
    user_password: Yup.string()
      .min(4, "패스워드는 4자 이상이여야 합니다.")
      .required("패스워드는 필수항목입니다."),
    user_passwordcheck: Yup.string()
      .oneOf([Yup.ref("user_password"), null], "패스워드와 동일해야 합니다.")
      .required("패스워드 확인은 필수항목입니다."),
    user_privatekey: Yup.string().required(
      "필수항목입니다. 프라이빗 키를 생성해주세요."
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [isGenerated, setIsGenerated] = useState(false);
  const [user_account, setUserAccount] = useState(null);
  const [user_privatekey, setPrivateKey] = useState(null);
  const inputRef = useRef<any>(null);
  const generatePrivateKey = () => {
    const { privateKey: pk } = createPrivateKey();
    setPrivateKey(pk);
    const walletInstance = pkToAddress(pk);

    setUserAccount(walletInstance.address);
    console.log(walletInstance.address);

    inputRef.current?.focus();
    setIsGenerated(true);
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

  async function digestMessage(message: any) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
  }
  async function signup() {
    const hashed = await digestMessage(user_password);
    console.log(hashed);

    try {
      const res = await signUpUser({
        user_id,
        user_password: hashed,
        //user_account: user_account,
        user_account: user_account,
        user_privatekey: user_privatekey,
      });
    } catch (err) {
      const isAxiosError = err?.isAxiosError ?? false;
      if (isAxiosError) {
        const {
          response: { data },
        } = err;
        console.log(data);
        alert(data.message);
        console.log(err);
      }
    }
    history.push({
      //state: state,
      pathname: "/",
    });
  }

  return (
    <Container style={{ marginTop: "4rem", height: "100%" }}>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={handleFormChange}
        >
          <Form.Label> ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디"
            {...register("user_id", {
              required: "Required",
            })}
            className={` ${errors.user_id ? "is-invalid" : ""}`}
            value={user_id}
          />
          <div className="invalid-feedback">{errors.user_id?.message}</div>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword1"
          onChange={handleFormChange}
        >
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호"
            {...register("user_password", {
              required: "Required",
            })}
            className={`${errors.user_password ? "is-invalid" : ""}`}
            value={user_password}
          />
          <div className="invalid-feedback">
            {errors.user_password?.message}
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword2"
          onChange={handleFormChange}
        >
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            {...register("user_passwordcheck", {
              required: "Required",
            })}
            className={`${errors.user_passwordcheck ? "is-invalid" : ""}`}
            value={user_passwordcheck}
          />
          <div className="invalid-feedback">
            {errors.user_passwordcheck?.message}
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword3"
          onChange={handleFormChange}
        >
          <Form.Label>프라이빗 키</Form.Label>
          <Form.Control
            type="password"
            placeholder="Private Key 생성을 누르세요"
            {...register("user_privatekey", {
              required: "Required",
            })}
            ref={inputRef}
            value={user_privatekey || ""}
            className={`${
              !isGenerated && errors.user_privatekey ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {!isGenerated && errors.user_privatekey?.message}
          </div>
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

        <Button variant="success" type="button" onClick={handleSubmit(signup)}>
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
