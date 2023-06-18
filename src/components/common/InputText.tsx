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
  onChange?: (object: { name: string; value: string }) => void;
}

const InputText: React.FC<IInputText> = ({
  label,
  type = 'text',
  defaultValue,
  onChange,
  background = 'bg-gray-50',
  placeholder = '',
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange({ name: e.target.name, value: e.target.name });
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-gray-600">{label}</div>
      <input
        type={type}
        placeholder={placeholder === '' ? label : placeholder}
        className={`w-full rounded-lg ${background} px-4 py-2 text-[#6B6B6B] outline-none`}
        value={value}
        name={label}
        onChange={handleChange}
      />
    </div>
  );
};

export { InputText };
