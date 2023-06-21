import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/common/Button';
import { OtpInput } from '@/components/common/OTPInput';

const ConfirmEmail = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleSubmit = () => {
    router.push('/auth/reset-password');
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
          <OtpInput
            onChange={({ value }) => setFormData({ ...formData, email: value })}
          />
        </div>
        <div className="flex justify-center pt-12">
          <Button type="submit" handleClick={handleSubmit} text="Confirm" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
