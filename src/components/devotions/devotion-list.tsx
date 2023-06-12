/* eslint-disable no-console */
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { DatePicker } from '@/components/common/DatePicker';
import Pagination from '@/components/common/Pagination';
import Search from '@/components/common/Search';
import { Tab, Tabs } from '@/components/common/Tabs';
import type { ValueType } from '@/types/common.types';

interface IDevotionList {
  showAddSplitScreens: boolean;
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const DevotionList: React.FC<IDevotionList> = ({
  showAddSplitScreens,
  setShowAddSplitScreens,
  setShowViewSplitScreens,
}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handlePageChange = (page: number) => {
    console.log('Page:', page);
    // You can add your logic to fetch data for the specified page here
  };
  return (
    <>
      <div className="flex flex-col-reverse gap-4 pb-9 md:flex-row md:items-center md:justify-between md:gap-0">
        <DatePicker
          name="selectedDate"
          value={selectedDate}
          handleChange={handleChange}
        />
        {!showAddSplitScreens && (
          <Button
            icon="/assets/icons/plus.svg"
            text="Add Devotional"
            className="hover:bg-gold/75"
            handleClick={() => {
              setShowAddSplitScreens(true);
            }}
          />
        )}
      </div>
      <Tabs
        activeIndex={0}
        headerComponent={
          <div className="pt-6 lg:pt-0">
            <Search onSearch={handleSearch} />
          </div>
        }
      >
        <Tab label="All">
          <div className="scrollbar mb-4 flex flex-col gap-4 overflow-y-auto">
            {[1, 2, 3].map((_value) => (
              <div
                key={_value}
                className="flex flex-col gap-8 lg:flex-row lg:items-center"
              >
                <div>
                  <Card
                    title="Purity of the soul"
                    date="2023-05-14T22:03:30.000Z"
                    description="Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust."
                    user={{ firstName: 'Ava', lastName: 'Gregoraci' }}
                    views={20}
                    status="published"
                    handleClick={() => setShowViewSplitScreens(true)}
                  />
                </div>
                <div>
                  <Card
                    title="Purity of the soul"
                    date="2023-03-12T00:12:30.000Z"
                    description="Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust."
                    user={{ firstName: 'Loraine', lastName: 'Waters' }}
                    views={100}
                    status="unpublished"
                    handleClick={() => setShowViewSplitScreens(true)}
                  />
                </div>
              </div>
            ))}
          </div>
          <Pagination onPageChange={handlePageChange} />
        </Tab>
        <Tab label="Waiting for approval">
          <h2 className="text-lg text-green-400">Waiting for approval</h2>
        </Tab>
        <Tab label="Published">
          <h2 className="text-lg font-bold text-yellow-300">Published</h2>
        </Tab>
      </Tabs>
    </>
  );
};

export default DevotionList;
