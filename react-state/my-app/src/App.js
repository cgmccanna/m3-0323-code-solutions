import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ToggleButton text="button 1" color="purple" />
          <ToggleButton text="button 2" color="orange" />
          <ToggleButton text="button 3" color="yellow" />
        </div>
      </header>
    </div>
  );
}

export default App;
