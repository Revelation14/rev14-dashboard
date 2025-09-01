/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import router from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import { getFromLocalStorage } from '@/lib/helper';
import { updatePassword } from '@/services/auth.service';
import { useAuth } from '@/store/auth.store';
import type { IHttpException } from '@/types/common.types';
import type { IUpdatePassword, IUser } from '@/types/user.types';

import Button from '../common/Button';

const Security = () => {
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = JSON.parse(getFromLocalStorage('user')) as IUser;
  const auth = useAuth();

  const savePassword = async () => {
    try {
      setPasswordLoading(true);
      if (!password) {
        toast.error('Password is required');
        setPasswordLoading(false);
        return;
      }
      if (!confirmPassword) {
        toast.error('Please confirm password');
        setPasswordLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        toast.error('Confirm password does not match.');
        setPasswordLoading(false);
        return;
      }

      const updatePasswordDto: IUpdatePassword = {
        oldPassword: currentPassword,
        password,
      };

      const res = await updatePassword(user.id, updatePasswordDto);

      if (res?.data?.message === 'Password changed successfully') {
        localStorage.clear();
        auth.logout();
        router.push('/auth/login');
      } else {
        toast.error((res as IHttpException).message);
        setPasswordLoading(false);
      }
    } catch (error) {
      toast.error((error as IHttpException).message);
      setPasswordLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <h1 className="text-base font-medium text-gray-400">Security</h1>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gray-50 p-6">
          <div className="flex flex-col gap-6">
            <label htmlFor="password" className="text-sm font-medium">
              Current Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder="Password.."
                className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-1/4 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <img
                    src="/assets/icons/eye-open.svg"
                    alt="open"
                    width={20}
                    height={20}
                  />
                ) : (
                  <img
                    src="/assets/icons/eye-closed.svg"
                    alt="closed"
                    width={20}
                    height={20}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="password" className="text-sm font-medium">
              New Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Create a password.."
                className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
                value={password}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-1/4 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <img
                    src="/assets/icons/eye-open.svg"
                    alt="open"
                    width={20}
                    height={20}
                  />
                ) : (
                  <img
                    src="/assets/icons/eye-closed.svg"
                    alt="closed"
                    width={20}
                    height={20}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Create a password.."
                className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-5 text-sm font-medium text-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-1/4 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <img
                    src="/assets/icons/eye-open.svg"
                    alt="open"
                    width={20}
                    height={20}
                  />
                ) : (
                  <img
                    src="/assets/icons/eye-closed.svg"
                    alt="closed"
                    width={20}
                    height={20}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          text="Save"
          className="size-fit self-center bg-gray-50 p-1 text-sm font-normal text-gray-400"
          color="#FFFFFF"
          handleClick={savePassword}
          loading={passwordLoading}
        />
      </div>
    </div>
  );
};

export default Security;
