import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import NavItem from './NavItem';

const Nav: React.FC<{ sidebarOutsideClick: boolean }> = ({
  sidebarOutsideClick,
}) => {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [hovered, setHovered] = useState(false);

  // const sidebarClose = () => {
  //   setSidebarStatus(false);
  // };

  // const sidebarOpen = () => {
  //   setSidebarStatus(true);
  // };

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(true);
    }
  }, [sidebarOutsideClick]);

  return (
    <nav className="mx-4 my-6 flex flex-col space-y-4">
      <NavItem
        hrefLink="/insights"
        sidebarStatus={sidebarStatus}
        menuTitle="Insights"
      >
        <Image
          src={
            hovered
              ? '/assets/icons/white-chart.svg'
              : '/assets/icons/chart.svg'
          }
          alt=""
          height={16}
          width={16}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </NavItem>

      <NavItem
        hrefLink="/contributors"
        sidebarStatus={sidebarStatus}
        menuTitle="Contributors"
      >
        <Image src="/assets/icons/people.svg" alt="" height={16} width={16} />
      </NavItem>

      {/* this menu has child Menu     */}
      <NavItem
        hrefLink="/devotionals"
        sidebarStatus={sidebarStatus}
        menuTitle="Devotionals"
      >
        <Image src="/assets/icons/book.svg" alt="" height={16} width={16} />
      </NavItem>
    </nav>
  );
};

export default Nav;
