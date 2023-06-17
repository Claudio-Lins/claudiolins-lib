import React, { InputHTMLAttributes } from 'react';

export interface ToggleSimpleProps
  extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  id?: string;
}

export function ToggleSimple({ htmlFor, id }: ToggleSimpleProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="relative h-8 w-14 cursor-pointe bg-pink-500r"
    >
      <input type="checkbox" id={id} className="peer sr-only" />

      <span className="absolute inset-0 rounded-full bg-red-600 transition peer-checked:bg-green-500"></span>

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-green-300 transition-all peer-checked:start-6"></span>
    </label>
  );
}
