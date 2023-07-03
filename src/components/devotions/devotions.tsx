/* eslint-disable no-console */
import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

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
  const handlePageChange = (page: number) => {
    console.log('Page:', page);
    // You can add your logic to fetch data for the specified page here
  };

  return devotions?.length === 0 ? (
    <NoDataAvailable />
  ) : (
    <>
      <div
        className={`scrollbar mb-4 grid grid-cols-1 gap-4 overflow-y-auto ${
          showAddSplitScreens ? '' : 'md:grid-cols-2'
        }`}
      >
        {devotions?.map((devotion) => (
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
