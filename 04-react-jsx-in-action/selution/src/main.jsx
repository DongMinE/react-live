import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';

const rootElement = document.getElementById('root');

// [개발 모드 활성 : React에서 컴포넌트의 순수함을 확인하는 방법]
// 참고: https://react.dev/reference/react/StrictMode
// INPUT (props) -> COMPONENT -> OUTPUT (JSX) ⌝
//                                         동일해야 함
// INPUT (props) -> COMPONENT -> OUTPUT (JSX) ⌟

createRoot(rootElement).render(
  // StrictMode : 순수한가 순수하지 않은가??
  // 함수 컴포넌트가 순수한지는 어떻게 체크함?
  // 렌더링을 두번 해서 같은 아웃풋인지
  <StrictMode>
    <App />
  </StrictMode>
);
