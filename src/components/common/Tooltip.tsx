/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';

interface ITooltip {
  trigger: JSX.Element;
  options: Array<{ label: JSX.Element; action: () => void; title: string }>;
  optionWidth?: string;
}

const Tooltip: React.FC<ITooltip> = ({
  trigger,
  options,
  optionWidth = 'w-60',
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={tooltipRef}>
      <div onClick={handleClick} className="cursor-pointer">
        {trigger}
      </div>
      {showOptions && (
        <div
          className={`absolute right-0 z-10 rounded-lg bg-white px-6 py-4 shadow-popover ${optionWidth}`}
        >
          {options.map((option) => (
            <div
              key={option.title}
              onClick={option.action}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
