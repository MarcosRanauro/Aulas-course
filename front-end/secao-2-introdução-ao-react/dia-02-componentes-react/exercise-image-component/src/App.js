import Image from './Image';
import './App.css'
import cat from './cat.jpg'

function App() {
  return (
    <Image source={ cat } alternativeText="Cute cat staring" />
  );
}

export default App;
