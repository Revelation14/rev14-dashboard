import router from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import PersonalDetails from '@/components/profile/PersonalDetails';
import Security from '@/components/profile/Security';
import { getFromLocalStorage } from '@/lib/helper';
import type { IUser } from '@/types/user.types';

import { useAuth } from '../../store/auth.store';

const Profile = () => {
  const [isClient, setIsClient] = useState(false);

  const auth = useAuth();
  const user = JSON.parse(getFromLocalStorage('user')) as IUser;
  useEffect(() => {
    setIsClient(true);

    if (!auth.user && !user) {
      router.push('/auth/login');
    }
  }, []);

  if (!isClient) {
    return null;
  }

  const handleExit = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="m-5 flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6">
      <button
        type="button"
        className="fixed right-8 top-8 z-10 gap-2.5 rounded-full bg-gray-150 p-2.5"
        onClick={handleExit}
      >
        <img src="/assets/icons/cancel.svg" alt="" />
      </button>
      <PersonalDetails />
      <Security />
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
        position="top-center"
      />
    </div>
  );
};

export default Profile;
