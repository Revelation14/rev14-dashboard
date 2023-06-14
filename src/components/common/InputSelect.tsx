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
      <div className="text-sm text-gray-600">{label}</div>
      <div className="relative inline-block w-full">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className={`${background} w-full cursor-pointer rounded-lg p-2 text-[#6B6B6B] outline-none`}
        >
          <option value="">Select {label}</option>
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
