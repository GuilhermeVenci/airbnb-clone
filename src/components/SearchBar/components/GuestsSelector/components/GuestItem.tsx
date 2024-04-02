import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Dispatch } from 'react';

const GuestItem = ({
  label,
  description,
  url,
  counter,
  handleCounter,
  dependent = false,
  adultCounter,
  handleAdult,
  isDisabled = true,
}: {
  label: string;
  description: string;
  url?: string;
  counter: number;
  handleCounter: React.Dispatch<React.SetStateAction<number>>;
  dependent?: boolean;
  adultCounter?: number;
  handleAdult?: React.Dispatch<React.SetStateAction<number>>;
  isDisabled?: boolean;
}) => {
  function addCounter() {
    if (dependent && adultCounter === 0 && handleAdult) {
      handleAdult((prevCounter) => prevCounter + 1);
      handleCounter((prevCounter) => prevCounter + 1);
    } else {
      handleCounter((prevCounter) => prevCounter + 1);
    }
  }

  function removeCounter() {
    if (counter > 0) handleCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <li className="flex flex-row w-full py-6 border-b border-airbnb-gray last:border-0 justify-between items-center">
      <div className="flex flex-col w-auto">
        <span className="text-base font-semibold text-airbnb-dark">
          {label}
        </span>
        {url ? (
          <Link
            href="/"
            className="text-sm font-semibold text-airbnb-medium-gray underline"
          >
            {description}
          </Link>
        ) : (
          <span className="text-sm font-light text-airbnb-medium-gray">
            {description}
          </span>
        )}
      </div>
      <div className="flex flex-row justify-between items-center h-8 w-[104px]">
        <button
          disabled={isDisabled}
          className="
          w-8 h-8 
          flex justify-center items-center
          text-airbnb-medium-gray
          border border-airbnb-medium-gray rounded-full 
          hover:text-airbnb-dark hover:border-airbnb-dark
          disabled:border-airbnb-gray
          disabled:cursor-not-allowed disabled:hover:border-airbnb-gray
          disabled:text-airbnb-gray
          "
          onClick={removeCounter}
        >
          <span className="p-[5px]">
            <MinusIcon className="h-4 w-4 text-inherit" />
          </span>
        </button>
        <span className="text-base font-normal text-airbnb-dark">
          {counter}
        </span>
        <button
          onClick={addCounter}
          className="
            w-8 h-8 
            flex justify-center items-center 
            text-airbnb-medium-gray
            border border-airbnb-medium-gray rounded-full 
            hover:text-airbnb-dark hover:border-airbnb-dark"
        >
          <span className="p-[5px]">
            <PlusIcon className="h-4 w-4 text-inherit" />
          </span>
        </button>
      </div>
    </li>
  );
};

export default GuestItem;
