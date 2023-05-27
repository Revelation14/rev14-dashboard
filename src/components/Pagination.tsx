/* eslint-disable react/button-has-type */
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSelect = (e: { target: { value: string } }) => {
    const selectedPage = parseInt(e.target.value, 10);
    onPageChange(selectedPage);
  };

  return (
    <div className="bottom-5 left-0 flex w-full flex-row items-center justify-center gap-3 font-raleway">
      <button
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
      <div className="ml-1 flex h-full items-center">
        <select
          className="h-full w-16 cursor-pointer items-center space-x-3 rounded-lg border-none border-gray-200 bg-gray-200 p-2"
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
