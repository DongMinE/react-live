import { DescriptionList } from '../components';
import ScrollButton, { ScrollButtonGroup } from '../components/ScrollButton/ScrollButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React 컴포넌트 &amp; Props</h1>

      <hr />

      <DescriptionList />

      <ScrollButtonGroup>
        <ScrollButton />
        <ScrollButton />
      </ScrollButtonGroup>
    </div>
  );
}

export default App;
