## 01. vite-config

```
import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [reactPlugin()],
  server: {
    host: "localhost",
    port: 3000,
  },
});

```

## 리뷰

- defineConfig : vite의 설정을 정의하고 객치를 반환하며 속성을 통해 다양한 옵션을 제공.
- plugins : 플러그인을 지정하는 배열.
  - @vitejs/plugin-react
- server : 서버의 주소는 3000번
- host : host서버의 호스트를 localhost로 설정

## 02. main.jsx

```
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);

```

## 리뷰

- react-dom/client모듈에서 createRoot함수를 가져온다. root라는 엘리먼트ID를 가져와 App컴포넌트를 렌더링을 한다.
- 이를 통해 애플리케이션의 UI가 표시되고 상호작용할 수 있게 된다.

## 03. App.jsx

```
import reactLogoPath from "./assets/ReactLogo.svg";

function App() {
  return (
    <div>
      <h1 className="headline">React is Awesome!</h1>
      <h2>정적 에셋</h2>
      <p>
        정적 에셋은 public폴더의 절대경로에 넣는 것이다. 서비스측에서 변경사항이
        없는 것(저장한거 재사용함)
      </p>
      <img src="/ReactLogo.svg" alt="React Logo" />
      <h2>동적 에셋</h2>
      <p>
        동적 에셋은 src의 경로에 들어가는 것이다. 서비스측에서 변경이 찾은 것을
        사용하는 것(다시 로드함)
      </p>
      <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
        <img src={reactLogoPath} alt="리액트 홈" />
      </a>
    </div>
  );
}
export default App;

```

## 리뷰

- App이라는 컴포넌트를 만드는 코드이다. App을 default로 export하면 기본으로 다른 곳에서 import를 할 수 있다.
- App 컴포넌트가 반환하는 html코드를 return하는 형식으로 react의 document를 이용하여 하드코딩하는 방식보다 편리하고 익숙한 느낌이다.
- Asset
  - 동적에셋은 말 그대로 소스파일의 수정이 잦은 경우에 사용하며 public이 아닌 src안에 담는다.
  - 정적에셋은 말 그대로 변하지 않는 에셋은 한번 소스로 고정시키면 수정이 생기지 않을 때 사용한다.

## React와 vite

- React
  - jsx는 React에서 사용되는 자바스크립트의 확장 문법이다. 겉보기엔 자바스크립트 파일이지만 HTML과 유사한 문법을 사용하여 컴포넌트의 구조를 정의할 수 있다.;
  - jsx파일은 컴포넌트 계층 구조를 나타내기 위해 태그를 중첩하거나 속성을 이용하여 컴포넌트에 데이터를 전달할 수 있다.
    - 자바스크립트 표현식을 {}로 감싸서 동적인 데이터나 변수를 jsx안에 삽입하거나 조건부로 렌더링할 수 있다.
- Vite
  - ES모듈을 기반으로 번들링 방식을 사용하여 개발 서버의 시작 속도를 크게 향상시킨다. 또한 실시간 모듈 리로딩이 가능하여 코드를 변경하면 즉시 반영되어 편리한 점이 있다.
  - React프로젝트에서 vite를 사용하면 빠르고 효율적인 선택이 될 수 있다.
