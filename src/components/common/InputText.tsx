/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

interface IInputText {
  label: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  defaultValue?: string;
  background?: string;
  placeholder?: string;
  hasError?: boolean;
  onChange?: (object: { name: string; value: string }) => void;
}

const InputText: React.FC<IInputText> = ({
  label,
  type = 'text',
  defaultValue,
  onChange,
  background = 'bg-gray-50',
  placeholder = '',
  hasError = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange({ name: e.target.name, value: e.target.value });
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-raleway text-sm text-gray-600">{label}</div>
      {type === 'password' ? (
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder === '' ? label : placeholder}
            className={`w-full rounded-lg  ${background} px-4 py-2 text-[#6B6B6B] outline-none`}
            value={value}
            name={label}
            onChange={handleChange}
          />
          <div
            className="absolute right-3 top-1/4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
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
      ) : (
        <input
          type={type}
          placeholder={placeholder === '' ? label : placeholder}
          className={
            hasError
              ? `w-full rounded-lg border border-secondary-orange ${background} px-4 py-2 text-[#6B6B6B] outline-none`
              : `w-full rounded-lg  ${background} px-4 py-2 text-[#6B6B6B] outline-none`
          }
          value={value}
          name={label}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export { InputText };
