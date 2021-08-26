import React, { useState } from "react";
import { Button, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
import { useKlaytn } from "../hooks/useKlaytn";
import storage from "../firebase";
import { HttpError, ImageError } from "../errors/error";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "../configs/cookie";

const RegisterPicture: React.FC<any> = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("제목을 입력해주세요."),
    desc: Yup.string().required("사진에 대해 설명해주세요."),
    category: Yup.string().required("카테고리를 설정해주세요."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const history = useHistory();
  const [title, setTitle] = useState<any>("");
  const [desc, setDesc] = useState<any>("");
  const [files, setFiles] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [Url, setUrl] = useState("");

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const descHandleChange = (e: any) => {
    setDesc(e.target.value);
  };
  const handleFiles = (e: any) => {
    console.log(e.target.files[0]);
    setFiles(e.target.files[0]);
  };

  const handleCategory = (e: any) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const { insertPicture } = usePictures();
  const { checkTokenExists, mintNFT, uploadNFT } = useKlaytn();

  async function registerToBackend(
    url1: string,
    title1: string,
    desc1: string,
    directoryName1: string,
    fileName1: string
  ) {
    try {
      const { data, errors } = await insertPicture({
        token_id: "2343" + new Date().getMilliseconds().toString(),
        picture_url: url1,
        picture_title: title1,
        picture_category: category.toString(),
        picture_info: desc1,
        picture_directory: directoryName1,
        picture_name: fileName1,
      });

      if (errors) {
        throw new HttpError("HTTP 오류가 발생했습니다.", errors);
      }

      return data;
    } catch (err) {
      throw new HttpError(err.message, err.extensions);
    }
  }

  async function uploadImageAndGetUrl(
    file: Blob,
    directoryName: string,
    fileName: string
  ) {
    try {
      if (!file) {
        throw new ImageError("등록하려는 파일이 없습니다.");
      }
      // console.log(files.name);
      const imageName = `/${directoryName}/${fileName}`;

      const imageRef = storage.ref(imageName);
      await imageRef.put(files, { contentType: "image/jpg" });
      const imageUrl = await imageRef.getDownloadURL();
      console.log(imageUrl);
      return imageUrl;
    } catch (err) {
      throw new ImageError(err.message);
    }
  }

  async function registerPicture() {
    try {
      const nowTime = new Date().getTime();
      const url = await uploadImageAndGetUrl(
        files,
        "images",
        `img${nowTime}.jpg`
      );
      console.log(url);
      if (!url) {
        throw new ImageError("이미지가 등록되지 못했습니다.");
      }

      const userInfo = getCookie("userId");
      mintNFT(
        title.toString(),
        userInfo.user_num.toString(),
        new Date().toString(),
        url.toString()
      );
      //uploadNFT("wow", title.toString(), desc.toString(), "images");

      /*  const data = await registerToBackend(
        url,
        title,
        desc,
        "images",
        `img${nowTime}.jpg`
      );
      console.log(data);*/
      // history.push("/");
    } catch (err) {
      alert(err.name + "/" + err.message);
      // console.log(JSON.stringify(err, null, 2));
    }
  }

  return (
    <Nav
      className="justify-content-center"
      style={{ width: "40rem auto", margin: "4rem auto" }}
    >
      <div style={{ width: 860, height: "auto" }}>
        <Form>
          <Row className="mb-3">
            <Form.Group
              controlId="formFile"
              className="mb-3"
              onChange={handleFiles}
            >
              <Form.Label>사진</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridAddress1" onChange={handleChange}>
            <Form.Label>제목</Form.Label>
            <Form.Control
              placeholder="입력"
              {...register("title", {
                required: "Required",
              })}
              className={`${errors.title ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.title?.message}</div>
          </Form.Group>

          <FloatingLabel
            controlId="floatingSelect"
            label="카테고리선택"
            onChange={handleCategory}
          >
            <Form.Select
              aria-label="Floating label select example"
              {...register("category", {
                required: "Required",
              })}
              className={`mt-3  ${errors.category ? "is-invalid" : ""}`}
            >
              <option value="">Open this select menu</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
            </Form.Select>
            <div className="invalid-feedback">{errors.category?.message}</div>
          </FloatingLabel>

          <Row className="mb-3 mt-3">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="설명"
              onChange={descHandleChange}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                {...register("desc", {
                  required: "Required",
                })}
                className={` ${errors.desc ? "is-invalid" : ""}`}
                style={{ height: "100px" }}
              />
              <div className="invalid-feedback">{errors.desc?.message}</div>
            </FloatingLabel>
          </Row>
          <Button
            variant="primary"
            onClick={handleSubmit(registerPicture)}
            style={{ margin: "1rem" }}
          >
            제출
          </Button>
          <p>
            <a href={Url}>{Url}</a>
          </p>
          {/* <Button
            variant="primary"
            onClick={onClickHandler}
            style={{ margin: "1rem" }}
          >
            리덕스 등록
          </Button>
          <Button
            variant="primary"
            type="button"
            style={{ margin: "1rem" }}
            onClick={register}
          >
            백엔드 업로드
          </Button> */}
        </Form>
      </div>
    </Nav>
  );
};

export default RegisterPicture;
