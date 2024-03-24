'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import TextButton from '../Buttons/TextButton';
import MenuButton from './components/MenuButton';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [selected, setSelected] = useState('search-block-tab-STAYS');
  function handleSelected(id: string) {
    console.log(id);
    setSelected(id);
  }
  return (
    <header className="w-100 sticky inset-x-0 z-50 h-20 top-0">
      <div className="grid h-full items-center grid-cols-3 bg-white px-20 text-black">
        <div>
          <Image
            src="/airbnb.svg"
            alt="Airbnb Logo"
            width={102}
            height={32}
            priority
          />
        </div>
        <div className="flex flex-row justify-center items-center">
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
        <div className="flex flex-row justify-end items-center">
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
  );
};

export default Header;
