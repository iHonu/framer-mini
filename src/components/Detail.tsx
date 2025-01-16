import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { HTMLAttributes, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTextRevealAnimation } from '@/app/hooks/useTextRevealAnimation';
import { usePresence, motion } from 'motion/react';

interface DetailProps {
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImport;
  className?: string;
  rest?: HTMLAttributes<HTMLDivElement>;
}

export const Detail = ({
  title,
  subtitle,
  description,
  image,
  className,
  ...rest
}: DetailProps) => {
  const {
    scope: descriptionScope,
    descriptionExitAnimation: descriptionExitAnimation,
    descriptionAnimate: descriptionLineAnimate,
  } = useTextRevealAnimation();

  const {
    scope: titleScope,
    entranceAnimation: titleAnimate,
    exitAnimation: titleExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      titleAnimate().then(() => {
        descriptionLineAnimate();
      });
    } else {
      Promise.all([titleExitAnimation(), descriptionExitAnimation()]).then(
        () => {
          safeToRemove?.();
        }
      );
    }
  }, [
    descriptionLineAnimate,
    isPresent,
    safeToRemove,
    titleAnimate,
    titleExitAnimation,
    descriptionExitAnimation,
  ]);

  return (
    <div
      key={title}
      className={twMerge(
        'grid md:grid-cols-5 md:gap-8 lg:gap-12 md:items-center',
        className
      )}
      {...rest}
    >
      <div className=" aspect-square md:aspect-[9/16] md:col-span-2 relative">
        <motion.div
          className="absolute h-full bg-red-orange-500"
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          exit={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <Image src={image} alt={title} className="size-full object-cover" />
      </div>
      <div className="mt-8 md:mt-0 md:col-span-3">
        <div ref={titleScope}>
          <div className="text-4xl md:text-5xl lg:text-6xl">{title}</div>
          <div className="text-xl md:text-2xl mt-1 lg:mt-2 font-light text-stone-500">
            {subtitle}
          </div>
        </div>

        <div
          className="text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 lg:mt-10 block leading-2 overflow-hidden"
          ref={descriptionScope}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
