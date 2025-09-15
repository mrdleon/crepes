import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Booking.module.css';

const Booking = () => {
  return (
    <section id="booking" className={styles.bookingSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>KETENTUAN BOOKING AREA</h2>
          <p>Mumpung diareamu belum ada, segera gabung jadi mitra!</p>
        </div>
        <ol className={styles.termsList}>
          <li>Follow IG <strong>@box_crepes</strong>.</li>
          <li>Hubungi admin di nomor <strong>0897 9334 111</strong> untuk meminta proposal kemitraan.</li>
          <li>Pilih area yang masih tersedia.</li>
          <li>Melakukan booking dengan <strong>DP 50%</strong> sesuai pilihan paket.</li>
          <li>Melakukan pelunasan sebelum paket kami kirim.</li>
        </ol>
      </div>

      {/* Bagian Gambar*/}
      <div className={styles.imageSection}>
        <div className={styles.waveDivider}></div>
        <div className={styles.decorativeImage}>
          <Image
            src="/images/booth.png"
            alt="Ilustrasi paket kemitraan Box Crepes"
            width={800}
            height={600}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;