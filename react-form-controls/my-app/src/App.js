import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RegistrationFormUncontrolled />
          <RegistrationFormControlled />
        </div>
      </header>
    </div>
  );
}

export default App;
