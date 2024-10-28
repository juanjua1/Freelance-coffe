import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppIcon() {
  const phoneNumber = '5492616793263'; // Reemplaza con el número del cliente, incluyendo el código de país

  return (
    <Button 
      className="whatsapp-button"  // Aplica una clase CSS personalizada
      href={`https://wa.me/${phoneNumber}`}  // URL de WhatsApp para enviar mensaje
      target="_blank" 
      rel="noopener noreferrer"
      style={{ 
        padding: 0, 
        border: 'none', 
        backgroundColor: 'transparent',  // Asegura que el fondo sea transparente
        boxShadow: 'none'  // Elimina cualquier sombra que pueda dar la impresión de fondo
      }}
    >
      <FaWhatsapp style={{ color: '#2F4F4F', fontSize: '2rem' }} />  {/* Color y tamaño del icono */}
    </Button>
  );
}

export default WhatsAppIcon;