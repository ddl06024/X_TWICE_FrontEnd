import React, { useState, useEffect } from "react";
import { Button, FloatingLabel, Form, Nav, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
import { useImageCompress } from "../hooks/useImageCompress";
import { useKlaytn } from "../hooks/useKlaytn.js";
import storage from "../firebase";
import { HttpError, ImageError } from "../errors/error";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "../configs/cookie";
import { useVGG16 } from "../hooks/useVGG16";
import jwt_decode from "jwt-decode";

declare const Buffer: any;
const MAX_IMAGE_SIZE = 30000; // 30KB
const MAX_IMAGE_SIZE_MB = 0.03; // 30KB

const RegisterPicture: React.FC<any> = (props) => {
  const { computeSimilarity, sendVectorNorm } = useVGG16();
  const [disabled, setDisabled] = useState(true);
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
  const [photo, setPhoto] = useState("");
  const [tokId, setTokId] = useState("");
  const [vector, setVector] = useState("");
  const [norm, setNorm] = useState("");

  const {
    checkTokenExists,
    getTotalSupply,
    mintNFT,
    getBalanceOf,
    getTokenOfOwnerByIndex,
  } = useKlaytn();
  useEffect(() => {
    const decoded = jwt_decode(getCookie("myToken")) as any;
    const address = decoded.user_account;
    console.log(address);
    getTotalSupply().then(function (totalSupply) {
      console.log(totalSupply);
      const totalplusone = parseInt(totalSupply) + 1;
      console.log(totalplusone);
      setTokId(String(totalplusone));
    });
  }, [photo]);
  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const descHandleChange = (e: any) => {
    setDesc(e.target.value);
  };
  const computeSim = async () => {
    try {
      const formData = new FormData();
      formData.append("file", files as any);
      const { data, errors } = await computeSimilarity(formData);
      console.log(data);
      if (errors) {
        throw new HttpError("HTTP 오류가 발생했습니다.", errors);
      }
      //console.log(data.picture_norm, data.picture_vector);
      setVector(data.picture_vector);
      setNorm(data.picture_norm);
      //if (data.picture_vector && data.picture_norm) {
      setDisabled(false);
      alert("사진 등록이 가능합니다.");
      //} else {
      //alert("다른 사진과 유사하여 등록하지 못합니다.");
      // }
      //return data;
    } catch (err) {
      throw new HttpError(err.message, err.extensions);
    }
  };
  const { imageCompression } = useImageCompress();
  const compressImage = async (imageFile: any) => {
    try {
      const compressedFile = await imageCompression(
        imageFile,
        MAX_IMAGE_SIZE_MB,
        45
      );
      console.log(compressedFile);
      setPhoto(compressedFile);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFiles = (e: any) => {
    const file = e.target.files[0];
    setFiles(file);
    if (file.size > MAX_IMAGE_SIZE) {
      return compressImage(file);
    }
    setPhoto(file);
  };

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const { insertPicture } = usePictures();

  async function registerToBackend(
    tkId: any,
    url1: string,
    title1: string,
    desc1: string,
    directoryName1: string,
    fileName1: string
  ) {
    try {
      const { data, errors } = await insertPicture({
        picture_vector: vector.toString(),
        picture_norm: parseFloat(norm),
        token_id: tkId,
        picture_url: url1,
        picture_directory: directoryName1,
        picture_name: fileName1,
        picture_title: title1,
        picture_category: category.toString(),
        picture_info: desc1,
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

      return imageUrl;
    } catch (err) {
      throw new ImageError(err.message);
    }
  }

  function uploadFile(photo: any) {
    return new Promise(function (resolve, reject) {
      let reader = new window.FileReader();
      reader.readAsArrayBuffer(photo);
      reader.onload = function (e: any) {
        const buffer = Buffer.from(reader.result);
        const hexString = "0x" + buffer.toString("hex");
        resolve(hexString);
      };
    });
  }
  function mint(
    title: any,
    author: any,
    dateCreated: any,
    hash: any,
    photo: any,
    category: any,
    description: any
  ) {
    return new Promise(function (resolve, reject) {
      mintNFT(title, author, dateCreated, hash, photo, category, description);
      resolve("success");
    });
  }

  async function registerPicture() {
    try {
      const nowTime = new Date().getTime();
      const url = await uploadImageAndGetUrl(
        files,
        "images",
        `img${nowTime}.jpg`
      );

      if (!url) {
        throw new ImageError("이미지가 등록되지 못했습니다.");
      }

      const userInfo = getCookie("userId");
      //if (!checkTokenExists(title.toString())) {
      const reader = new window.FileReader();

      const hexStrings: string[] = [];
      reader.readAsArrayBuffer(photo as any);
      reader.onloadend = async () => {
        const buffer = await Buffer.from(reader.result);
        hexStrings.push("0x" + buffer.toString("hex"));
      };

      uploadFile(photo)
        .then(async function (hexString) {
          mint(
            title.toString(),
            userInfo.user_num.toString(),
            new Date().toString(),
            url.toString(),
            String(hexString),
            category.toString(),
            desc.toString()
          )
            .then(async function (receipt: any) {
              if (receipt === "success") {
                console.log("success");
              } else {
                alert("블록체인 등록 실패");
                return;
              }
              const data = await registerToBackend(
                String(tokId),
                url,
                title,
                desc,
                "images",
                `img${nowTime}.jpg`
              );
              console.log(data);
              history.push("/");
            })
            .catch((error) => {
              console.log("error1 : " + error);
              alert("error1 : " + error);
              return;
            });
        })
        .catch((error) => {
          console.log("error2 : " + error);
          alert("error2 : " + error);
          return;
        });
      /*
        const tokId = await mintNFT(
          title.toString(),
          userInfo.user_num.toString(),
          new Date().toString(),
          url.toString(),
          String(hexString),
          category.toString(),
          desc.toString()
        );
      });
      console.log(tokId);
      const data = await registerToBackend(
        String(tokId),
        url,
        title,
        desc,
        "images",
        `img${nowTime}.jpg`
      );
      console.log(data);
      history.push("/");
*/
      //}]
    } catch (err) {
      console.log(err.name + "/" + err.message);
      alert(err.name + "/" + err.message);
      console.log(JSON.stringify(err, null, 2));
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
            <Form.Group controlId="formFile" onChange={handleFiles}>
              <Form.Label>사진</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Row>
          <Button
            variant="outline-primary"
            onClick={computeSim}
            style={{ marginBottom: "2rem", marginLeft: "1rem" }}
          >
            유사도 검사
          </Button>

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
              <option value="산">산</option>
              <option value="바다">바다</option>
              <option value="나무">나무</option>
              <option value="꽃">꽃</option>
              <option value="구름">구름</option>
              <option value="건물">건물</option>
              <option value="동물">동물</option>
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
            disabled={disabled}
          >
            제출
          </Button>
        </Form>
      </div>
    </Nav>
  );
};

export default RegisterPicture;
