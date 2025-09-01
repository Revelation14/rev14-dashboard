import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface IInputSelect {
  label: string;
  background: string;
  roundedStyle?: string;
  options: Array<{ value: string; label: string }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const InputSelect: React.FC<IInputSelect> = ({
  label,
  background,
  options,
  roundedStyle = 'rounded-full',
  onChange,
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <div className="text-sm text-black">{label}</div>
      <div
        className={`relative ml-1 flex size-full items-center gap-2 ${roundedStyle} border-gray-150 bg-gray-150`}
      >
        <span className="absolute right-4 top-4">
          <img src="/assets/icons/dropdown.svg" alt="" />
        </span>
        <select
          value={defaultValue || selectedOption}
          onChange={handleOptionChange}
          className={`${background} mr-2 w-full cursor-pointer appearance-none items-center space-x-3 ${roundedStyle} bg-transparent p-2 px-4 outline-none`}
        >
          <option value="">{label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export { InputSelect };
