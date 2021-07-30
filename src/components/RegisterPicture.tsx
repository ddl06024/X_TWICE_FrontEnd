import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const RegisterPicture: React.FC<any> = (props) => {
  const history = useHistory();
  {
    /**     const [nft, setNft] = useState<any>({
        userId:'default',
        nftId: 1,
        contents:[
            {id: 0, onSale:true, title: "첫번쨰 게시물", desc:"첫번째게시물입니다!!!!!!", price:3}
        ]
    });*/
  }
  const [title, setTitle] = useState<any>("");
  const [desc, setDesc] = useState<any>("");
  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const descHandleChange = (e: any) => {
    setDesc(e.target.value);
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
  return (
    <Nav
      className="justify-content-center"
      style={{ width: "40rem auto", margin: "4rem auto" }}
    >
      <div style={{ width: 860, height: "auto" }}>
        <Form
          onSubmit={() => {
            history.push({
              //state: state,
              pathname: "/myPage/myToken",
            });
          }}
        >
          <Row className="mb-3">
            <Form.Group controlId="formFile" className="mb-3">
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
          <Button variant="primary" type="submit" style={{ margin: "1rem" }}>
            Submit
          </Button>
          <Button
            variant="primary"
            onClick={onClickHandler}
            style={{ margin: "1rem" }}
          >
            등록{" "}
          </Button>
        </Form>
      </div>
    </Nav>
  );
};

export default RegisterPicture;
