# Starbelly Admin

Starbelly Admin은 레스토랑 서비스 관리를 위한 관리자 페이지 프로젝트입니다.  
TypeScript, Express.js, EJS, MongoDB를 기반으로 제작되었으며, MVC 구조를 사용하여 관리자 기능을 구성했습니다.

## 프로젝트 소개

이 프로젝트는 Starbelly 레스토랑 서비스의 백엔드 및 관리자 페이지를 구현한 프로젝트입니다.  
관리자는 메뉴, 사용자, 상품 이미지 등 서비스 운영에 필요한 데이터를 관리할 수 있습니다.

## 기술 스택

- TypeScript
- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose
- Express Session
- Multer
- BcryptJS
- Morgan

## 주요 기능

- 관리자 페이지 렌더링
- 메뉴 관리
- 사용자 관리
- 이미지 업로드 처리
- MongoDB 데이터 연동
- 세션 기반 관리 기능
- MVC 패턴 기반 프로젝트 구조

## 프로젝트 구조

Starbelly-admin/
├── src/
│   ├── controllers/
│   ├── libs/
│   ├── models/
│   ├── public/
│   ├── schema/
│   ├── views/
│   ├── app.ts
│   ├── router-admin.ts
│   ├── router.ts
│   └── server.ts
├── Notes.ts
├── package.json
├── package-lock.json
└── tsconfig.json

## 설치 및 실행 방법

# 저장소 클론
git clone https://github.com/serdarch1k/Starbelly-admin.git

# 프로젝트 폴더 이동
cd Starbelly-admin

# 패키지 설치
npm install

# 개발 서버 실행
npm run start:dev

# 일반 실행
npm start

## 환경 변수 설정

.env 파일을 생성 후 아래와 같이 설정하세요:

MONGO_URI=your_mongodb_connection_string  
PORT=3000

## 아키텍처

- Model: 데이터 구조 정의 및 MongoDB 연동
- View: EJS 기반 관리자 화면 렌더링
- Controller: 요청 처리 및 비즈니스 로직 관리
- Router: 관리자 라우트와 일반 라우트 분리

## 개발 목적

본 프로젝트는 레스토랑 서비스의 관리자 기능을 구현하고, TypeScript 기반 Express 백엔드 구조와 서버 사이드 렌더링 방식을 학습 및 실습하기 위해 제작되었습니다.

## 향후 개선 사항

- 관리자 인증 기능 강화
- 주문 관리 기능 추가
- 대시보드 통계 기능 추가
- React 기반 사용자 페이지와 연동
- UI/UX 디자인 개선
- 에러 처리 및 유효성 검사 강화

## 개발자

Sardorbek  
GitHub: https://github.com/serdarch1k

## 라이선스

본 프로젝트는 학습 및 포트폴리오 목적으로 제작되었습니다.
