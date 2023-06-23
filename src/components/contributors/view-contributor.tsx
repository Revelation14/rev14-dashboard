/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { Badge } from '@/components/common/Badge';
import Pagination from '@/components/common/Pagination';
import usePaginationStore from '@/store/pagination';
import type { ValueType } from '@/types/common.types';

import { DatePicker } from '../common/DatePicker';

interface IViewContributor {
  contributor: {
    firstName: string;
    lastName: string;
    type: 'Submitter' | 'Reviewer';
  };
  devotions: Array<{
    title: string;
    date: string;
    description: string;
    user: { firstName: string; lastName: string };
    views: number;
    status: 'published' | 'unpublished';
  }>;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  rowsPerPage: number;
}

const ViewContributor: React.FC<IViewContributor> = ({
  contributor,
  devotions,
  setShowViewSplitScreens,
  rowsPerPage = 6,
}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());
  };
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  useEffect(() => {
    const totalPages = Math.ceil(devotions.length / rowsPerPage);
    setCurrentPage(1); // Reset the current page when the data changes
    usePaginationStore.setState({ totalPages });
  }, [devotions, rowsPerPage, setCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        {/** Top */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="h-8 w-8 rounded-full bg-backgroundAccent pt-1 text-center text-lg text-white">
                {contributor.firstName.charAt(0)}
              </span>
              <span className="text-lg font-medium text-black">
                {contributor.firstName} {contributor.lastName}
              </span>
              <Badge
                title={
                  contributor.type === 'Submitter' ? 'Submitter' : 'Reviewer'
                }
                backgroundColor={
                  contributor.type === 'Submitter' ? 'bg-purple' : 'bg-blue-600'
                }
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="cursor-pointer rounded-full bg-gray-50 p-3"
              onClick={() => {
                setShowViewSplitScreens(false);
              }}
            >
              <img src="/assets/icons/black-close.svg" alt="" className="w-2" />
            </div>
          </div>
        </div>
        {/** End of Top */}
      </div>
      <div className="text-center text-xl font-medium">20 Contributions</div>
      <DatePicker
        name="selectedDate"
        value={selectedDate}
        handleChange={handleChange}
      />
      <div className="flex min-h-screen flex-col gap-4">
        {devotions.map((devotion) => (
          <div
            className="flex cursor-pointer flex-col items-start gap-4 md:flex-row"
            key={devotion.title}
          >
            <div className="pt-5 text-sm font-light text-gray-600">
              {moment(devotion.date).format('MMM')}{' '}
              {moment(devotion.date).format('DD')}{' '}
              <span className="md:text-xl">
                {moment(devotion.date).format('YYYY')}
              </span>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl border-2 border-gray-150  p-2 pr-4 hover:shadow-lg md:flex-row">
              <div className="w-full">
                <div className="relative h-full w-full lg:h-40 lg:w-40">
                  <img
                    src="/assets/images/Image.png"
                    alt=""
                    className="h-full w-full rounded-xl object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2" />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">{devotion.title}</div>
                  <div className="text-sm font-light text-gray-600">
                    {moment(devotion.date).format('HH:MM:a')}
                  </div>
                </div>
                <div className="max-h-10 overflow-hidden text-sm text-gray-850">
                  <span
                    className="text-ellipsis"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                    }}
                  >
                    {devotion.description}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      title={
                        devotion.status === 'published'
                          ? 'Published'
                          : 'Unapproved'
                      }
                      backgroundColor={
                        devotion.status === 'published'
                          ? 'bg-secondary-green'
                          : 'bg-secondary-orange'
                      }
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {devotion.views} Views
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

export default ViewContributor;
