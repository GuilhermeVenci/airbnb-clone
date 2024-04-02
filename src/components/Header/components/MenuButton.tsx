import React, { Fragment } from 'react';
import UserCircleIcon from '@heroicons/react/24/solid/UserCircleIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import { Menu, Popover, Transition } from '@headlessui/react';
import Link from 'next/link';

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  selected?: boolean;
}

const topMenu = [
  {
    label: 'Entrar',
    href: '/',
    priority: true,
  },
  {
    label: 'Cadastre-se',
    href: '/',
  },
];

const bottomMenu = [
  {
    label: 'Cartões de presente',
    href: '/',
  },
  {
    label: 'Anuncie seu espaço no Airbnb',
    href: '/',
  },
  {
    label: 'Central de ajuda',
    href: '/',
  },
];

const MenuItem = ({
  label,
  href,
  priority = false,
}: {
  label: string;
  href: string;
  priority?: boolean;
}) => {
  return (
    <Menu.Item
      as="div"
      key={label}
      className="py-2 pl-4 hover:bg-airbnb-light-gray"
    >
      <Link href={href}>
        <span
          className={`text-sm text-airbnb-dark ${
            priority ? 'font-semibold' : 'font-light'
          }`}
        >
          {label}
        </span>
      </Link>
    </Menu.Item>
  );
};

const MenuButton: React.FC<MenuButtonProps> = ({
  id,
  className,
  selected,
  ...props
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <Menu.Button
        id={id}
        className={`flex flex-row text-center align-middle items-center justify-center h-12 py-1 pr-1.5 pl-3 border border-airbnb-gray rounded-full hover:shadow-md ${className}`}
        {...props}
      >
        <Bars3Icon className="text-dark w-5 h-5" />
        <UserCircleIcon className="text-airbnb-medium-gray w-9 h-9 ml-2.5" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-2">
            {topMenu.map((menu) => (
              <MenuItem
                key={menu.label}
                label={menu.label}
                href={menu.href}
                priority={menu.priority}
              />
            ))}
            <div className="w-full border-b border-b-airbnb-gray my-2" />
            {bottomMenu.map((menu) => (
              <MenuItem key={menu.label} label={menu.label} href={menu.href} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuButton;
