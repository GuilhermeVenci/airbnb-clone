'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import TextButton from '../Buttons/TextButton';
import MenuButton from './components/MenuButton';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import SearchBar from '../SearchBar';
import SearchBarSmall from '../SearchBar/components/SearchBarSmall';

const Header = () => {
  const [selected, setSelected] = useState('search-block-tab-STAYS');
  const [selectedSearch, setSelectedSearch] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSelectedSearch('');
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setSelectedSearch('');
      setIsScrolled(true);
      setIsOpen(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleSelected(id: string) {
    setSelected(id);
  }

  function handleSelectedSearch(id: string) {
    setSelectedSearch(id);
  }

  const showSearchBar =
    typeof window !== 'undefined' && window.scrollY > 0
      ? isOpen
      : !isScrolled || isOpen;

  return (
    <div
      className={`sticky top-0 inset-x-0 bg-white z-50 lg:px-10 xl:px-20 transition-height duration-300 ease-in-out ${
        showSearchBar ? 'h-[168px]' : 'h-20'
      }`}
    >
      <header className="w-100 relative h-20 max-h-20">
        <div className="flex h-full max-w-[2360px] items-center text-airbnb-medium-gray">
          <div className="flex flex-1 flex-row">
            <Image
              src="/airbnb.svg"
              alt="Airbnb Logo"
              width={102}
              height={32}
              priority
              className="lg:block xs:hidden"
            />
            <Image
              src="/airbnb-icon.svg"
              alt="Airbnb Logo"
              width={30}
              height={32}
              priority
              className="lg:hidden"
            />
          </div>

          <div className="flex-none px-6">
            <div
              className={`h-full flex justify-center items-center transition-all duration-500 ease-in-out ${
                !showSearchBar
                  ? 'scale-100 opacity-100 translate-y-0'
                  : 'scale-0 opacity-0 -translate-y-12'
              }`}
            >
              <SearchBarSmall
                tabSelected={selected}
                selectedSearch={selectedSearch}
                handleSelectedSearch={handleSelectedSearch}
                handleOpen={setIsOpen}
                className={`transition-all duration-500 ease-in-out ${
                  !showSearchBar ? 'h-[46px]' : 'h-0'
                }`}
              />
            </div>

            <div
              className={`flex flex-row justify-center items-center transition-all duration-500 ease-in-out ${
                showSearchBar
                  ? 'scale-100 opacity-100 translate-y-0 h-auto'
                  : 'scale-0 opacity-0 -translate-y-12 h-0'
              }`}
            >
              <TextButton
                id="search-block-tab-STAYS"
                selected={selected === 'search-block-tab-STAYS'}
                onClick={() => handleSelected('search-block-tab-STAYS')}
              >
                Acomodações
              </TextButton>
              <TextButton
                id="search-block-tab-EXPERIENCES"
                selected={selected === 'search-block-tab-EXPERIENCES'}
                onClick={() => handleSelected('search-block-tab-EXPERIENCES')}
              >
                Experiências
              </TextButton>
              <TextButton>Experiências online</TextButton>
            </div>
          </div>

          <div className="flex flex-1 flex-row justify-end items-center">
            <TextButton className="text-sm text-airbnb-dark font-semibold">
              Anuncie seu espaço no Airbnb
            </TextButton>

            <TextButton className="-ml-2 mr-1">
              <GlobeAltIcon className="h-5 w-5 text-airbnb-dark" />
            </TextButton>

            <MenuButton />
          </div>
        </div>
      </header>
      <SearchBar
        tabSelected={selected}
        selectedSearch={selectedSearch}
        handleSelectedSearch={handleSelectedSearch}
        className={`transition-all duration-300 ease-in-out ${
          showSearchBar
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-0 opacity-0 -translate-y-12'
        }`}
      />
    </div>
  );
};

export default Header;
