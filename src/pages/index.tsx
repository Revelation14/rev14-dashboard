import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/store/auth.store';

import { getFromLocalStorage } from '../lib/helper';
import Insights from './insights';

const Index = () => {
  const router = useRouter();
  const auth = useAuth();
  const user = getFromLocalStorage('user');

  useEffect(() => {
    if (!auth.user && !user) {
      router.push('/auth/login');
    }
  }, []);

  return <div>{user ? <Insights /> : null}</div>;
};

export default Index;
