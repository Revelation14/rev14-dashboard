/* eslint-disable jsx-a11y/label-has-associated-control */
import router from 'next/router';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import AddProfilePicturePopup from '@/components/profile/AddProfilePicturePopup';

import ErrorMessage from '../../components/common/ErrorMessage';
import { getFromLocalStorage, setToLocalStorage } from '../../lib/helper';
import { updateProfile } from '../../services/auth.service';
import { useAuth } from '../../store/auth.store';
import type { IHttpException, IUser } from '../../types/user.types';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  const [profileInitials, setProfileInitials] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [isClient, setIsClient] = useState(false);

  const auth = useAuth();
  const user = getFromLocalStorage('user') as IUser;

  useEffect(() => {
    setIsClient(true);

    const fetchUserData = async () => {
      setUserData({
        name: user.name || '',
        email: user.email || '',
      });

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      generateProfileInitials(user.name || '');
    };

    if (!auth.user && !user) {
      router.push('/auth/login');
      return;
    }

    fetchUserData();
  }, []);

  if (!isClient) {
    return null;
  }

  const generateProfileInitials = (name: string) => {
    const initials = `${name.split(' ')[0]!.charAt(0)}${name
      .split(' ')[1]!
      .charAt(0)}`;
    setProfileInitials(initials);
  };
  const handleExit = () => {
    window.history.back(); // Navigate to the previous page
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await updateProfile(userData);

      if (res as IUser) {
        auth.updateUser(res as IUser);
        setToLocalStorage('user', res as IUser);
        setLoading(false);
      } else {
        setErrorMsg((res as IHttpException).message);
      }
    } catch (error) {
      setErrorMsg((error as IHttpException).message);
    }
    setLoading(false);
    router.push('/');
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
      <div className="flex flex-col items-center gap-12">
        <div className="h-[80px] w-[80px] rounded-full bg-[#276EF1] text-center text-4xl font-medium text-white">
          <AddProfilePicturePopup />

          {profileInitials}
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          {errorMsg && (
            <ErrorMessage
              errorMessage={errorMsg}
              setErrorMessage={setErrorMsg}
            />
          )}
          <h1 className="text-base font-medium text-gray-400">
            Personal Details
          </h1>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-gray-50 p-6">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={userData.name}
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={userData.email}
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <h1 className="text-base font-medium text-gray-400">Security</h1>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-gray-50 p-6">
            <label htmlFor="password" className="text-sm font-medium">
              Current Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password.."
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
            />
            <label htmlFor="newPassword" className="text-sm font-medium">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              placeholder="Create a password.."
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
            />
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Create a password.."
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
            />
          </div>
        </div>
        <Button
          type="submit"
          text="Save"
          className="h-fit w-fit bg-gray-50 p-1 text-sm font-normal text-gray-400"
          color="#FFFFFF"
          handleClick={handleSubmit}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default Profile;
