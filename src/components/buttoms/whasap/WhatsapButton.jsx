import React from 'react';
import Button from 'react-bootstrap/Button';
import './buttoms.css'

function WhatsAppButton() {
    const phoneNumber = '5492616793263'; // Reemplaza con el número del cliente, incluyendo el código de país

    return (
     <Button 
        variant="primary"  // Establece el estilo del botón usando variantes de Bootstrap (ej: 'primary', 'secondary', 'success', etc.)
        href={`https://wa.me/${phoneNumber}`}  // URL de la página de Instagram a la que redirige el botón
        target="_blank"  // Abre la página de Instagram en una nueva pestaña del navegador
        rel="noopener noreferrer"  // Mejora la seguridad y el rendimiento
        className='button-common'
        >
       Reserva
     </Button>
    );
}

export default WhatsAppButton;