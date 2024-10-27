import React, { useState } from 'react';  
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './historia.css';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='button-common'>
        Nuestra Historia
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Nuestra Historia</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Yo vagaba mucho tiempo en el error,  
          Agobiado en el pecado y el temor;  
          Cuando vi al Salvador y escuché su tierna voz,  
          Mi Señor me hizo libre por su amor.
          Coro:  
          Libre estoy, libre estoy,  
          Por la gracia del Señor libre estoy.  
          Libre estoy, libre estoy,  
          ¡Aleluya, por la fe libre estoy!
          Yo vagaba mucho tiempo en el error,  
          Sin pensar en el amor del Salvador,  
          Yo andaba con temor, lejos de mi Redentor,  
          ¡Mas ahora por su muerte libre estoy!
          Yo vagaba mucho tiempo en el error,  
          Mas ahora quiero andar con mi Señor,  
          Quiero oír su tierna voz, y seguirle siempre en pos,  
          ¡Gloria, gloria sea a nuestro buen Pastor!
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      <OffCanvasExample placement="bottom" name="Nuestra Historia" />
    </>
  );
}

export default Example;

