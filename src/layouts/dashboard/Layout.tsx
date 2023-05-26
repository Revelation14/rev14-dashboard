import React, { useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [mobileNavsidebar, setMobileNavsidebar] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-gray-50 p-4">
      <Sidebar mobileNavsidebar={mobileNavsidebar} />

      <div className="grow text-gray-800">
        <Header
          mobileNavsidebar={mobileNavsidebar}
          setMobileNavsidebar={setMobileNavsidebar}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
