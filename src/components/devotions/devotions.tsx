/* eslint-disable no-console */
import type { Dispatch, FC, SetStateAction } from 'react';
import React, { useEffect } from 'react';

import usePaginationStore from '@/store/pagination';
import type { IDevotion } from '@/types/devotion.types';

import NoDataAvailable from '../common/NoDataAvailable';
import Pagination from '../common/Pagination';
import SingleDevotion from './single-devotion';

interface IDevotions {
  devotions: IDevotion[];
  setShowViewSplitScreens: Dispatch<SetStateAction<boolean>>;
  showAddSplitScreens: boolean;
  setSelectedDevotion: Dispatch<SetStateAction<IDevotion | undefined>>;
}

const Devotions: FC<IDevotions> = ({
  devotions,
  showAddSplitScreens,
  setSelectedDevotion,
  setShowViewSplitScreens,
}) => {
  const rowsPerPage = 6;
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  useEffect(() => {
    const totalPages = Math.ceil(devotions.length / rowsPerPage);
    setCurrentPage(1); // Reset the current page when the data changes
    usePaginationStore.setState({ totalPages });
  }, [devotions, rowsPerPage, setCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentPage = usePaginationStore((state) => state.currentPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = devotions.slice(start, end);

  return paginatedData.length === 0 ? (
    <NoDataAvailable />
  ) : (
    <>
      <div
        className={`scrollbar mb-4 grid grid-cols-1 gap-4 overflow-y-auto ${
          showAddSplitScreens ? '' : 'md:grid-cols-2'
        }`}
      >
        {paginatedData.map((devotion) => (
          <SingleDevotion
            key={devotion.id}
            devotion={devotion}
            setSelectedDevotion={setSelectedDevotion}
            setShowViewSplitScreens={setShowViewSplitScreens}
          />
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </>
  );
};

export default Devotions;
