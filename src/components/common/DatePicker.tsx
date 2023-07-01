import { useEffect, useState } from 'react';

import type { ValueType } from '@/types/common.types';

interface IDatePicker {
  name: string;
  value: string;
  handleChange: (_e: ValueType<Event>) => void;
}
const DatePicker: React.FC<IDatePicker> = ({ name, value, handleChange }) => {
  const [innerValue, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
    if (handleChange && innerValue !== e.target.value)
      handleChange({ name, value: e.target.value, event: e });
  };

  const onReset = (e: any) => {
    setValue('');
    handleChange({ name, value: '', event: e });
  };

  useEffect(() => {
    if (handleChange && innerValue !== value) handleChange({ name, value });
  }, [name, value]);

  return (
    <div>
      <input
        type="date"
        name={name}
        id="datepicker"
        value={innerValue}
        onChange={onChange}
        onReset={onReset}
        className="rounded-full bg-gray-150 px-3 py-2 outline-none"
      />
    </div>
  );
};

export { DatePicker };
