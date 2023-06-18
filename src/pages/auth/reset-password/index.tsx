/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const handleSubmit = () => {
    router.push(`/`);
  };

  return (
    <div className="flex h-screen flex-col justify-center bg-gray-50 font-raleway">
      <div className="m-auto min-w-[280px] rounded-2xl border border-gray-200 bg-white px-8 py-16 sm:min-w-[420px]">
        <div className="text-center text-2xl font-semibold text-gray-600">
          Set New Password
        </div>
        <div className="flex flex-col gap-6 pt-14">
          <InputText
            label="Password"
            type="password"
            onChange={({ value }) =>
              setFormData({ ...formData, password: value })
            }
            placeholder="Password"
          />
          <InputText
            label="Confirm Password"
            type="password"
            onChange={({ value }) =>
              setFormData({ ...formData, confirmPassword: value })
            }
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center pt-16">
          <Button
            type="submit"
            handleClick={handleSubmit}
            text="Reset Password"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
