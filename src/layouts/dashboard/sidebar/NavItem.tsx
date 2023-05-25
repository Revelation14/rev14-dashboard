/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import React from 'react';

interface INavItemProps {
  sidebarStatus: boolean;
  menuTitle: string;
  hrefLink: string;
  hasHover?: boolean;
  color?: string;
  fontweight?: string;
  fontSize?: string;
  children: JSX.Element;
}

const NavItem: React.FC<INavItemProps> = ({
  sidebarStatus,
  menuTitle,
  hrefLink,
  hasHover = true,
  color,
  fontweight,
  fontSize,
  children,
}) => {
  return (
    <Link href={hrefLink} className="hover:border-0">
      <div
        className={`relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 ${
          hasHover && 'hover:bg-gold hover:text-white'
        } focus:bg-gold focus:text-white ${color || 'text-gray-600'} ${
          fontweight || 'font-light'
        }`}
      >
        {children}
        <span
          className={`${
            sidebarStatus ? `ml-2 ${fontSize || 'text-sm'}` : 'sr-only'
          }`}
        >
          {menuTitle}
        </span>
      </div>
    </Link>
  );
};

export default NavItem;
