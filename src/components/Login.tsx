import React, { useReducer, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Nav,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { setCookie, getCookie } from "../hooks/cookie";
import { useUsers } from "../hooks/useUsers";

const Login: React.FC<any> = (props) => {
  const initialFormStates = {
    user_id: "",
    user_password: "",
  };

  const [formState, setFormState] = useReducer(
    (curVals: any, newVals: any) => ({ ...curVals, ...newVals }),
    initialFormStates
  );

  const { user_id, user_password } = formState;

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({ [name]: value });
  };
  const history = useHistory();
  const { loginUser } = useUsers();
  async function login() {
    console.log(formState);
    const res = await loginUser({
      user_id,
      user_password,
    });
    if (res.data) {
      setCookie("myToken", res.data, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
    }
    console.log(res.data);
    history.push({
      pathname: "/",
      state: { tk: getCookie("myToken") },
    });
    //const token = res.data;
    //const res2 = await isUserLogin({
    //  token,
    //});
    //console.log(res2);
  }

  return (
    <Container style={{ marginTop: "4rem", height: "100%" }}>
      <Form>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="id"
              placeholder="id"
              name="user_id"
              value={user_id}
              onChange={handleFormChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="user_password"
            value={user_password}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={login}>
          로그인
        </Button>
      </Form>
      <p style={{ marginTop: "2rem" }}>
        계정이 없으신가요?
        <Button
          variant="outline-secondary"
          size="sm"
          style={{ marginLeft: "0.2rem" }}
          onClick={() => {
            history.push({
              //state: state,
              pathname: "/registerAccount",
            });
          }}
        >
          회원가입
        </Button>
      </p>
    </Container>
  );
};

export default Login;
