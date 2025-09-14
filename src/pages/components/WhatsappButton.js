// src/components/WhatsappButton.js

import React from 'react';
import styles from '@/styles/WhatsappButton.module.css'; // Kita akan buat file CSS ini

const WhatsappButton = () => {
  return (
    <a
      href="#" // <-- GANTI DENGAN NOMOR WA ANDA
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