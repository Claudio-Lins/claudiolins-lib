import React, { InputHTMLAttributes, forwardRef, Ref } from 'react';
import { Lupa } from '../assets/Lupa';

export interface InputSimpleProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  search?: boolean;
  classNameInput?: string;
  className?: string;
}

export const InputSimple = forwardRef(
  (
    { label, id, search, classNameInput, className, ...rest }: InputSimpleProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div
        className={`relative rounded-md shadow-sm bg-transparent
    ${className}
    `}
      >
        <div
          className={`
        pointer-events-none absolute inset-y-0 left-0 flex items-center text-zinc-400 bg-transparent
        ${search ? 'flex pl-1' : 'invisible'}
      `}
        >
          <Lupa />
        </div>
        <input
          {...rest}
          ref={ref}
          className={`block w-full rounded-md border-0 py-1 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 bg-transparent
        ${!search && 'pl-2'}
        ${classNameInput}
        `}
        />
      </div>
    );
  }
);
