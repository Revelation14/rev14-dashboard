import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAuth } from '@/store/auth.store';

import { getFromLocalStorage } from '../lib/helper';
import { EUserRole } from '../types/user.types';
import Insights from './insights';

const Index = () => {
  const router = useRouter();
  const auth = useAuth();
  const user = JSON.parse(getFromLocalStorage('user'));

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!auth.user && !user) {
      router.push('/auth/login');
    } else if (user && user.role !== EUserRole.SYSTEM_ADMIN) {
      localStorage.clear();
      router.push('/auth/login');
    }
  }, []);

  if (!isClient) {
    return null; // A hack to fix this error when you refresh the page:  `Hydration failed because the initial UI does not match what was rendered on the server`
  }

  return (
    <div>
      {user && user?.role === EUserRole.SYSTEM_ADMIN ? <Insights /> : null}
    </div>
  );
};

export default Index;
