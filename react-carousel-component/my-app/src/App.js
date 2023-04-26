import './App.css';
import Carousel from './Carousel';

const images = [
  {
    name: 'Charmander',
    src: 'https://i.insider.com/57910997dd0895a56e8b4570?width=600&format=jpeg&auto=webp',
    id: 1
  },
  {
    name: 'Bulbosaur',
    src: 'https://i.insider.com/57910997dd0895a56e8b456d?width=600&format=jpeg&auto=webp',
    id: 2
  },
  {
    name: 'Wartortle',
    src: 'https://i.insider.com/57910997dd0895a56e8b4574?width=600&format=jpeg&auto=webp',
    id: 3
  },
  {
    name: 'Nidorina',
    src: 'https://i.insider.com/57910997dd0895a56e8b458a?width=600&format=jpeg&auto=webp',
    id: 4
  },
  {
    name: 'Nidoran',
    src: 'https://i.insider.com/57910997dd0895a56e8b4589?width=600&format=jpeg&auto=webp',
    id: 5
  },
  {
    name: 'Nidoqueen',
    src: 'https://i.insider.com/57910997dd0895a56e8b458b?width=600&format=jpeg&auto=webp',
    id: 6
  }
]

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
