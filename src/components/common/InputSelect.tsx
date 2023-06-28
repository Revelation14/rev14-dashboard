import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface IInputSelect {
  label: string;
  background: string;
  options: Array<{ value: string; label: string }>;
}

const InputSelect: React.FC<IInputSelect> = ({
  label,
  background,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="text-sm text-black">{label}</div>
      <div className="relative ml-1 flex h-full w-full items-center gap-2 rounded-full border-gray-150 bg-gray-150">
        <span className="absolute right-4 top-4">
          <img src="/assets/icons/dropdown.svg" alt="" />
        </span>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className={`${background} mr-2 w-full cursor-pointer appearance-none items-center space-x-3 rounded-full bg-transparent p-2 px-4 outline-none`}
        >
          <option value="">Action {label}</option>
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
