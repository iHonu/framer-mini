import { useEffect } from 'react';
import { stagger, useAnimate } from 'framer-motion';
import SplitType from 'split-type';

export const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.log('Splitting text:', scope.current);
    new SplitType(scope.current, {
      types: 'lines,words',
      tagName: 'span',
    });
  }, [scope, animate]);

  const entranceAnimation = () => {
    return animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(0)',
      },
      {
        duration: 0.3,
        delay: stagger(0.2),
      }
    );
  };

  const exitAnimation = () => {
    return animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(100%)',
      },
      {
        duration: 0.2,
        delay: stagger(-0.1, {
          startDelay: scope.current.querySelectorAll('.word').length * 0.1,
        }),
      }
    );
  };

  const descriptionAnimate = () => {
    return animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(0)',
        opacity: [0, 1],
      },
      {
        duration: 0.3,
      }
    );
  };

  const descriptionExitAnimation = () => {
    return animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(100%)',
        opacity: [1, 0],
      },
      { duration: 0.3 }
    );
  };

  return {
    scope,
    entranceAnimation,
    exitAnimation,
    descriptionAnimate,
    descriptionExitAnimation,
  };
};
