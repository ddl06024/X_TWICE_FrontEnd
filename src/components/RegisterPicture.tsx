import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
const RegisterPicture: React.FC<any> = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState<any>("");
  const [desc, setDesc] = useState<any>("");
  const [files, setFiles] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const descHandleChange = (e: any) => {
    setDesc(e.target.value);
  };
  const handleFiles = (e: any) => {
    console.log(e.target.files);
    setFiles(e.target.files);
  };
  const handleCategory = (e: any) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };
  const onClickHandler = () => {
    let _contents = Array.from(props.nft.nft.contents);
    _contents.push({
      id: props.nft.nft.count,
      onSale: false,
      title: title,
      desc: desc,
      price: 0,
    });
    const newNft = {
      userId: props.nft.nft.userId,
      count: props.nft.nft.count + 1,
      contents: _contents,
    };
    props.onClick(newNft);
    {
      /*  setNft({
                contents:_contents,
                nftId : props.nft.nft.nftId+1,
            });*/
    }
  };
  const { registerPictures } = usePictures();
  async function register() {
    try {
      const res = await registerPictures({
        token_id: "2343" + new Date().getMilliseconds().toString(),
        picture_url: "wwwaver.com",
        picture_title: title,
        picture_category: "122",
        picture_info: desc,
      });
      console.log(res);
      console.log(res.data);
    } catch (err) {
      console.log(err);
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
            onClick={() => {
              alert("유사도검사중");
            }}
            style={{ margin: "1rem" }}
          >
            유사도 검사하기{" "}
          </Button>

          <Button
            variant="primary"
            onClick={onClickHandler}
            style={{ margin: "1rem" }}
          >
            등록{" "}
          </Button>
          <Button
            variant="primary"
            type="button"
            style={{ margin: "1rem" }}
            onClick={register}
          >
            Submit
          </Button>
        </Form>
      </div>
    </Nav>
  );
};

export default RegisterPicture;
