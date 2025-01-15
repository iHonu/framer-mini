'use client';
import { useEffect } from 'react';
import { useInView, useAnimate, stagger } from 'motion/react';
import SplitType from 'split-type';

export const Intro = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    new SplitType(scope.current.querySelector('h2'), {
      types: 'lines,words',
      tagName: 'span',
    });
  }, [scope]);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current.querySelectorAll('.word'),
        {
          y: [50, 0],
          opacity: [0, 1],
        },
        {
          delay: stagger(0.2),
          duration: 0.5,
        }
      );
    }
  }, [animate, isInView, scope]);

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20 "
      id="introduction"
      ref={scope}
    >
      <div className=" container  ">
        <h2 className="text-3xl md:text-6xl lg:text-7xl ">
          We reconnect people with nature, by brewing beer with Dutch
          ingredients sourced from sustainable, nature-friendly farmers, and
          fermenting it with our signature wild yeast culture
        </h2>
      </div>
    </section>
  );
};
