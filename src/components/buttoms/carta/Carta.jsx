import React from 'react';
import Button from 'react-bootstrap/Button';
import './carta.css';

function Carta({ className }) {
  return (
    <Button
      variant="primary"
      href="https://drive.google.com/drive/folders/1iN194-t3VPy1n1i9vWF9FbGjjDoJvuOD"
      target="_blank"
      rel="noopener noreferrer"
      className={`button-common ${className}`} /* Aplicamos la clase que viene como prop */
    >
      Carta
    </Button>
  );
}

export default Carta;
