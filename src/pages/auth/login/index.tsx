/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useState } from 'react';

import Button from '@/components/common/Button';
import ErrorMessage from '@/components/common/ErrorMessage';
import { InputText } from '@/components/common/InputText';
import { signin } from '@/services/auth.service';
import { useAuth } from '@/store/auth.store';
import type { IHttpException } from '@/types/common.types';
import {
  EStatus,
  EUserRole,
  type IAuth,
  type ILogin,
} from '@/types/user.types';

import { setToLocalStorage } from '../../../lib/helper';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState<ILogin>({
    email: '',
    password: '',
  });
  const router = useRouter();
  const auth = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email && !formData.password) {
      setErrorMsg(`Email and Password is required`);
    } else if (!formData.email) {
      setErrorMsg(`Email is required`);
    } else if (!formData.password) {
      setErrorMsg(`Password is required`);
    } else {
      setLoading(true);
      try {
        const res: any = await signin(formData);
        if ((res as IAuth).accessToken) {
          const userRole = (res as IAuth).user.role;
          setToLocalStorage('user', (res as IAuth).user);
          setToLocalStorage('token', (res as IAuth).accessToken);
          auth.authenticate((res as IAuth).user, (res as IAuth).accessToken);
          if ((res as IAuth).user.status === EStatus.SUSPENDED) {
            setErrorMsg(
              `You have been suspended from using this platform. Please contact the admin for support!`
            );
            router.push('/auth/login');
          } else if (userRole === EUserRole.SYSTEM_ADMIN) {
            router.push('/');
          } else if (userRole === EUserRole.CONTENT_CREATOR) {
            router.push('/devotionals');
          } else {
            setErrorMsg(`You don't have permission to access this platform`);
            router.push('/auth/login');
          }
        } else {
          setErrorMsg((res as IHttpException).message);
        }
      } catch (error) {
        setErrorMsg((error as IHttpException).message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center bg-gray-50 font-raleway">
      <form
        className="m-auto min-w-[280px] rounded-2xl border border-gray-200 bg-white px-8 py-16 sm:min-w-[420px]"
        onSubmit={handleSubmit}
      >
        <div className="text-center text-2xl font-semibold text-gray-600">
          Login
        </div>
        <div className="flex flex-col gap-6 pt-14">
          {errorMsg && (
            <ErrorMessage
              errorMessage={errorMsg}
              setErrorMessage={setErrorMsg}
            />
          )}
          <InputText
            label="Email"
            type="email"
            onChange={({ value }) => setFormData({ ...formData, email: value })}
            placeholder="example@gmail.com"
          />
          <InputText
            label="Password"
            type="password"
            onChange={({ value }) =>
              setFormData({ ...formData, password: value })
            }
            placeholder="Enter Password"
          />
          <div className="flex items-center gap-2 text-gray-600">
            <div>Forgot your password?</div>
            <div
              className="cursor-pointer underline hover:text-gray-650"
              onClick={() => router.push('/auth/password-recovery')}
            >
              Recover your password
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          <Button type="submit" text="Login" loading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default Login;
