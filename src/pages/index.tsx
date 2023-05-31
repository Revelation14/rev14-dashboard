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

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="h-screen min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
        <Button
          icon="/assets/icons/person-add-sharp.svg"
          text="Add contributors"
          backgroundColor="gray-150"
          color="black"
        />
        <Search onSearch={handleSearch} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className="pb-9">
          <DatePicker
            name="selectedDate"
            value={selectedDate}
            handleChange={handleChange}
          />
        </div>
        <Tabs activeIndex={0}>
          <Tab label="All">
            <div className="flex items-center gap-8">
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

export default Index;
