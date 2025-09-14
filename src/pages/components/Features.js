import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Features.module.css';

const Features = () => {
  return (
    
    <div className={styles.featuresSectionWrapper}>
      <section id="features" className={styles.featuresSection}>
        <div className={styles.contentContainer}>
          
          <div className={styles.topBlock}>
            <div className={styles.bannerContainer}>
              <Image
                src="/images/gabung.png" 
                alt="Varian Produk Box Crepes"
                width={450}
                height={300}
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
              <div className={styles.halalLogo}>
                <Image 
                  src="/images/halal-seeklogo.png"
                  alt="Logo Halal"
                  width={80}
                  height={130}
                />
              </div>
            </div>

            <h2 className={styles.headline}>GABUNG SEKARANG</h2>
            <p className={styles.subheading}>
              Dapatkan berbagai benefit dan free bahan baku diawal <br/>
            </p>
          </div>

          <div className={styles.bottomBlock}>
            <div className={styles.productImage}>
              <Image
                src="/images/maskot.png"
                alt="Produk Unggulan Box Crepes"
                width={650}
                height={450}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.headline}>DEDIKASI KAMI UNTUK MITRA</h2>
              <p className={styles.subheading}>
                Kami berdedikasi membuat usaha yang murah namun berkualitas, tersistem dapat dipantau dengan mudah oleh mitra dan tanpa ada pemotongan biaya apapun sepenuhnya milik mitra.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <div className={styles.lowerContentWrapper}>
        <div className={styles.royaltyBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.headlineDark}>BEBAS ROYALTY FREE</h2>
            <p className={styles.subheadingDark}>
              Keuntungan <b>100%</b> milik mitra.
            </p>
          </div>
          <div className={styles.halalLogoSide}>
            <Image src="/images/halal-seeklogo.png" alt="Logo Halal" width={80} height={130} />
          </div>
        </div>

        <div className={styles.productBlock}>
          <div className={styles.productImage}>
            <Image
              src="/images/ko.png" 
              alt="Produk Unggulan Box Crepes"
              width={350}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '20px' }}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.headlineDark}>
              SOP LENGKAP, JELAS <br /> DAN TERTATA
            </h2>
            <p className={styles.subheadingDark}>
              Standar operasional prosedur mudah diikuti dan dijalankan.
            </p>
          </div>
        </div>


         <div className={styles.productBlock}>
          
          <div className={styles.textContent}>
            <h2 className={styles.headlineDark}>
              DESIGN BOOTH YANG <br /> EYE CATCHING & MUDAH <br /> DIPINDAHKAN
            </h2>
            <p className={styles.subheadingDark}>
              Booth yang mudah dibawa kemana aja dan ringkas untuk penyimpanan barang.
            </p>
          </div>

          <div className={styles.productImage}>
            <Image
              src="/images/booth.png" 
              alt="Produk Unggulan Box Crepes"
              width={350}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '20px' }}
            />
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Features;