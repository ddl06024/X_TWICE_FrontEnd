import React, { useReducer, useState } from "react";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { setCookie, getCookie } from "../configs/cookie";
import { useUsers } from "../hooks/useUsers";

const Login: React.FC<any> = (props) => {
  const validationSchema = Yup.object().shape({
    user_id: Yup.string().required("ID는 필수항목 입니다."),
    user_password: Yup.string()
      .min(6, "패스워드는 6자 이상이여야 합니다.")
      .required("패스워드는 필수항목입니다."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
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
    console.log(res);
    console.log(res.data);
    if (res.data) {
      setCookie("myToken", res.data, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      const decoded = jwt_decode(res.data);
      console.log(decoded);
      setCookie("userId", decoded, {
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
          <Form.Group
            onChange={handleFormChange}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="id"
              placeholder="id"
              value={user_id}
              {...register("user_id", {
                required: "Required",
              })}
              className={` ${errors.user_id ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.user_id?.message}</div>
          </Form.Group>
        </Row>

        <Form.Group
          onChange={handleFormChange}
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user_password}
            {...register("user_password", {
              required: "Required",
            })}
            className={`${errors.user_password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.user_password?.message}
          </div>
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit(login)}>
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
