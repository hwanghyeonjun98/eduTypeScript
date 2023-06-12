# TypeScript 설치

1. <code>$ node init</code>: node 초기화
2. <code>$ npm install(i) @types/node</code> : TypeScript 정보 패키지 설치
3. <code>$ npm install typescript -g</code> : 타입스크립트 컴파일러 패키지 설치 ([-g] -> 전체 경로에 설치)
   - <code>$ tsc</code> 컴파일러 명형어로 버전 확인 가능
4. <code>$ npm install ts-node -g</code> : 타입스크립트 실행 패키지 설치


# TypeScript 실행
1. .ts 파일 생성 후 스크립트 작성
2. 터미널에 <code>$ tsc [.ts 파일 경로]</code> : javascript로 컴파일
3. <code>$ node [.js 파일 경로]</code> : node로 javascript 실행
   -  <code>$ ts-node [.ts 파일 경로]</code> : javascript 컴파일 과정 없이 ts 파일 한번에 실행
