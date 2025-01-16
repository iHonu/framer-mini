'use client';

import { faqs } from '@/data/faqs';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const FAQs = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  return (
    <section className="section section-x-margin" id="faqs">
      <div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if (selectedQuestion === index) {
                  setSelectedQuestion(null);
                } else {
                  setSelectedQuestion(index);
                }
              }}
            >
              <div
                className={twMerge(
                  'absolute h-0 w-full bg-stone-300 -z-10 group-hover/faq:h-full bottom-0 left-0 transition-all duration-500 ease-in-out',
                  index === selectedQuestion && 'h-full'
                )}
              ></div>
              <div
                className={twMerge(
                  'flex items-center justify-between gap-4 transition-all duration-500 ease-in-out group-hover/faq:lg:px-8',
                  index === selectedQuestion && 'lg:px-8'
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    'inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-transform duration-500 ease-in-out',
                    selectedQuestion === index && 'rotate-45'
                  )}
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {selectedQuestion === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-lg md:text-xl lg:text-2xl overflow-hidden lg:px-8"
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
