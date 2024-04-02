import React from 'react';

interface SearchBarProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  tabSelected: string;
  selectedSearch: string;
  handleSelectedSearch: (id: string) => void;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBarSmall: React.FC<SearchBarProps> = ({
  tabSelected,
  selectedSearch,
  handleSelectedSearch,
  handleOpen,
  ...props
}) => {
  function handleOpenForm(field: string) {
    handleSelectedSearch(field);
    handleOpen(true);
  }

  return (
    <div
      className={`flex flex-row items-center justify-center w-[430.75px] border border-airbnb-gray rounded-full shadow-sm hover:shadow-lg cursor-pointer ${props.className}`}
    >
      <button
        className="flex flex-1 items-center justify-center text-sm font-medium text-airbnb-dark"
        onClick={() => handleOpenForm('LocationField')}
      >
        Qualquer lugar
      </button>

      <div className="h-6 border-l self-center border-airbnb-gray " />

      <button
        onClick={() => handleOpenForm('DateField')}
        className="flex flex-1 items-center justify-center text-sm font-medium text-airbnb-dark"
      >
        Qualquer semana
      </button>

      <div className="h-6 border-r self-center border-airbnb-gray " />

      <button
        onClick={() => handleOpenForm('GuestField')}
        className="flex flex-1 items-center justify-center text-sm font-light text-airbnb-dark"
      >
        Hospedes?
      </button>
    </div>
  );
};

export default SearchBarSmall;
