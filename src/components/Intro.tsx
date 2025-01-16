'use client';
import { useEffect } from 'react';
import { useInView } from 'motion/react';
import { useTextRevealAnimation } from '@/app/hooks/useTextRevealAnimation';

export const Intro = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      entranceAnimation();
    }
  }, [isInView, entranceAnimation]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20 " id="introduction">
      <div className=" container  ">
        <h2 className="text-3xl md:text-6xl lg:text-7xl " ref={scope}>
          We reconnect people with nature, by brewing beer with Dutch
          ingredients sourced from sustainable, nature-friendly farmers, and
          fermenting it with our signature wild yeast culture
        </h2>
      </div>
    </section>
  );
};
