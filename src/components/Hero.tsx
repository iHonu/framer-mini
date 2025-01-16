'use client';

import Image from 'next/image';
import heroImage from '../../public/hero.jpg';
import { Button } from './ui/Button';
import { useTextRevealAnimation } from '@/app/hooks/useTextRevealAnimation';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end end'],
  });

  const imageWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);

  const { scope, entranceAnimation } = useTextRevealAnimation();

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              ref={scope}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
            >
              Wild and sour beers brewed with sustainable, 100% Dutch
              ingredients.
            </motion.h1>
            <div className="flex flex-col md:flex-row mt-10 items-start md:items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.5 }}
              >
                <Button
                  variant="secondary"
                  className="group"
                  iconRight={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover:-translate-x-1/2 transition-transform duration-300 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>Beers</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
              >
                <Button variant="text">Contact</Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: imageWidth }}
          >
            <Image
              className="size-full object-cover"
              src={heroImage}
              alt="Beer and Grain"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-[100vh]" ref={scrollRef}></div>
    </section>
  );
};
