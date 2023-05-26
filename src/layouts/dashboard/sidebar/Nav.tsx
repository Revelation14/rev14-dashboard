/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import NavItem from './NavItem';

const Nav: React.FC<{ sidebarOutsideClick: boolean }> = ({
  sidebarOutsideClick,
}) => {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [insightsHovered, setInsightsHovered] = useState(false);
  const [contributorHovered, setContributorHovered] = useState(false);
  const [devotionHovered, setDevotionHovered] = useState(false);

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(true);
    }
  }, [sidebarOutsideClick]);

  return (
    <nav className="mx-4 my-6 flex flex-col space-y-4">
      <div
        onMouseOver={() => setInsightsHovered(true)}
        onMouseLeave={() => setInsightsHovered(false)}
      >
        <NavItem
          hrefLink="/insights"
          sidebarStatus={sidebarStatus}
          menuTitle="Insights"
        >
          <Image
            src={
              insightsHovered
                ? '/assets/icons/white-chart.svg'
                : '/assets/icons/chart.svg'
            }
            alt=""
            height={16}
            width={16}
          />
        </NavItem>
      </div>

      <div
        onMouseOver={() => setContributorHovered(true)}
        onMouseLeave={() => setContributorHovered(false)}
      >
        <NavItem
          hrefLink="/contributors"
          sidebarStatus={sidebarStatus}
          menuTitle="Contributors"
        >
          <Image
            src={
              contributorHovered
                ? '/assets/icons/white-people.svg'
                : '/assets/icons/people.svg'
            }
            alt=""
            height={16}
            width={16}
          />
        </NavItem>
      </div>

      <div
        onMouseOver={() => setDevotionHovered(true)}
        onMouseLeave={() => setDevotionHovered(false)}
      >
        <NavItem
          hrefLink="/devotionals"
          sidebarStatus={sidebarStatus}
          menuTitle="Devotionals"
        >
          <Image
            src={
              devotionHovered
                ? '/assets/icons/white-book.svg'
                : '/assets/icons/book.svg'
            }
            alt=""
            height={16}
            width={16}
          />
        </NavItem>
      </div>
    </nav>
  );
};

export default Nav;
