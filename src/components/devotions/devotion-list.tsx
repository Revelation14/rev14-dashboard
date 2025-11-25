/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import moment from 'moment';
import type { Dispatch, FC, SetStateAction } from 'react';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import { DatePicker } from '@/components/common/DatePicker';
import Search from '@/components/common/Search';
import { Tab, Tabs } from '@/components/common/Tabs';
import type { IHttpException, ValueType } from '@/types/common.types';
import type { IDevotion } from '@/types/devotion.types';
import { EDevotionStatus } from '@/types/devotion.types';

import Spinner from '../common/Spinner';
import Devotions from './devotions';

interface IDevotionList {
  showAddSplitScreens: boolean;
  setShowAddSplitScreens: Dispatch<SetStateAction<boolean>>;
  setShowViewSplitScreens: Dispatch<SetStateAction<boolean>>;
  devotions: IDevotion[];
  allDevotions: IDevotion[];
  setDevotions: Dispatch<SetStateAction<IDevotion[]>>;
  setSelectedDevotion: Dispatch<SetStateAction<IDevotion | undefined>>;
  error?: IHttpException;
  loading: boolean;
}

const DevotionList: FC<IDevotionList> = ({
  showAddSplitScreens,
  setShowAddSplitScreens,
  setShowViewSplitScreens,
  devotions,
  allDevotions,
  setSelectedDevotion,
  error,
  loading,
  setDevotions,
}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());

    if (e.value.toString() === '') {
      setDevotions(allDevotions);
    } else {
      setDevotions(
        allDevotions?.filter((devotion) =>
          moment(devotion.releaseDate).isSame(e.value.toString(), 'day')
        )
      );
    }
  };

  const handleSearch = (query: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setDevotions(
      allDevotions?.filter(
        (devotion) =>
          devotion.title.toLowerCase().includes(query.toLowerCase()) ||
          devotion.speaker.toLowerCase().includes(query.toLowerCase()) ||
          devotion.verse.toLowerCase().includes(query.toLowerCase()) ||
          devotion.content.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleClearSearch = () => {
    setDevotions(allDevotions);
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
      {loading ? (
        <div className="flex items-center justify-center pt-60">
          <Spinner className="size-5" />
        </div>
      ) : error ? (
        <div>
          Error occured. Please logout and login again to resolve this issue.
        </div>
      ) : (
        <Tabs
          activeIndex={0}
          headerComponent={
            <div className="pt-6 lg:pt-0">
              <Search
                onSearch={handleSearch}
                onClearSearch={handleClearSearch}
              />
            </div>
          }
        >
          <Tab label="All">
            <Devotions
              devotions={
                devotions.sort((a, b) => {
                  const releaseDateA = moment(a.releaseDate);
                  const releaseDateB = moment(b.releaseDate);
                  if (releaseDateA.isAfter(releaseDateB)) {
                    return -1; // a should come before b
                  }
                  if (releaseDateA.isBefore(releaseDateB)) {
                    return 1; // b should come before a
                  }
                  return 0; // both timestamps are equal
                }) ?? []
              }
              setShowViewSplitScreens={setShowViewSplitScreens}
              setSelectedDevotion={setSelectedDevotion}
              showAddSplitScreens={showAddSplitScreens}
            />
          </Tab>
          <Tab label="Waiting for approval">
            <Devotions
              devotions={
                devotions
                  ?.filter((dev) => dev.status === EDevotionStatus.DRAFT)
                  .sort((a, b) => {
                    const releaseDateA = moment(a.releaseDate);
                    const releaseDateB = moment(b.releaseDate);
                    if (releaseDateA.isAfter(releaseDateB)) {
                      return -1; // a should come before b
                    }
                    if (releaseDateA.isBefore(releaseDateB)) {
                      return 1; // b should come before a
                    }
                    return 0; // both timestamps are equal
                  }) ?? []
              }
              setShowViewSplitScreens={setShowViewSplitScreens}
              setSelectedDevotion={setSelectedDevotion}
              showAddSplitScreens={showAddSplitScreens}
            />
          </Tab>
          <Tab label="Published">
            <Devotions
              devotions={
                devotions
                  ?.filter((dev) => dev.status === EDevotionStatus.PUBLISHED)
                  .sort((a, b) => {
                    const releaseDateA = moment(a.releaseDate);
                    const releaseDateB = moment(b.releaseDate);
                    if (releaseDateA.isAfter(releaseDateB)) {
                      return -1; // a should come before b
                    }
                    if (releaseDateA.isBefore(releaseDateB)) {
                      return 1; // b should come before a
                    }
                    return 0; // both timestamps are equal
                  }) ?? []
              }
              setShowViewSplitScreens={setShowViewSplitScreens}
              setSelectedDevotion={setSelectedDevotion}
              showAddSplitScreens={showAddSplitScreens}
            />
          </Tab>
        </Tabs>
      )}
    </>
  );
};

export default DevotionList;
