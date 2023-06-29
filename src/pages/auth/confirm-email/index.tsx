import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import { OtpInput } from '@/components/common/OTPInput';

import ErrorMessage from '../../../components/common/ErrorMessage';
import { setToLocalStorage } from '../../../lib/helper';
import { verifyOtp } from '../../../services/auth.service';
import type { IHttpException } from '../../../types/user.types';

const ConfirmEmail = () => {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    code: '',
    email: '',
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setFormData({ ...formData, email });
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await verifyOtp(formData);
      if (res.data.success) {
        setToLocalStorage('token', res.data.data.accessToken);
        router.push('/auth/reset-password');
      } else {
        setErrorMsg((res as IHttpException).message);
      }
    } catch (error) {
      setErrorMsg((error as IHttpException).message);
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen flex-col justify-center bg-gray-50 font-raleway">
      <div className="m-auto min-w-[280px] rounded-2xl border border-gray-200 bg-white px-8 py-16 sm:min-w-[420px]">
        <div className="text-center text-2xl font-semibold text-gray-600">
          Confirm Email
        </div>
        <div className="pt-4 text-center text-gray-600">
          Enter the code you received on your email.
        </div>
        <div className="flex flex-col gap-6 pt-8">
          {errorMsg && (
            <ErrorMessage
              errorMessage={errorMsg}
              setErrorMessage={setErrorMsg}
            />
          )}
          <OtpInput
            onChange={({ value }) => setFormData({ ...formData, code: value })}
          />
        </div>
        <div className="flex justify-center pt-12">
          <Button
            type="submit"
            handleClick={handleSubmit}
            text="Confirm"
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
