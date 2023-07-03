import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getFromLocalStorage } from '@/lib/helper';
import { useAuth } from '@/store/auth.store';

import Header from './Header';
import Sidebar from './Sidebar';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [mobileNavsidebar, setMobileNavsidebar] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const user = getFromLocalStorage('user');

  useEffect(() => {
    if (!auth.user && !user) {
      router.push('/auth/login');
    }
  }, []);

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
