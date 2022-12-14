# 멋쟁이사자처럼 11기 운영진 1주차 사전과제

## 설명

### TODO LIST를 만드세요

- [ ] 개개인 평가가 아닌 운영진 전체 역량 파악입니다.
- [ ] CRUD 기능을 구현해야합니다.
- [ ] JavaScript, TypeScript를 제외한 기타 라이브러리, 프레임워크 사용을 금지합니다. 단, TS 컴파일(트랜스파일)을 위한 Node.js 사용은 허용합니다.
- [ ] 설계는 자유롭게 해주세요.
- [ ] UI는 고려하지 않아도 됩니다.
- [ ] 본인이 할 수 있을 만큼만 진행하세요. (무리하지 마세요)
- [ ] 최소 구현은 3시간 투자, Create Read 기능을 구현하면 됩니다.
- [ ] 서버는 Live Server를 이용하세요.
- [ ] 여러 기능을 넣기보다는 `코드의 퀄리티`를 우선적으로 생각해주세요.
- [ ] (선택사항) 로그인 및 데이터 저장은 Local Storage를 사용합니다. 웹팩을 사용할 경우 번들링 캐시 헤더를 적용해 주세요.

### README를 작성해 주세요

- [ ] 양식은 자유입니다.
- [ ] 간단한 폴더구조 설명과 개발하면서 중요하게 생각한 요소를 100~300자로 설명해주세요

### Branch, Commit Convention을 최대한 지키며 개발해 주세요

- [ ] 본인이 컨벤션을 정하고 적용하면 됩니다.
- [ ] Branch Convention 예시는 [Git-Flow](https://techblog.woowahan.com/2553/)를 참고 해주세요

## 기한

12월 19일 ~ 12월 30일 까지

## 제출 방법

현재 레포지트리의 Issues 탭에 자신의 레포지트리 링크를 업로드해주세요.

본인의 레포지트리는 반드시 public으로 해주세요

(예시는 Issues 탭 참고)

## 샘플 실행 방법

```
yarn install (혹은 npm install)

yarn build (혹은 npm build)

index.html을 타깃으로 LiveServer 실행
```

## 샘플 코드 설명
- [ ] TypeScript로 진행한 TodoList입니다.
- [ ] Webpack을 적용했습니다.
- [ ] Todo 데이터는 Store에서만 접근하도록 제한했습니다.
- [ ] Todo DOM 처리, Store 데이터와 동기화는 `todo` 폴더 각 파일에서 처리합니다.
```
├── 📂 public
│
├── 📂 src
│   ├── 📂 todo // Todo 컨트롤
│   ├── 📝 store.ts // Todo Data 관리
│   └── 📝 main.ts
└── 🛠 webpack.config, tsconfig, ...
```
