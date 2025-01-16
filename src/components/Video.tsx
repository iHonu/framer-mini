'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Video() {
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.3], [1.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-auto  md:h-[200vh]" id="video-section">
      <div ref={videoRef} className="sticky top-0  md:h-screen overflow-hidden">
        <motion.div
          className="relative md:w-full md:h-full"
          style={{
            opacity,
            scale,
          }}
        >
          {isInView && (
            <>
              <video
                src="/video.m4v"
                autoPlay
                muted
                loop
                className="md:w-full md:h-full object-cover  aspect-video md:aspect-auto"
              />
              <div className="absolute inset-0 bg-black/30" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
