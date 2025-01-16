import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button = (
  props: {
    variant?: 'primary' | 'secondary' | 'text';
    iconRight?: React.ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, className, variant, iconRight, ...rest } = props;
  return (
    <button
      className={twMerge(
        'inline-flex h-11 px-6 rounded-xl items-center border gap-2 uppercase border-red-orange-500 transition duration-300 relative group',
        variant === 'primary' &&
          'bg-red-orange-500 text-white hover:bg-stone-200 hover:text-stone-800 hover:border-stone-200  transition-all duration-300 ease-in-out',
        variant === 'secondary' && 'hover:bg-red-orange-500 hover:text-white ',
        variant === 'text' &&
          'h-auto px-0 border-transparent after:content-[" "] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full after:transition-all after:duration-300',
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};
