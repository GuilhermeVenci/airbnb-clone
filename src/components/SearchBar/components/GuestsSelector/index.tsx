'use client';
import React, { Fragment, ReactNode, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import SearchButton from './components/SearchButton';
import GuestItem from './components/GuestItem';

interface GuestsSelectorProps extends React.HTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  selected?: boolean;
  placeholder?: string;
  children?: ReactNode;
  selectedSearch: string;
  handleSelectedSearch: (id: string) => void;
}

const GuestsSelector: React.FC<GuestsSelectorProps> = ({
  id,
  children,
  className,
  selected,
  placeholder,
  selectedSearch,
  handleSelectedSearch,
  ...props
}) => {
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [babies, setBabies] = useState(0);
  const [pets, setPets] = useState(0);
  const idField = 'GuestField';

  const shouldDisableRemoveAdults =
    adults <= 0 || kids > 0 || babies > 0 || pets > 0;

  const guests = adults + kids;
  const guestsStr =
    guests > 0 ? `${guests} hóspede${guests !== 1 ? 's' : ''}` : '';
  const babiesStr =
    babies > 0 ? `${babies} bebê${babies !== 1 ? 's' : ''}` : '';
  const petsStr =
    pets > 0 ? `${pets} anima${pets !== 1 ? 'is' : 'l'} de estimação` : '';

  const parts = [guestsStr, babiesStr, petsStr].filter(Boolean);
  const totalGuests = parts.length === 0 ? 'Hóspedes?' : parts.join(', ');

  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <div className="flex flex-row ">
            <Popover.Button
              id={id}
              onClick={() => handleSelectedSearch(idField)}
              className={`flex flex-row w-full justify-between items-center pl-6 rounded-full text-airbnb-deep-gray cursor-pointer selection:font-semibold focus-visible:outline-none ${
                selected
                  ? 'font-semibold text-airbnb-dark'
                  : 'hover:bg-airbnb-deep-gray'
              } ${className}`}
              {...props}
            >
              <div className="flex flex-col w-full py-[14px] text-left max-w-48">
                <span className="text-xs text-airbnb-dark font-semibold">
                  Quem
                </span>
                <span
                  className={`
              w-48  
              bg-transparent 
              text-sm 
              outline-none  
              
              whitespace-nowrap 
              overflow-hidden 
              overflow-ellipsis
              ${
                adults > 0
                  ? 'text-airbnb-dark font-semibold'
                  : 'text-airbnb-medium-gray font-light'
              }
              `}
                >
                  {totalGuests}
                </span>
              </div>
            </Popover.Button>
            <SearchButton />
          </div>

          <Transition
            show={open && selectedSearch === idField}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-3 flex w-[428px] max-w-max">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-[32px] px-8 py-4 bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <ul className="flex flex-col ">
                  <GuestItem
                    label="Adultos"
                    description="13 anos ou mais"
                    counter={adults}
                    handleCounter={setAdults}
                    isDisabled={shouldDisableRemoveAdults}
                  />
                  <GuestItem
                    label="Crianças"
                    description="De 2 a 12 anos"
                    counter={kids}
                    handleCounter={setKids}
                    dependent
                    adultCounter={adults}
                    handleAdult={setAdults}
                    isDisabled={kids <= 0}
                  />
                  <GuestItem
                    label="Bebês"
                    description="Menor de 2"
                    counter={babies}
                    handleCounter={setBabies}
                    dependent
                    adultCounter={adults}
                    handleAdult={setAdults}
                    isDisabled={babies <= 0}
                  />
                  <GuestItem
                    label="Animais de estimação"
                    description="Vai levar um animal de serviço?"
                    url="/"
                    counter={pets}
                    handleCounter={setPets}
                    dependent
                    adultCounter={adults}
                    handleAdult={setAdults}
                    isDisabled={pets <= 0}
                  />
                </ul>
              </div>
            </Popover.Panel>
          </Transition>
          {open && selectedSearch === idField && (
            <Popover.Overlay className="fixed inset-x-0 top-[88px] h-[calc(100vh-168px)] bg-black opacity-30" />
          )}
        </>
      )}
    </Popover>
  );
};

export default GuestsSelector;
