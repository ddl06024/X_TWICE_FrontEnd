# react-with-webpack-typescript

# X*TWICE*프로젝트명 개발 명세

## 개발 환경

- 언어 : Typescript, Javascript, Solidity
- 정적 모듈 번들러 - webpack
- 웹 프레임워크 - React, express
- 블록체인 : Klaytn
- 스마트컨트랙트 프레임 워크 : Truffle
- Klaytn 웹소켓 api : caver-js
- HTTP request 모듈 : axios
- 이미지 스토리지 : firebase
- 인증 : jsonwebtoken, universal-cookie

## 인증 처리

- 암호화
  - crypto-js 사용
- 일반 사용자
  - JWT Token 사용
- 관리자 - 웹
  - 등록된 ID, PW를 통해 로그인

## 실행 명령어

- `npm run dev` : 개발 환경으로 실행
- `npm run build` : build 파일 생성
- `npm run start` : pm2로 실행
- `npm run restart` : 기존 pm2 프로세스 삭제 후 재실행

## 디렉터리 및 파일

- `build` : 운영 환경이나 테스트 환경에서 배포
  - `contracts` : 트러플 클레이튼 배포 파일
  - `tempImages` : 기본 이미지
- `contracts` : 솔리디티 컨트랙트 파일
- `migrations` : 컨트랙트 배포 처리하는 자바스크립트 파일
- `src` : 소스 코드
  - `assets\css` : css파일
  - `components` : 페이지를 구성하는 컴포넌트 파일
  - `configs` : Klaytn과의 상호작용을 지원하는 파일, HTTP request 통신 파일, 쿠키
  - `hooks` : 리액트 커스텀 훅스
  - `pages` : 애플리케이션을 구성하는 페이지들
  - `tempImages` : 기본 이미지
- `.babelrc` : 바벨에 대해 설정을 하는 파일
- `.env` : 전역 환경 변수들(누출 유의, 누출 시 신속하게 변경 바람)
  ```
  REACT_APP_API_KEY
  REACT_APP_AUTH_DOMAIN
  REACT_APP_PROJECT_ID
  REACT_APP_STORAGE_BUCKET
  REACT_APP_MESSAGING_SENDER_ID
  REACT_APP_APP_ID
  REACT_APP_MEASUREMENT_ID
  ```
- `.gitignore` : Git에 올릴 시 무시할 파일 및 파일의 이름이나 경로, 적용 시 `git rm -r --cached .` 명령어 입력
- `deploye...` : 컨트랙트를 배포한 abi코드 파일
- `ecosystem` : pm2 설정파일
- `package.json.lock` : npm 패키지의 Lock 파일, 버전의 업그레이드 및 다운그레이드를 설치 때마다 Lock을 걸음
- `package.json` : npm 패키지 설정 파일
- `server` : 서버 설정파일
- `truffle-config` : 트러플 설정파일
- `tsconfig.json` : Typescript 설정 파일
- `webpack.config` : 웹팩 설정파일

<br>
<hr>
<br>

# X*TWICE*프로젝트명 서버(Server)

## 서버 환경

- 운영체제 : Ubuntu 18.04 LTS
- GPU : NVIDIA GTX 1080 Ti

## NodeJS 설치

1. `curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -` 으로 NodeJS 10 저장소 위치를 변경
2. `sudo apt install nodejs` 으로 node js 설치
3. `node -v`로 NodeJS 버전 확인하고, `npm -v`으로 NPM 버전 확인
4. `sudo npm install -g yarn pm2`으로 전역으로 Yarn과 PM2를 설치
