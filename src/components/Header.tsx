'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react';
import { motion, useAnimate } from 'motion/react';
import { navItems } from '@/data/navItems';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, animateTopLine] = useAnimate();
  const [bottomLineScope, animateBottomLine] = useAnimate();
  const [navScope, animateNav] = useAnimate();

  const handelClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const targetElement = document.querySelector(hash);

    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      animateTopLine([
        [topLineScope.current, { y: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      animateBottomLine([
        [bottomLineScope.current, { y: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
      animateNav(navScope.current, { height: '100vh' });
    } else {
      animateTopLine([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { y: 0 }],
      ]);
      animateBottomLine([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { y: 0 }],
      ]);
      animateNav(navScope.current, { height: '0' });
    }
  }, [
    animateBottomLine,
    animateTopLine,
    bottomLineScope,
    isOpen,
    topLineScope,
    navScope,
    animateNav,
  ]);

  const handleContactClick = () => {
    window.location.href = 'mailto:info@nevel.org?subject=Contact Request';
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-stone-900  h-20 z-30">
      <div
        className="absolute top-0 left-0 w-full h-20 bg-stone-900 overflow-hidden z-30"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col gap-4">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="border-t last:border-b py-8 border-stone-800 group/nav-item relative isolate text-stone-200 "
              onClick={handelClickNavItem}
            >
              <div className="container !max-w-full flex items-center justify-between ">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-red-orange-500 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-20"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="container  !max-w-full z-30">
        <div className="flex justify-between items-center h-20 backdrop:blur-md ">
          <div className="">
            <Link
              href="/"
              className="text-xl font-bold uppercase flex items-center justify-center gap-2 text-stone-200"
            >
              <div className="size-8 border border-stone-200 rounded-full flex items-center justify-center">
                <img src="./logo.svg" className="size-6" />
              </div>
              <span>Nevel</span>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <Button
              variant="primary"
              className=" hidden md:inline-flex z-30 "
              onClick={handleContactClick}
            >
              Contact us
            </Button>
            <div
              className="size-11 border border-stone-300 bg-stone-200 rounded-full flex items-center justify-center relative z-30"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={topLineScope}
                className="absolute"
                style={{ transformOrigin: '12px 8px' }}
              >
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </motion.svg>
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={bottomLineScope}
                className="absolute"
                style={{ transformOrigin: '12px 16px' }}
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
