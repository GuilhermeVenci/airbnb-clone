import React from 'react';
import LocationInput from './components/LocationInput';
import GuestsSelector from './components/GuestsSelector';
import DateFields from './components/DateFields';

interface SearchBarProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  tabSelected: string;
  selectedSearch: string;
  handleSelectedSearch: (id: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  tabSelected,
  selectedSearch,
  handleSelectedSearch,
  ...props
}) => {
  return (
    <div
      className={`w-full absolute flex top-20 inset-x-0 items-center justify-center ${props.className}`}
    >
      <div className="h-16 w-full max-w-[850px] border border-airbnb-gray rounded-full shadow-md">
        <div className="flex flex-row w-full items-center">
          <div className="flex flex-1">
            <LocationInput
              selectedSearch={selectedSearch}
              handleSelectedSearch={handleSelectedSearch}
            />
            <div className="h-8 border-r self-center border-airbnb-gray " />
          </div>
          <div className="flex flex-none">
            <DateFields
              tabSelected={tabSelected}
              selectedSearch={selectedSearch}
              handleSelectedSearch={handleSelectedSearch}
            />
          </div>
          <div className="flex flex-1 flex-row">
            <GuestsSelector
              selectedSearch={selectedSearch}
              handleSelectedSearch={handleSelectedSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
