import React from "react";
import { Card, CardGroup, Container, Image } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Introduction: React.FC<{}> = () => {
  return (
    <CardGroup
      style={{
        marginTop: "5rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Card
        style={{
          margin: "1rem",
          borderRadius: "30px",
          padding: "1rem",
        }}
        border="light"
        bg="light"
        text="dark"
      >
        <BsFillInfoCircleFill
          style={{
            color: "black",
            fontSize: "2rem",
          }}
        />
        {/* <Card.Img variant="top" src="../tempImages/klaytn.png" />*/}
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ margin: "1rem" }} border="light" bg="light" text="dark">
        {/*<Card.Img variant="top" src="../tempImages/deeplearning.jpg" />*/}
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ margin: "1rem" }} border="light" bg="light" text="dark">
        {/*<Card.Img variant="top" src="../tempImages/background.jpg" />*/}
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    /*
    <Card
      className=" text-black "
      style={{ border: "none", marginTop: "5rem" }}
    >
      <Card.Img src="../tempImages/square.png" alt="Card image" />

      <Card.ImgOverlay
        style={{
          display: "flex",
          overflowY: "scroll",
          height: "100%",
          marginTop: "2rem",
        }}
      >
        <Container>
          <Card.Title
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            What's NFT사진거래소?
          </Card.Title>
          <br />
          <Card.Text style={{ width: "100%" }}>
            &nbsp;NFT 사진 거래소는 사용자 중심의 Klaytn 기반 NFT 거래소입니다.
            NFT란 대체 불가능 토큰의 약자로 블록체인 기술을 바탕으로 만들어진
            가상 자산이라는 점에서 비트코인과 비슷하지만 토큰에 고유한 인식 값인
            디지털 작품 파일을 담을 수 있습니다. 그리고 블록체인에 작품의
            소유권과 거래 이력이 기록됩니다. 그리고 Klaytn은 사용자 친화적인
            블록체인 경험을 제공하기 위한 엔터프라이즈급 서비스 중심 블록체인
            플랫폼입니다. 지연 시간이 적은 네트워크 응답성, 안정적이지만 강력한
            트랜잭션 처리량, 서비스 체인을 통한 유연한 확장성 및 최종 사용자를
            위한 트랜잭션 요금 보조금까지 Klaytn이 제공하는 다양한 기능을
            활용합니다. 그리고 더 유연한 계정 관리 규칙을 제공하고, 사용자가
            기억하기 쉬운 계정 ID와 PASSWORD를 스스로 정할 수 있게 하며, 개인키
            관리의 책임을 사용자가 전적으로 져야 하는 제약을 완화합니다. 우리의
            사용자 경험 개선 계획은 기존 기술과 완전히 동일하여 구별할 수 없는
            블록체인 사용성을 제공하는 것입니다. 그리고 현존하는 NFT 기술을
            활용한 거래 플랫폼들의 타인의 디지털 자산을 모방하여 임의로 NFT를
            생성해 판매할 수 있는 문제점을 해결하기 위해 딥러닝을 활용한 유사도
            분석 모델링을 구축하여 모방된 사진에 대한 NFT 생성을 막고 유사도
            검사를 통과한 사진에 대해서만 NFT를 생성할 수 있게 합니다.
          </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>*/
  );
};

export default Introduction;
