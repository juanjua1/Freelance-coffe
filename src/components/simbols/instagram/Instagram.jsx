import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaInstagram } from 'react-icons/fa';

function InstagramButton() {
   return (
     <Button 
       variant="primary"  // Establece el estilo del botón usando variantes de Bootstrap (ej: 'primary', 'secondary', 'success', etc.)
       href="https://www.instagram.com/cumbre.cafebar/?hl=es"  // URL de la página de Instagram a la que redirige el botón
        target="_blank"  // Abre la página de Instagram en una nueva pestaña del navegador
        rel="noopener noreferrer"  // Mejora la seguridad y el rendimiento
       style={{ 
         padding: 0, 
         border: 'none', 
          backgroundColor: 'transparent',  // Asegura que el fondo sea transparente
          boxShadow: 'none'  // Elimina cualquier sombra que pueda dar la impresión de fondo
        }}
      >
      <FaInstagram style={{ color: '#2F4F4F', fontSize: '2rem' }} />
    </Button>
  );
}

export default InstagramButton;