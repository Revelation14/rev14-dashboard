import Image from 'next/image';
import React, { useRef } from 'react';

import OutsideClick from '@/utils/outsideClick';

import Logo from './sidebar/Logo';
import Nav from './sidebar/Nav';
import NavItem from './sidebar/NavItem';

interface ISidebarProps {
  mobileNavsidebar: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ mobileNavsidebar }) => {
  const sidebarRef = useRef(null);
  const sidebarOutsideClick = OutsideClick(sidebarRef);

  return (
    <aside
      className={`${
        mobileNavsidebar ? 'block' : 'hidden'
      } z-50 py-6 sm:flex sm:flex-col`}
      ref={sidebarRef}
    >
      <div className="px-2">
        <Logo />
      </div>

      <div className="flex h-full grow flex-col justify-between pt-10 text-gray-600">
        <Nav sidebarOutsideClick={sidebarOutsideClick} />
        <div>
          <NavItem
            hrefLink="/profile"
            sidebarStatus
            menuTitle="Profile"
            hasHover={false}
            color="text-black"
            fontweight="font-medium"
            fontSize="text-base"
          >
            <Image
              src="/assets/images/Photo.png"
              alt=""
              height={44}
              width={44}
            />
          </NavItem>
          <NavItem
            hrefLink="/logout"
            sidebarStatus
            menuTitle="Logout"
            hasHover={false}
          >
            <Image
              src="/assets/icons/logout.svg"
              alt=""
              height={18}
              width={20}
            />
          </NavItem>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
