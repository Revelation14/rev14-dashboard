/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Badge } from '@/components/common/Badge';
import Pagination from '@/components/common/Pagination';
import { toTitleCase } from '@/lib/helper';
import { getDevotionsByContributor } from '@/services/devotion.service';
import usePaginationStore from '@/store/pagination';
import type { ValueType } from '@/types/common.types';
import type { IDevotion } from '@/types/devotion.types';
import { type IUser } from '@/types/user.types';

import { DatePicker } from '../common/DatePicker';
import NoDataAvailable from '../common/NoDataAvailable';
import Spinner from '../common/Spinner';
import SingleDevotion from '../devotions/single-devotion';

interface IViewContributor {
  contributor: IUser;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  rowsPerPage: number;
}

const ViewContributor: React.FC<IViewContributor> = ({
  contributor,
  setShowViewSplitScreens,
  rowsPerPage = 6,
}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [devotions, setDevotions] = useState<IDevotion[]>([]);

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());
  };
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  useEffect(() => {
    const totalPages = Math.ceil((devotions?.length ?? 0) / rowsPerPage);
    setCurrentPage(1); // Reset the current page when the data changes
    usePaginationStore.setState({ totalPages });
  }, [devotions, rowsPerPage, setCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (contributor?.id) {
      setLoading(true);
      getDevotionsByContributor(contributor.id)
        .then((data) => {
          setDevotions(data as IDevotion[]);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err);
          setLoading(false);
        });
    }
  }, [contributor?.id]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        {/** Top */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="h-8 w-8 rounded-full bg-backgroundAccent pt-1 text-center text-lg text-white">
                {contributor.name?.split(' ')[0]?.charAt(0) ?? ''}
                {contributor.name?.split(' ')[1]?.charAt(0) ?? ''}
              </span>
              <span className="text-lg font-medium text-black">
                {contributor.name}
              </span>
              <Badge
                title={toTitleCase(
                  contributor.role?.replaceAll('_', ' ') ?? ''
                )}
                backgroundColor={
                  'bg-purple'
                  // contributor.role === EUserRole.SYSTEM_ADMIN
                  //   ? 'bg-purple'
                  //   : 'bg-blue-600'
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
      <div className="text-center text-xl font-medium">
        {devotions.length} Contributions
      </div>
      {devotions.length !== 0 && (
        <DatePicker
          name="selectedDate"
          value={selectedDate}
          handleChange={handleChange}
        />
      )}
      <div className="flex min-h-screen flex-col gap-4">
        {loading ? (
          <div className="my-4 flex items-center justify-center">
            <Spinner className="h-12 w-12" />
          </div>
        ) : devotions.length === 0 ? (
          <NoDataAvailable />
        ) : (
          devotions.map((devotion) => (
            <SingleDevotion
              key={devotion.id}
              devotion={devotion}
              setShowViewSplitScreens={setShowViewSplitScreens}
            />
          ))
        )}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

export default ViewContributor;
