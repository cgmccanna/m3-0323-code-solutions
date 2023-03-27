import CustomButton from './CustomButton';
import './App.css';

function App() {
  function handleCustomClick(text, color) {
    alert(`Clicked ${color} '${text}' button`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CustomButton text="These" color="pink" onCustomClick={handleCustomClick} />
          <CustomButton text="Are" color="orange" onCustomClick={handleCustomClick} />
          <CustomButton text="Buttons" color="yellow" onCustomClick={handleCustomClick} />
        </div>
      </header>
    </div>
  );
}

export default App;
