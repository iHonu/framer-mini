'use client';

import { details } from '@/data/details';
import { useScroll, motion, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Detail } from './Detail';
import { AnimatePresence } from 'motion/react';

export const Details = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const [detailsIndex, setDetailsIndex] = useState(0);

  const handleClickPrevious = () => {
    setDetailsIndex((prev) => {
      if (prev === 0) return details.length - 1;
      return prev - 1;
    });
  };

  const handleClickNext = () => {
    setDetailsIndex((prev) => {
      if (prev === details.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <section className="section section-x-margin" id="details">
      <h2
        ref={titleRef}
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
          What makes us unique
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{ x: transformBottom }}
        >
          What makes us unique
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 ">
          <AnimatePresence mode="wait" initial={false}>
            {details.map(
              ({ title, subtitle, description, image }, index) =>
                index === detailsIndex && (
                  <Detail
                    key={title}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    image={image}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex  gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-colors duration-300"
            onClick={handleClickPrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-colors duration-300"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
