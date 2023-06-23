import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

interface ITextArea {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (object: { name: string; value: string }) => void;
}

const TextArea: React.FC<ITextArea> = ({
  label,
  defaultValue,
  placeholder = '',
  onChange,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      <div className="text-sm text-gray-600">{label}</div>
      <textarea
        rows={5}
        placeholder={placeholder}
        className="w-full rounded-lg bg-gray-50 px-4 py-2 text-[#6B6B6B] outline-none"
        value={value}
        name={label}
        onChange={handleChange}
      />
    </div>
  );
};

export { TextArea };
