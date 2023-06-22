import React, { InputHTMLAttributes } from 'react';

export interface InputFloatLabelUnderlineProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  isValid?: boolean;
}

export function InputFloatLabelUnderline({
  label,
  name,
  isValid,
  ...rest
}: InputFloatLabelUnderlineProps) {
  return (
    <label
      htmlFor={name || 'UserEmail'}
      className={`relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600
      
      `}
    >
      <input
        type="email"
        placeholder="Email"
        {...rest}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span
        className={`
        absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all flex items-center gap-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs
        ${isValid && 'text-green-500'}
        `}
      >
        {label}
        {isValid && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#05bb24"
            viewBox="0 0 256 256"
          >
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
          </svg>
        )}
      </span>
    </label>
  );
}
