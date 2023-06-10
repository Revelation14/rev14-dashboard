/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import React from 'react';

interface IHeaderProps {
  mobileNavsidebar: boolean;
  setMobileNavsidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeaderProps> = ({
  mobileNavsidebar,
  setMobileNavsidebar,
}) => {
  return (
    <header
      className={`flex items-center ${
        mobileNavsidebar ? 'py-6' : 'pb-6 lg:pb-0'
      }`}
    >
      <div
        className="h-12 cursor-pointer stroke-slate-600 sm:hidden"
        onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
      >
        {!mobileNavsidebar ? (
          <div className="px-1 py-4">
            <Image src="/assets/icons/menu.svg" alt="" width={30} height={32} />
          </div>
        ) : (
          <div className="rounded-full bg-gray-150 p-4">
            <Image
              src="/assets/icons/right-arrow.svg"
              alt=""
              width={6}
              height={8}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
