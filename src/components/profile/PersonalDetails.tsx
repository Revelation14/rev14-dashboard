/* eslint-disable jsx-a11y/label-has-associated-control */
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { getFromLocalStorage, setToLocalStorage } from '@/lib/helper';
import { updateProfile } from '@/services/auth.service';
import { useAuth } from '@/store/auth.store';
import type { IHttpException } from '@/types/common.types';
import type { IUpdateUserDto, IUser } from '@/types/user.types';
import { EUserRole } from '@/types/user.types';

import Button from '../common/Button';

const PersonalDetails = () => {
  const [profileInitials, setProfileInitials] = useState('');
  const [userData, setUserData] = useState<IUpdateUserDto>({
    name: '',
    email: '',
  });

  const [isLoading, setLoading] = useState(false);
  const auth = useAuth();
  const user = JSON.parse(getFromLocalStorage('user')) as IUser;
  const generateProfileInitials = (name: string) => {
    const initials = `${name.split(' ')[0]!.charAt(0)}${
      name.split(' ')[1]?.charAt(0) ?? ''
    }`;
    setProfileInitials(initials);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setUserData({
        name: user.name || '',
        email: user.email || '',
      });

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      generateProfileInitials(user.name || '');
    };

    fetchUserData();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!userData.name) {
        toast.error('Password is required');
        setLoading(false);
        return;
      }
      if (!userData.email) {
        toast.error('Please confirm password');
        setLoading(false);
        return;
      }

      const res = await updateProfile(userData);

      if (res as IUser) {
        auth.updateUser(res as IUser);
        setToLocalStorage('user', res as IUser);
        setLoading(false);
        if ((res as IUser).role === EUserRole.SYSTEM_ADMIN) {
          router.push('/');
        }
      } else {
        toast.error((res as IHttpException).message);
        setLoading(false);
      }
    } catch (error) {
      toast.error((error as IHttpException).message);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="relative flex size-[80px] items-center justify-center rounded-full bg-backgroundAccent text-4xl font-medium text-white">
        {/* <AddProfilePicturePopup /> */}
        {/* {user?.profilePicture ? (
          <img src={user?.profilePicture} alt={profileInitials} />
        ) : (
          <div>{profileInitials}</div>
        )} */}
        <div>{profileInitials}</div>
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch">
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
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="text"
            disabled
            value={userData.email}
            className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </div>
        <Button
          type="submit"
          text="Save"
          className="size-fit self-center bg-gray-50 p-1 text-sm font-normal text-gray-400"
          color="#FFFFFF"
          handleClick={handleSubmit}
          loading={isLoading}
        />
      </div>
    </div>
  );
};
export default PersonalDetails;
