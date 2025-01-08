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
        'inline-flex h-11 px-6 rounded-xl items-center border gap-2 uppercase ',
        variant === 'primary' &&
          'bg-red-orange-500 text-white border-red-orange-500',
        variant === 'secondary' && 'border-red-orange-500 ',
        variant === 'text' && 'h-auto px-0 border-transparent',
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};
