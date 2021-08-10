import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
import { getCookie } from "../configs/cookie";
import storage from "../firebase";
import { HttpError, ImageError } from "../errors/error";
const RegisterPicture: React.FC<any> = (props) => {
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

      const data = await registerToBackend(
        url,
        title,
        desc,
        "images",
        `img${nowTime}.jpg`
      );
      console.log(data);
    } catch (err) {
      alert(err.name + "/" + err.message);
    }
    history.push("/");
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

          <Form.Group
            className="mb-3"
            controlId="formGridAddress1"
            onChange={handleChange}
          >
            <Form.Label>제목</Form.Label>
            <Form.Control placeholder="입력" />
          </Form.Group>

          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="카테고리선택"
          >
            <Form.Select
              aria-label="Floating label select example"
              onChange={handleCategory}
            >
              <option>Open this select menu</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
            </Form.Select>
          </FloatingLabel>

          <Row className="mb-3">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="설명"
              onChange={descHandleChange}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Row>
          <Button
            variant="primary"
            onClick={registerPicture}
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
