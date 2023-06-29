import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';

import ErrorMessage from '../../../components/common/ErrorMessage';
import { requestPasswordRecovery } from '../../../services/auth.service';
import type { IHttpException } from '../../../types/user.types';

const PasswordRecovery = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleSubmit = async () => {
    setLoading(true);
    localStorage.setItem('email', formData.email);

    try {
      const res = await requestPasswordRecovery(formData);
      if (res.data.success) {
        router.push('/auth/confirm-email');
      } else {
        setErrorMsg((res as IHttpException).message);
      }
    } catch (error) {
      setErrorMsg((error as IHttpException).message);
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen flex-col justify-center bg-gray-50">
      <div className="m-auto min-w-[280px] rounded-2xl border border-gray-200 bg-white px-8 py-16 sm:min-w-[420px]">
        <div className="text-center text-2xl font-semibold text-gray-600">
          What’s your email?
        </div>
        <div className="pt-4 text-center text-gray-600">
          We’ll send you a code to confirm <br />
          your account.
        </div>
        <div className="flex flex-col gap-6 pt-8">
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
        </div>
        <div className="flex justify-center pt-12">
          <Button
            type="submit"
            handleClick={handleSubmit}
            text="Submit"
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
