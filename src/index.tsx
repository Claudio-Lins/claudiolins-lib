import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="text-red-500 text-2xl font-thin bg-orange-400 p-4 rounded-lg w-full max-w-sm">
      {children || `Claudio`}
    </div>
  );
};
