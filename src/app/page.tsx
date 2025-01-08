import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { SelectedBeers } from './components/SelectedBeers';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <SelectedBeers />
    </>
  );
}
