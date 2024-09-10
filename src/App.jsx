import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import His from './components/buttoms/historia/Historia';
import Insta from './components/simbols/instagram/Instagram';
import Fac from './components/simbols/faceboock/Face';
import Reseña from './components/buttoms/google/Google';
import DigCart from './components/buttoms/carta/Carta';
import Reserva from './components/buttoms/whasap/WhatsapButton';
import Warapp from './components/simbols/warap/WhatsapIcons';
import image from './assets/Cafeteria-Cumbre.jpeg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div>
        /<img src={image} alt="Cafeteria" className='header-image'/>
      </div>
      <div className="header">
        <Insta />
        <Warapp />
        <Fac />
      </div>
      <div className="main">
        <DigCart />
        <Reseña />
        <Reserva />
        <His />
      </div>
    </div>
  )
}

export default App

