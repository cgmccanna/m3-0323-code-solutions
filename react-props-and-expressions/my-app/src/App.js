import './App.css';
import CustomButton from './CustomButton';
import './CustomButton.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CustomButton text="I" color="blue" />
          <CustomButton text="Know" color="red" />
          <CustomButton text="React!" color="green" />
        </div>
      </header>
    </div>
  );
}

export default App;
