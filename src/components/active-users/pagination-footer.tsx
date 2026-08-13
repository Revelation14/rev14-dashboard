import React from 'react';

// 1. Export the Interface so parent components or test suites can reference it
export interface IPaginationFooterProps {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onLimitChange: (newLimit: number) => void;
}

// 2. Named Export using standard hoisted function declaration
export function PaginationFooter({
  page,
  limit,
  totalCount,
  totalPages,
  onPageChange,
  onLimitChange,
}: IPaginationFooterProps) {
  // Math for user-friendly range display
  const startItem = totalCount === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, totalCount);

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-4 sm:flex-row">
      {/* 1. Item Range Summary */}
      <p className="text-xs text-gray-500">
        Showing <span className="font-semibold text-gray-900">{startItem}</span>{' '}
        to <span className="font-semibold text-gray-900">{endItem}</span> of{' '}
        <span className="font-semibold text-gray-900">{totalCount}</span> active
        users
      </p>

      {/* 2. Controls Group */}
      <div className="flex items-center space-x-6">
        {/* Page Size Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">Rows per page:</span>
          <select
            value={limit}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onLimitChange(Number(e.target.value))
            }
            className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 outline-none focus:border-blue-500"
          >
            {[10, 25, 50].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span className="text-xs font-medium text-gray-600">
            Page {page} of {totalPages || 1}
          </span>

          <button
            type="button"
            disabled={page >= totalPages || totalCount === 0}
            onClick={() => onPageChange(page + 1)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
