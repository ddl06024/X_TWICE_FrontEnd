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
          <Card.Title>NFT 란?</Card.Title>
          <Card.Text>
            NFT 기술이란 블록체인의 가상화폐 기술을 활용하여 대체 불가능한 특정
            암호 가상 화폐, token이라 불리는 화폐를 발행하는 것을 의미한다.
            token에 여러 종류의 디지털 파일을 저장할 수 있으며, 이 token에
            저장된 파일은 위조 및 변조가 불가능하다. 하지만, 현재 인터넷상의
            저작권 보호에 대한 사람들의 인식이 부족은 물론 보호를 위한 구체적인
            시스템이 구축되어 있지 않으며, 개인의 사진, 그림, 영상들이 도용되는
            사례를 쉽게 발견할 수 있다. 현존하는 NFT 기술을 활용한 거래 플랫폼은
            다른 사람의 작품을 모방한 모조품에 대해서도 소유권을 주장할 수 있다.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
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
        {/*<Card.Img variant="top" src="../tempImages/deeplearning.jpg" />*/}
        <Card.Body>
          <Card.Title>주요 기능</Card.Title>
          <Card.Text>
            본 작품은 딥러닝을 활용한 유사도 분석 모델을 통해 사진 저작물의
            유사도를 판단하고 이를 통과한 사진 저작물에 대해서만 NFT를 발행하며,
            이후 암호화폐를 통해 저작물을 거래한다. 블록체인 기술을 활용하여
            저작권을 보호하여 신뢰성을 높이고, 모방 이미지에 대해 저작권을
            부여하는 것을 방지하여 사진의 원본성을 보장한다.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
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
        {/*<Card.Img variant="top" src="../tempImages/background.jpg" />*/}
        <Card.Body>
          <Card.Title>기대효과 및 활용분야</Card.Title>
          <Card.Text>
            본 작품은 예술 작품의 소유권과 같이 중요한 지적 재산권 문제를
            다루는데 유용할 플랫폼이 될 수 있으며, 딥러닝 기술을 통한 유효성
            검증으로 빠른 시간에 투명한 저작권 관리를 실현할 수 있을 것으로
            보인다. 블록체인을 활용한 NFT 기술은 예술 산업뿐만 아니라 다른
            콘텐츠 보호가 필요한 분야에 적용될 수 있으며, 이를 기반으로 하는
            거래 시스템으로 나아갈 수 있다. 또한, 이는 블록체인 네트워크 상의
            이더 전송으로 저작권을 거래함으로써 수수료 없이 전 세계를 연결하는
            저작권 거래 플랫폼으로 확장 될 수 있다.
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
