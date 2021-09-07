import React, { useReducer, useState } from "react";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { setCookie, getCookie } from "../configs/cookie";
import { useUsers } from "../hooks/useUsers";
import { useKlaytn } from "../hooks/useKlaytn.js";
import ModalLogin from "./ModalLogin";
import * as CryptoJS from "crypto-js";

const Login: React.FC<any> = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { handleLogin, approve, getBalance } = useKlaytn();

  const validationSchema = Yup.object().shape({
    user_id: Yup.string().required("ID는 필수항목 입니다."),
    user_password: Yup.string()
      .min(4, "패스워드는 4자 이상이여야 합니다.")
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
  const text =
    "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

  /* async function digestMessage(message: any) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
  }*/

  const history = useHistory();
  const { loginUser } = useUsers();

  async function login() {
    //const hashed = await digestMessage(user_password);
    //const cr = crypto.SHA256 as any;
    //const hashed = cr.encrypt(user_password, "SECRETKEY").toString();
    const hashed = CryptoJS.SHA256(user_password).toString();
    try {
      const res = await loginUser({
        user_id,
        user_password: hashed,
      });
      if (res.data) {
        setCookie("myToken", res.data, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        const decoded: any = jwt_decode(res.data);
        handleLogin(decoded.user_privatekey);

        setCookie("userId", decoded, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
      }
      setModalShow(true);
    } catch (err) {
      const isAxiosError = err?.isAxiosError ?? false;
      if (isAxiosError) {
        const {
          response: { data },
        } = err;
        console.log(data);
        alert(data.message + " 회원정보가 일치하지 않습니다.");
        console.log(err);
      }
    }

    //approve();

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
      <ModalLogin
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          history.push({
            pathname: "/",
            state: { tk: getCookie("myToken") },
          });
        }}
      />
    </Container>
  );
};

export default Login;
