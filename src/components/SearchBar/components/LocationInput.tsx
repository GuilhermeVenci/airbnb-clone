import React, { ReactNode, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

interface LocationInputProps extends React.HTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  selected?: boolean;
  placeholder?: string;
  children?: ReactNode;
  selectedSearch: string;
  handleSelectedSearch: (id: string) => void;
}

const localeSugestions = [
  {
    name: 'Busca flexível',
    imgSrc: '/map-flexible-search.jpg',
  },
  {
    name: 'Europa',
    imgSrc: '/map-europa.jpg',
  },
  {
    name: 'Argentina',
    imgSrc: '/map-argentina.jpg',
  },
  {
    name: 'Estados Unidos',
    imgSrc: '/map-eua.jpg',
  },
  {
    name: 'Itália',
    imgSrc: '/map-italia.jpg',
  },
  {
    name: 'Caribe',
    imgSrc: '/map-caribe.jpg',
  },
];

const LocationInput: React.FC<LocationInputProps> = ({
  id,
  children,
  className,
  selected,
  placeholder,
  selectedSearch,
  handleSelectedSearch,
  ...props
}) => {
  const idField = 'LocationField';
  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <Popover.Button
            id={id}
            onClick={() => handleSelectedSearch(idField)}
            className={`
          flex
          flex-col
          w-full
          cursor-pointer
          rounded-full
          py-[14px]
          px-8
          text-airbnb-text-gray 
          selection:font-semibold 
          focus-visible:outline-none
          ${
            selected
              ? 'font-semibold text-airbnb-dark'
              : 'hover:bg-airbnb-deep-gray'
          } ${className}`}
            {...props}
          >
            <span className="text-xs text-airbnb-dark font-semibold">Onde</span>
            <input
              placeholder="Buscar destinos"
              className="bg-transparent text-sm w-full outline-none font-light text-airbnb-medium-gray"
            ></input>
          </Popover.Button>

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
            <Popover.Panel className="absolute left-auto z-10 mt-3 flex w-[428px] max-w-max">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-[32px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="flex flex-col p-6 pt-8">
                  <span className="text-sm font-bold text-airbnb-dark mb-4 ml-2">
                    Busque por região
                  </span>
                  <div className="w-full grid grid-cols-3 gap-y-1">
                    {localeSugestions.map((locale: any) => (
                      <div
                        key={locale.name}
                        className="w-full flex flex-col gap-y-1.5 hover:bg-airbnb-deep-gray p-2 rounded-[16px]"
                      >
                        <button className="relative w-full aspect-square border border-airbnb-gray rounded-xl cursor-pointer active:scale-90 transition duration-150">
                          <Image
                            src={locale.imgSrc}
                            alt="Flexible search"
                            fill
                            sizes="100%"
                            style={{
                              borderRadius: '12px',
                              objectFit: 'cover',
                            }}
                            className="border-airbnb-medium-gray"
                          />
                        </button>
                        <span className="text-sm text-airbnb-dark mx-0.5 font-light">
                          {locale.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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

export default LocationInput;
