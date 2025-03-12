/* eslint-disable no-return-assign */
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

interface IOtpInput {
  background?: string;
  placeholder?: string;
  onChange?: (object: { value: string }) => void;
}

const OtpInput: React.FC<IOtpInput> = ({
  onChange,
  background = 'bg-gray-50',
}) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move the cursor to the previous input box on backspace
    if (e.key === 'Backspace' && otp[index] === '') {
      const prevIndex = index - 1;
      if (inputRefs.current[prevIndex]) {
        // @ts-expect-error can be null
        inputRefs.current[prevIndex].focus();
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    // Update the current input box
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move the cursor to the next input box
    if (value !== '') {
      const nextIndex = index + 1;
      if (inputRefs.current[nextIndex]) {
        // @ts-expect-error can be null
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange({ value: otp.join('') });
    }
  }, [otp]);

  return (
    <div className="flex justify-center gap-2">
      {otp.map((digit, index) => (
        <input
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          title="OTP"
          className={`size-12 rounded-lg text-center text-[#6B6B6B] outline-none ${background}`}
          type="password"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={
            // @ts-expect-error can be null
            (ref) => (inputRefs.current[index] = ref) as unknown as void
          }
        />
      ))}
    </div>
  );
};

export { OtpInput };
