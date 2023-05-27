import type { SetStateAction } from 'react';
import { useState } from 'react';

import Button from '@/components/Button';
import { Card } from '@/components/Card';
import { DatePicker } from '@/components/DatePicker';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import { Tab, Tabs } from '@/components/Tabs';
import Layout from '@/layouts/dashboard/Layout';
import type { ValueType } from '@/types/common.types';

const Devotions = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());
  };

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const totalPages = 20;

  return (
    <Layout>
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex flex-col-reverse gap-4 pb-9 md:flex-row md:items-center md:justify-between md:gap-0">
          <DatePicker
            name="selectedDate"
            value={selectedDate}
            handleChange={handleChange}
          />
          <Button
            icon="/assets/icons/plus.svg"
            text="Add Devotional"
            className="hover:bg-gold/75"
          />
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
            <div className="mb-4 flex flex-col gap-4 overflow-y-auto">
              {[1, 2, 3].map((_value) => (
                <div
                  className="flex flex-col gap-8 lg:flex-row lg:items-center"
                  key={_value}
                >
                  <div>
                    <Card
                      title="Purity of the soul"
                      date="2023-05-14T22:03:30.000Z"
                      description="Comets are a big source of meteoroids because of the nature of those
                  long tails. A large amount of dust."
                      user={{ firstName: 'Ava', lastName: 'Gregoraci' }}
                      views={20}
                      status="published"
                    />
                  </div>
                  <div>
                    <Card
                      title="Purity of the soul"
                      date="2023-03-12T00:12:30.000Z"
                      description="Comets are a big source of meteoroids because of the nature of those
          long tails. A large amount of dust."
                      user={{ firstName: 'Loraine', lastName: 'Waters' }}
                      views={100}
                      status="unpublished"
                    />
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Tab>
          <Tab label="Waiting for approval">
            <h2 className="text-lg text-green-400">Waiting for approval</h2>
          </Tab>
          <Tab label="Published">
            <h2 className="text-lg font-bold text-yellow-300">Published</h2>
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Devotions;
