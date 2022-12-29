# HT NMS MIGRATION

1. 설치 진행

npm install

2. 환경설정

config.js 에서 설정
API -> API 서버 주소
TOKEN -> node token.js 실행 후 반환되는 결과값을 config.js에 업데이트

1. 각 단계별 코드 실행

GROUP -> node groups.js
RING -> node rings.js
DEVICE -> node devices.js
LINK -> node links.js
