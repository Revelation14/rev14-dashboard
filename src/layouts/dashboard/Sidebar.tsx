import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import OutsideClick from '@/utils/outsideClick';

import { getFromLocalStorage } from '../../lib/helper';
import { useAuth } from '../../store/auth.store';
import type { IUser } from '../../types/user.types';
import Logo from './sidebar/Logo';
import Nav from './sidebar/Nav';
import NavItem from './sidebar/NavItem';

interface ISidebarProps {
  mobileNavsidebar: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ mobileNavsidebar }) => {
  const sidebarRef = useRef(null);
  const [profileInitials, setProfileInitials] = useState('');

  const sidebarOutsideClick = OutsideClick(sidebarRef);
  const auth = useAuth();

  const user = JSON.parse(getFromLocalStorage('user')) as IUser;
  const generateProfileInitials = (name: string) => {
    const initials = `${name.split(' ')[0]!.charAt(0)}${
      name.split(' ')[1]?.charAt(0) ?? ''
    }`;
    setProfileInitials(initials);
  };

  useEffect(() => {
    if (user) {
      generateProfileInitials(user.name || '');
    }
  }, []);

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
            {/* <Image
              src="/assets/images/Photo.png"
              alt=""
              height={44}
              width={44}
            /> */}
            <div className="relative flex h-[44px] w-[44px] items-center justify-center rounded-full bg-backgroundAccent text-2xl font-medium text-white">
              <div>{profileInitials}</div>
            </div>
          </NavItem>
          <NavItem
            hrefLink="/auth/login"
            sidebarStatus
            menuTitle="Logout"
            hasHover={false}
            handleClick={() => {
              localStorage.clear();
              auth.logout();
            }}
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
