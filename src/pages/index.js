import Head from 'next/head';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Call from './components/Call';
import Investment from './components/Investment';
// import InvestmentV2 from './components/InvestmentV2';
import Package from './components/Package';
import Booking from './components/Booking';
import SlideIn from './components/SlideIn';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Box Crêpes - Setiap Lipatan Penuh Rasa</title>
        {/* ... meta tag lain ... */}
      </Head>

      <Hero /> 

      <AboutUs />

      <Features />
      
      <SlideIn direction="right">
        <Call />
      </SlideIn>
      
      <SlideIn direction="up">
        <Investment />
      </SlideIn>

      <SlideIn direction="left">
        <Package />
      </SlideIn>

      <SlideIn direction="right">
        <Booking />
      </SlideIn>
    </>
  );
}