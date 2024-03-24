import React from 'react';
import UserCircleIcon from '@heroicons/react/24/solid/UserCircleIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  selected?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  id,
  className,
  selected,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`flex flex-row text-center align-middle items-center justify-center h-12 py-1 pr-1.5 pl-3 border border-airbnb-gray rounded-full hover:shadow-md ${className}`}
      {...props}
    >
      <Bars3Icon className="text-dark w-5 h-5" />
      <UserCircleIcon className="text-airbnb-medium-gray w-9 h-9 ml-2.5" />
    </button>
  );
};

export default MenuButton;
