import type { SetStateAction } from 'react';
import { useState } from 'react';

import Button from '@/components/Button';
import TableRow from '@/components/ContributorRow';
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
    // Add more users as needed
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
            <table className="w-full">
              <thead className="text-left text-sm font-light">
                <tr>
                  <th>Contributor</th>
                  <th>Role</th>
                  <th>Contributions</th>
                  <th className="mr-0">
                    <Search onSearch={handleSearch} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <TableRow key={user.name} user={user} />
                ))}
              </tbody>
            </table>
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
