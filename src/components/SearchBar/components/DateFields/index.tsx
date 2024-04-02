'use client';
import React, { Fragment, useState } from 'react';
import DateButton from './components/DateButton';
import { Popover, Transition } from '@headlessui/react';
import DatePicker from './components/DatePicker';
import { format } from 'date-fns';

const DateFields = ({
  tabSelected,
  selectedSearch,
  handleSelectedSearch,
}: {
  tabSelected: string;
  selectedSearch: string;
  handleSelectedSearch: (id: string) => void;
}) => {
  let dateField = tabSelected === 'search-block-tab-STAYS';
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [isOpen, setIsOpen] = useState<boolean>(false); // Estado para controlar a abertura do Popover
  const [activeButton, setActiveButton] = useState<'checkIn' | 'checkOut' | ''>(
    ''
  );

  const idField = 'DateField';

  const handleOpen = (buttonType: 'checkIn' | 'checkOut') => {
    handleSelectedSearch(idField);
    setIsOpen(true);
    setActiveButton(buttonType);
  };

  const handleClose = () => {
    handleSelectedSearch('');
    setActiveButton('');
    setIsOpen(false);
  };

  return (
    <Popover className="relative w-full">
      <>
        {dateField ? (
          <div className="flex flex-row">
            <DateButton
              className="w-2/4"
              date={checkIn && format(checkIn, 'd MMM')}
              onClick={() => handleOpen('checkIn')}
            >
              Check-in
            </DateButton>

            <div className="h-8 border-r self-center border-airbnb-gray " />

            <DateButton
              className="w-2/4"
              date={checkOut && format(checkOut, 'd MMM')}
              onClick={() => handleOpen('checkOut')}
            >
              Checkout
            </DateButton>

            <div className="h-8 border-r self-center border-airbnb-gray " />
          </div>
        ) : (
          <div className="flex min-w-[288.85px]">
            <DateButton className="w-full" date="">
              Data
            </DateButton>

            <div className="h-8 border-r self-center border-airbnb-gray " />
          </div>
        )}

        <Transition
          show={isOpen && selectedSearch === idField}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="absolute z-10 mt-3 flex w-[850px] justify-center"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            <div className="w-full rounded-[32px] px-8 py-4 bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <DatePicker
                checkIn={checkIn}
                checkOut={checkOut}
                setCheckIn={(date) => {
                  setCheckIn(date);
                  // Se o botão de check-in foi pressionado novamente, mantenha o Popover aberto.
                  if (activeButton === 'checkIn') {
                    setIsOpen(true);
                  } else {
                    // handleClose(); // Fecha o Popover se o botão de check-out for pressionado
                  }
                }}
                setCheckOut={setCheckOut}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </div>
          </Popover.Panel>
        </Transition>
        {isOpen && selectedSearch === idField && (
          <div
            onClick={handleClose}
            className="fixed inset-x-0 top-[88px] h-[calc(100vh-168px)] bg-black opacity-30"
          />
        )}
      </>
    </Popover>
  );
};

export default DateFields;
