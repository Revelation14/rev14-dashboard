import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Insights from './insights';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const authorizedUser = localStorage.getItem('authorized') ?? 'false';
    if (!JSON.parse(authorizedUser)) {
      router.push('/auth/login');
    }
  }, []);

  return <Insights />;
};

export default Index;
