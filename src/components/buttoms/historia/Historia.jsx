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
        Cumbre Café Bar es una empresa familiar, reconocida por la calidad de sus productos y una atención excepcional. Después de visitar numerosos lugares de comida y bares, decidimos emprender nuestro propio negocio con el objetivo de ofrecer todo aquello que nos apasionaba y crear un espacio de encuentro con un ambiente acogedor y una carta de excelencia.

Hemos llegado hasta aquí gracias al apoyo de tantas personas que creyeron en nuestros sueños tanto como nosotros. Nuestros padres e hijos han sido una fuente constante de motivación para seguir adelante.

Por todo esto, creamos Cumbre... pero sabemos que esta no es nuestra última cima por alcanzar.
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

