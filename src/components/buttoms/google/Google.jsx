import React from 'react';
import Button from 'react-bootstrap/Button';
import './google.css'

function googleReseña() {
  return (
    <Button 
      variant="primary"  // Establece el estilo del botón usando variantes de Bootstrap (ej: 'primary', 'secondary', 'success', etc.)
      href="https://maps.app.goo.gl/oXLu7J1B8kL7p5Dn9"  // URL de la página de Instagram a la que redirige el botón
      target="_blank"  // Abre la página de Instagram en una nueva pestaña del navegador
      rel="noopener noreferrer"  // Mejora la seguridad y el rendimiento
      className='button-common'
    >
      Reseña de google
    </Button>
  );
}

export default googleReseña;