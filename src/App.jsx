import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import His from './components/buttoms/historia/Historia';
import Insta from './components/simbols/instagram/Instagram';
import Fac from './components/simbols/faceboock/Face';
import Reseña from './components/buttoms/google/Google';
import DigCart from './components/buttoms/carta/Carta'; // Aquí está el botón de la carta
import Reserva from './components/buttoms/whasap/WhatsapButton';
import Warapp from './components/simbols/warap/WhatsapIcons';
import image from './assets/cumbre.jpeg';
import Image from 'react-bootstrap/Image';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="image-container">
        <Image src={image} alt="Cafeteria" fluid className="header-image" />
      </div>

      <div className="header d-flex justify-content-around my-3">
        <Insta />
        <Warapp />
        <Fac />
      </div>

      <div className="main">
        <DigCart className="button-full-width" />
        <Reseña className="button-full-width" />
        <Reserva className="button-full-width" />
        <His className="button-full-width" />
      </div>
    </div>
  );
}

export default App;
