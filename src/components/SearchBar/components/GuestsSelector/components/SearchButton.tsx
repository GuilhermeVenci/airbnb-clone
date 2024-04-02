import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React from 'react';

const SearchButton = () => {
  return (
    <div className="flex items-center absolute right-0 inset-y-0 pr-[9px]">
      <button className="h-12 w-12 rounded-full bg-airbnb-red p-3.5">
        <MagnifyingGlassIcon className="h-5 w-5 fill-white" />
      </button>
    </div>
  );
};

export default SearchButton;
