// src/components/WhatsappButton.js

import React from 'react';
import styles from '@/styles/WhatsappButton.module.css'; 
const WhatsappButton = () => {
  return (
    <a
      href="#" 
      className={styles.floatingWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat di WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;