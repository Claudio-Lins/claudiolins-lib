import React, { InputHTMLAttributes } from 'react';

export interface InputSimpleProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

export function InputSimple({ label, id, ...rest }: InputSimpleProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        {...rest}
        className="w-full rounded-md border-gray-200 px-3 py-2 shadow-sm sm:text-sm"
      />
    </div>
  );
}
