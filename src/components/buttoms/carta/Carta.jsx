import React from 'react';
import Button from 'react-bootstrap/Button';
import './carta.css';

function cartaDrive() {
  return (
    <Button 
      variant="primary"  // Establece el estilo del botón usando variantes de Bootstrap (ej: 'primary', 'secondary', 'success', etc.)
      href="https://drive.google.com/drive/folders/1iN194-t3VPy1n1i9vWF9FbGjjDoJvuOD"  // URL de la página de Instagram a la que redirige el botón
      target="_blank"  // Abre la página de Instagram en una nueva pestaña del navegador
      rel="noopener noreferrer"  // Mejora la seguridad y el rendimiento
      className='button-common'
    >
      Carta
    </Button>
  );
}

export default cartaDrive;