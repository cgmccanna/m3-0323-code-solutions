import './App.css';
import ValidatedInput from './ValidatedInput.js';
import './ValidatedInput.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ValidatedInput icon={'fa-xmark'}/>
        </div>
      </header>
    </div>
  );
}

export default App;
