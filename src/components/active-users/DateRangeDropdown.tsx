import React, { useEffect, useRef, useState } from 'react';

import type { DateRangeFilter } from '@/types/active-users.types';

interface IDateRangeDropdownProps {
  value: DateRangeFilter;
  onChange: (value: DateRangeFilter) => void;
}

const RANGE_OPTIONS: Array<{
  value: DateRangeFilter;
  label: string;
  shortLabel: string;
}> = [
  { value: '24h', label: 'Last 24 hours', shortLabel: '24H' },
  { value: '7d', label: 'Last 7 days', shortLabel: '7D' },
  { value: '30d', label: 'Last 30 days', shortLabel: '30D' },
  { value: '6m', label: 'Last 6 months', shortLabel: '6M' },
  { value: 'ytd', label: 'This year (YTD)', shortLabel: 'YTD' },
  { value: 'all', label: 'All time', shortLabel: 'All' },
];

export function DateRangeDropdown({
  value,
  onChange,
}: IDateRangeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected =
    RANGE_OPTIONS.find((o) => o.value === value) ?? RANGE_OPTIONS[1];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (range: DateRangeFilter) => {
    onChange(range);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-colors hover:border-indigo-300"
      >
        <svg
          className="size-3.5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {selected?.shortLabel ?? '7D'}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
          {RANGE_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`block w-full px-3 py-2 text-left text-xs font-medium transition-colors hover:bg-gray-50 ${
                option.value === value ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
