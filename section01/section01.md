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

# 컴파일러 옵션
- 컴파일러 옵션은 nodjs 패키지(프로젝트) 단위로 설정 가능
- 터미널에서 <code>$ tsc --init</code> 입력 후 tsconfig.json에서 설정
- 주요 옵션
  - include
    - <code>"include" : ["경로1", "경로2"]</code> : 지정 디렉토리(경로)안에 여러 ts파일을 컴파일
  - compile option 설정
    ```
    "compilerOptions": {
     [options...]
    }
    ```
    - target
      - <code>"target: [js 버전]</code> : 컴파일 시 해당 설정 버전으로 컴파일
    - module
      - <code>"module": [js 버전]</code> : CJS, ESNext 설정 여부
    - outDir
      - <code>"outDir": [컴파일 경로]</code> : ts 파일 컴파일 할 경로
    - strict
      - <code>"strict": [boolean]</code> : 타입 엄격한 검사 여부
    - moduleDetection
      - <code>"moduleDetection": "force"</code> : 독립된 모듈 인지 여부
  
  - ts-node 설정
    ```
    "ts-node": {
      "esm": true // ts-node 타입스크립트 실행 설정
    }
    ```