// src/components/Benefits.js

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Benefits.module.css';

const Benefits = () => {
  return (
    <section id="benefits" className={styles.benefitsSection}>
      <div className={styles.container}>
        
        {/* Logo berdampingan */}
        <div className={styles.logosContainer}>
          <Image src="/images/logocrepes.jpg" alt="Logo Box Crepes" width={100} height={100} />
          <Image src="/images/halal-seeklogo.png" alt="Logo Halal" width={80} height={130} />
        </div>

        {/* Daftar Keuntungan (dengan konten baru) */}
        <div className={styles.benefitsList}>
          <h3 className={styles.subHeadline}>
            ADA LEBIH DARI 15 SISTEM & STANDAR OPERASIONAL PROSEDUR YANG KAMI BERIKAN
          </h3>
          <p className={styles.introText}>Spill dikit nih yaa..</p>
          
          <div className={styles.benefitItem}>
            <div className={styles.coinIcon}>
              <Image src="/images/gold.png" alt="Koin" width={50} height={50} />
            </div>
            <span>1. SOP Pelayanan customer</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.coinIcon}>
              <Image src="/images/gold.png" alt="Koin" width={50} height={50} />
            </div>
            <span>2. SOP Troubleshooting</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.coinIcon}>
              <Image src="/images/gold.png" alt="Koin" width={50} height={50} />
            </div>
            <span>3. SOP Monitoring karyawan</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.coinIcon}>
              <Image src="/images/gold.png" alt="Koin" width={50} height={50} />
            </div>
            <span>4. Cara mencari lokasi jualan yang bagus</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.coinIcon}>
              <Image src="/images/gold.png" alt="Koin" width={50} height={50} />
            </div>
            <span>5. Laporan Keuangan</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.coinIcon}>
              <Image src="/images/gold.png" alt="Koin" width={50} height={50} />
            </div>
            <span>6. Cara merekrut karyawan dan spesifikasi karyawan yang kompeten</span>
          </div>
          <p className={styles.outroText}>Dan masih banyak lagi...</p>
        </div>

      </div>
    </section>
  );
};

export default Benefits;