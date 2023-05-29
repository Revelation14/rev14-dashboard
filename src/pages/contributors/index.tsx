import type { SetStateAction } from 'react';
import { useState } from 'react';

import Button from '@/components/AddButton';
import Table from '@/components/customTable';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import { Tab, Tabs } from '@/components/Tabs';
import Layout from '@/layouts/dashboard/Layout';

const Index = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const users = [
    {
      image: '/assets/images/contributor.png',
      name: 'John Doe',
      role: 'Admin',
      contributions: 10,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'Jane Smith',
      role: 'Editor',
      contributions: 5,
    },
  ];
  return (
    <Layout>
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
        <Tabs
          activeIndex={0}
          headerComponent={
            <Button
              icon="/assets/icons/person-add-sharp.svg"
              text="Add contributors"
            />
          }
          hasBorder={false}
        >
          <Tab label="All">
            <Table
              style={{ width: '100%' }}
              className="w-full"
              columns={[
                <span key="contributor" className="text-sm font-light">
                  Contributor
                </span>,
                <span key="role" className="text-sm font-light">
                  Role
                </span>,
                <span key="contributions" className="text-sm font-light">
                  Contributions
                </span>,
                <Search
                  key="search"
                  className="text-sm font-light"
                  onSearch={handleSearch}
                />,
              ]}
              data={users.map((user) => [
                <div key={`contributor-${user.name}`} className="mt-10">
                  <div className="flex items-center text-lg font-normal">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="mr-2 hidden h-12 w-12 rounded-full md:block"
                    />
                    <span className="text-sm md:text-lg">{user.name}</span>
                  </div>
                </div>,
                <div key={`role-${user.name}`} className="mt-10">
                  <div className="h-fit w-fit rounded-3xl bg-purple px-3 text-xs font-light text-white md:text-base">
                    {user.role}
                  </div>
                </div>,
                <div key={`contributions-${user.name}`} className="mt-10">
                  {user.contributions} contributions
                </div>,
                <div
                  key={`actions-${user.name}`}
                  className="mt-10 flex items-center justify-end gap-6 sm:gap-1"
                >
                  <button
                    type="button"
                    className="mr-6 h-8 w-14 rounded-2xl bg-gray-300 text-sm font-normal hover:bg-gray-150"
                  >
                    View
                  </button>
                  <img src="/assets/icons/three-dots.svg" alt="" />
                </div>,
              ])}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Tab>
          <Tab label="Suspended">
            <h2 className="text-lg text-green-400">suspended</h2>
          </Tab>
          <Tab label="closed">
            <h2 className="text-lg font-bold text-yellow-300">closed</h2>
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
