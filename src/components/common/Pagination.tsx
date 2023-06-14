import React from 'react';

import usePaginationStore from '@/store/pagination';

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const { currentPage, totalPages, setCurrentPage } = usePaginationStore();

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = parseInt(e.target.value, 10);
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <div className="bottom-5 left-0 flex w-full flex-row items-center justify-center gap-3 font-raleway">
      <button
        type="button"
        className="flex items-center px-4 py-3 hover:bg-gray-50"
        onClick={handlePrevClick}
      >
        <img
          className="mr-4"
          src="/assets/icons/left-arrow.svg"
          alt=""
          width={5.6}
          height={8}
        />
        Prev
      </button>
      <div className="relative ml-1 flex h-full items-center rounded-lg border-gray-150 bg-gray-150">
        <span className="absolute right-4 top-4">
          <img src="/assets/icons/dropdown.svg" alt="" />
        </span>
        <select
          className="h-full w-16 cursor-pointer appearance-none items-center space-x-3 bg-transparent p-2 px-4 outline-none"
          value={currentPage}
          onChange={handlePageSelect}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <span className="text-sm">of {totalPages}</span>
      <button
        type="button"
        className="flex items-center px-4 py-3 hover:bg-gray-50"
        onClick={handleNextClick}
      >
        Next
        <img
          className="ml-4"
          src="/assets/icons/right-arrow.svg"
          alt=""
          width={5.6}
          height={8}
        />
      </button>
    </div>
  );
};

export default Pagination;
