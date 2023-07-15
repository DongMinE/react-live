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
