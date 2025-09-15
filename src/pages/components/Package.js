// src/components/Package.js

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Package.module.css';

const Package = () => {
  return (
    <section id="package" className={styles.packageSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Promo <br /> Paket Portable
          </h2>
          {/* <div className={styles.dashedLine}></div> <-- HAPUS BARIS INI */}
        </div>
        
        <div className={styles.imageWrapper}>
          <Image
            src="/images/boots.png"
            alt="Promo Paket Portable franchise Box Crêpes, termasuk booth, peralatan lengkap, dan bahan baku awal."
            width={600}
            height={600} 
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <div className={styles.dots_border}></div>
                <span className={styles.text_button}>Gabung Sekarang!</span>
              </button>
      </div>
    </section>
  );
};

export default Package;