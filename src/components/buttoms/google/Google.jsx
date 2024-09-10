import React from 'react';
import Button from 'react-bootstrap/Button';
import './google.css'

function googleReseña() {
  return (
    <Button 
      variant="primary"  // Establece el estilo del botón usando variantes de Bootstrap (ej: 'primary', 'secondary', 'success', etc.)
      href="https://www.google.com/maps/place/Comercial+AGIRA/@-32.8501103,-68.84657,21z/data=!4m6!3m5!1s0x967e0885545d8ca5:0xd5ee3fb6088f07c4!8m2!3d-32.849958!4d-68.84687!16s%2Fg%2F11b77dhvk1?entry=ttu"  // URL de la página de Instagram a la que redirige el botón
      target="_blank"  // Abre la página de Instagram en una nueva pestaña del navegador
      rel="noopener noreferrer"  // Mejora la seguridad y el rendimiento
      className='button-common'
    >
      Reseña de google
    </Button>
  );
}

export default googleReseña;