import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/store/auth.store';

import Insights from './insights';

const Index = () => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      router.push('/auth/login');
    }
  }, []);

  return <Insights />;
};

export default Index;
