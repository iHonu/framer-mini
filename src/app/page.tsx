import { Hero } from '../components/Hero';
// import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { SelectedBeers } from '../components/SelectedBeers';
import { Shops } from '../components/ui/Shops';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Intro />
      <SelectedBeers />
      <Shops />
    </>
  );
}
