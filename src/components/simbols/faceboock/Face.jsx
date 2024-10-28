import React from "react";
import Button from 'react-bootstrap/Button';
import { FaFacebook } from "react-icons/fa";

function facebook() {
    return (
        <Button 
            variant="prymary"
            href="https://maps.app.goo.gl/FSyhVQ3vrXh5e8Eg9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                padding: 0,
                border: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none'
            }}
        >
        <FaFacebook style={{ color: '#2F4F4F', fontSize: '2rem' }} />   
        </Button>
    );
}

export default facebook