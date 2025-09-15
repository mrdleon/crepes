import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css'; 

const Hero = () => {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="rounded-hexagon" clipPathUnits="objectBoundingBox">
            {/* hexagon*/}
            <path d="
              M0.45 0.04 
              Q0.50 0.00 0.55 0.04 
              L0.95 0.25 
              Q1.00 0.28 1.00 0.33 
              L1.00 0.67 
              Q1.00 0.72 0.95 0.75 
              L0.55 0.96 
              Q0.50 1.00 0.45 0.96 
              L0.05 0.75 
              Q0.00 0.72 0.00 0.67 
              L0.00 0.33 
              Q0.00 0.28 0.05 0.25 
              L0.45 0.04 
              Z
              ">
            </path>

          </clipPath>
        </defs>
      </svg>
      {/* ========================================================== */}

      <section id="home" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.imageAndLogoContainer}>
            <div className={styles.logoHexagon}>
              <Image
                src="/images/logocrepes1.jpg"
                alt="Logo Kreps Istimewa"
                width={100} 
                height={100}
              />
            </div>
            <div className={styles.imageHexagonWrapper}>
              <Image
                src="/images/awal2.jpg"
                alt="Aneka Varian Crepes Lezat"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.headline}>
              BOX CREPES <span>INDONESIA</span>
            </h1>
            <p className={styles.slogan}>
              #ManisGurihSemuaSuka<br/>
              #KrepsIstimewa
            </p>
            <div className={styles.ctaBlock}>
              <h2>PELUANG USAHA TERBAIK, TERJANGKAU & TERLARIS!!</h2>
              <div className={styles.socials}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com/box_crepes" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <i className="fab fa-instagram"></i> 
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <i className="fab fa-tiktok"></i> @box_crepes
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <i className="fas fa-globe"></i> www.crepes.my.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;