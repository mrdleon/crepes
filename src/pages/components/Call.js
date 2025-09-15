// src/components/Call.js

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Call.module.css';

const Call = () => {
  return (
    <section id="call" className={styles.callSection}>
      <div className={styles.container}>
        {/* Gambar asli ditampilkan di sini */}
        <div className={styles.callImage}>
          <Image
            src="/images/ko.jpg" // Path ke gambar Anda
            alt="Promo Box Crepes"
            width={1200} // Lebar asli gambar
            height={600} // Tinggi asli gambar
            layout="responsive"
          />
        </div>

        {/* Kontainer teks yang akan menumpuk di atas gambar */}
        <div className={styles.textOverlay}>
          <h2 className={styles.headline}>
            PENGEN BUKA USAHA NGGA USAH MULAI DARI NOL. <br /> SUSAH!!
          </h2>
          <h2 className={styles.headline}>
            BOX CREPES UDAH BIKININ SISTEMNYA, TINGGAL JALAN AJA!!
          </h2>
          <h3 className={styles.subheading}>
            {/* Segera Hubungi <br /> Admin Kami !! */}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Call;