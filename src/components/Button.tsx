import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  variants?: 'primary' | 'secondary' | 'tertiary' | 'neutral';
}

export function Button({
  disabled,
  className,
  children,
  variants,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        px-3 py-1 rounded-lg flex items-center gap-2
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${variants === 'primary' &&
          'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2'}
        ${variants === 'secondary' &&
          'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2'}
        ${variants === 'tertiary' && 'bg-red-500'}
        ${variants === 'neutral' && 'p-2 border hover:shadow-sm hover:border-2'}
        ${className}
        `}
      {...rest}
    >
      {children}
    </button>
  );
}
