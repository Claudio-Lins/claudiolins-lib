import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  isValid?: boolean;
}

export function InputFloatLabel({ label, name, isValid, ...rest }: InputProps) {
  return (
    <label
      htmlFor={name || 'UserEmail'}
      className={`relative block overflow-hidden rounded-md border border-zinc-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600
      
      `}
    >
      <input
        type="email"
        id="UserEmail"
        placeholder="Email"
        name={name || 'UserEmail'}
        {...rest}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span
        className={`
        absolute start-3 top-3 -translate-y-1/2 text-[10px] gap-1 text-zinc-700 transition-all flex items-center peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs
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
