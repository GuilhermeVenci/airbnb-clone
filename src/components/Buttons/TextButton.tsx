import React, { ReactNode } from 'react';

interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  selected?: boolean;
  children: ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({
  id,
  children,
  className,
  selected,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`px-4 py-2.5 rounded-full text-airbnb-text-gray selection:font-semibold ${
        selected ? 'font-semibold text-airbnb-dark' : 'hover:bg-gray-100'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TextButton;
