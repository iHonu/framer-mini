import { Details } from '@/components/Details';
import { Hero } from '../components/Hero';
// import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { SelectedBeers } from '../components/SelectedBeers';
import { Shops } from '../components/Shops';
import { FAQs } from '../components/FAQs';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Intro />
      <SelectedBeers />
      <Shops />
      <Details />
      <FAQs />
      <Footer />
    </>
  );
}
