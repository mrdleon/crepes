import Layout from './components/Layout';
import '@/styles/globals.css';
import { Playfair_Display, Montserrat, Nunito } from 'next/font/google';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import Head from 'next/head';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-heading',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-nunito',
});


function MyApp({ Component, pageProps }) {
  
  useSmoothScroll();

  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Head>

      <main className={`${playfairDisplay.variable} ${montserrat.variable} ${nunito.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default MyApp;