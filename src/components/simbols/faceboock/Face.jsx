import React from "react";
import Button from 'react-bootstrap/Button';
import { FaFacebook } from "react-icons/fa";

function facebook() {
    return (
        <Button 
            variant="prymary"
            href="https://www.facebook.com/JustinBieber/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                padding: 0,
                border: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none'
            }}
        >
        <FaFacebook style={{ color: '#E1306C', fontSize: '2rem' }} />   
        </Button>
    );
}

export default facebook