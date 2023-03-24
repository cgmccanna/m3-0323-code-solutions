import './App.css';
import CustomButton from './CustomButton';
import './CustomButton.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CustomButton text="I" color="blue"></CustomButton>
          <CustomButton text="Know" color="red"></CustomButton>
          <CustomButton text="React!" color="green"></CustomButton>
        </div>
      </header>
    </div>
  );
}

export default App;
