import { Popover } from '@headlessui/react';
import React, { ReactNode } from 'react';

interface DateButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  selected?: boolean;
  date?: string;
  children: ReactNode;
}

const DateButton: React.FC<DateButtonProps> = ({
  id,
  children,
  className,
  selected,
  date,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`
        flex flex-col 
        cursor-pointer 
        px-6 py-[14px]
        rounded-full
        text-airbnb-medium-gray
        selection:font-semibold
        focus-visible:outline-none
        text-left
        w-[144px] 
        ${
          selected
            ? 'font-semibold text-airbnb-dark'
            : 'hover:bg-airbnb-deep-gray'
        } ${className}`}
      {...props}
    >
      <span className="text-xs text-airbnb-dark font-semibold">{children}</span>
      <span
        className={`bg-transparent text-sm w-auto airbnb-medium-gray font-light ${
          date && 'font-semibold text-airbnb-dark'
        }`}
      >
        {date ? date : 'Insira as datas'}
      </span>
    </button>
  );
};

export default DateButton;
