import FileSaver from 'file-saver';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

import Button from '@/components/common/Button';
import { DatePicker } from '@/components/common/DatePicker';
import AppUsageChart from '@/components/insights/AppUsageChart';
import DataCard from '@/components/insights/DataCard';
import Layout from '@/layouts/dashboard/Layout';
import type { ValueType } from '@/types/common.types';

import ErrorMessage from '../../components/common/ErrorMessage';
import Spinner from '../../components/common/Spinner';
import {
  fetchStatsService,
  fetchUsersService,
} from '../../services/stats.service';
import type { Data, IUserResponse } from '../../types/stats.types';

const Insights = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [stats, setStats] = useState<Data>({} as Data);
  const [users, setUsers] = useState<IUserResponse>({} as IUserResponse);
  const [isLoading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: ValueType) => {
    setSelectedDate(e.value.toString());
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const currentDateFormatted = `${year}-${month}-${day}`;
    return currentDateFormatted;
  };

  useEffect(() => {
    setSelectedDate(getCurrentDate());
  }, []);

  useEffect(() => {
    setLoading(true);

    fetchStatsService()
      .then((data) => {
        setStats(data as Data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err as string);
        setLoading(false);
      });

    fetchUsersService()
      .then((data) => {
        setUsers(data as IUserResponse);

        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err as string);
        setLoading(false);
      });
  }, []);

  const usageData = [
    { name: '1', uv: 100 },
    { name: '5', uv: 300 },
    { name: '15', uv: 200 },
    { name: '20', uv: 400 },
    { name: '25', uv: 500 },
    { name: '30', uv: 350 },
  ];

  const headers = [
    { label: 'Names', key: 'name' },
    { label: 'Phone number', key: 'phoneNumber' },
    { label: 'Email', key: 'email' },
    { label: 'Gender', key: 'gender' },
    { label: 'Location', key: 'location' },
  ];

  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToXLS = (myData: any, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(headers, {
      header: ['name', 'phoneNumber', 'email', 'gender', 'location'],
      skipHeader: true,
    });
    XLSX.utils.sheet_add_json(ws, myData, {
      header: ['name', 'phoneNumber', 'email', 'gender', 'location'],
      skipHeader: false,
    });
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  // const chartData = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  // ];
  const rate = 2;
  const isPositiveChange = rate > 0;
  const rateColor = isPositiveChange ? '#06AA8D' : '#D44333';
  const arrowImageSource = isPositiveChange
    ? '/assets/icons/arrow_positive.png'
    : '/assets/icons/arrow_negative.png';

  return (
    <Layout>
      <div>
        <div className="right-4 my-4 flex flex-col items-center justify-between rounded-lg bg-gold p-8 md:m-4 md:flex-row">
          <div className="flex w-full flex-col items-center gap-16 md:w-1/2 md:flex-row">
            <img
              src="/assets/images/insights-hand.png"
              alt=""
              width={75}
              height={76}
            />
            <div>
              <h1 className="text-2xl font-normal leading-9 text-white">
                Need your data?
              </h1>
              <p className="text-sm font-light leading-5 text-white">
                Download an Excel sheet containing all your data to do further
                analysis and visualization.
              </p>
            </div>
          </div>
          <Button
            icon="/assets/icons/export.png"
            text="Export Data"
            backgroundColor="white"
            color="gold"
            className="text-gold"
            handleClick={() => {
              exportToXLS(
                users.data.map((user) => {
                  return {
                    name: user.name,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    gender: user.gender,
                    location: user.location,
                  };
                }),
                'Users_Infomation_xlsx'
              );
            }}
          />
        </div>
        {stats.users ? (
          <div className="flex w-full flex-col md:flex-row">
            {errorMsg && (
              <ErrorMessage
                errorMessage={errorMsg}
                setErrorMessage={setErrorMsg}
              />
            )}
            <DataCard
              title="Active Users"
              number={stats.users?.activeUsers?.length.toString() || '0'}
              data={stats.users?.activeUsers}
            />
            <DataCard
              title="Published Devotionals"
              number={
                stats.devotions?.publishedDevotions?.length.toString() || '0'
              }
              data={stats.devotions?.publishedDevotions}
            />
            <DataCard
              title="Draft Devotionals"
              number={
                stats.devotions?.draftedDevotions?.length.toString() || '0'
              }
              data={stats.devotions?.draftedDevotions}
            />
          </div>
        ) : null}

        {isLoading ? (
          <div className="flex h-screen w-full items-center justify-center">
            <Spinner className="h-5 w-5" />
          </div>
        ) : (
          <div className="flex w-[98%] flex-col items-start justify-between gap-4 md:m-4 md:flex-row">
            <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-gray-200 bg-white p-8 ">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-56">
                <h1 className="text-2xl font-normal">App&apos;s Usage</h1>
                <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4">
                  <p className="flex flex-row items-center text-sm font-light text-[#737B8B]">
                    <span
                      className="flex flex-row items-center pr-2"
                      style={{ color: rateColor }}
                    >
                      <img
                        src={arrowImageSource}
                        alt=""
                        className="mr-2 h-3.5 w-3.5"
                      />
                      {rate}%
                    </span>{' '}
                    compared to last week
                  </p>
                  <DatePicker
                    name="selectedDate"
                    value={selectedDate}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-[300px]  md:h-[269px] md:w-[95%]">
                <AppUsageChart data={usageData} />
              </div>
            </div>
            {/* <div className="flex flex-col flex-wrap items-start w-full gap-6 p-8 bg-white border border-gray-200 border-solid rounded-lg md:mx-8">
            <h1 className="text-2xl font-normal">Listening</h1>
            <PieChartComponent data={chartData} />
            <div className="flex flex-row items-start justify-between order-2 w-full gap-2 justify-self-stretch">
              <div className="flex flex-row items-center">
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#3AA76D',
                  }}
                />
                <p className="ml-1 text-sm font-light leading-5">
                  Listens 100%
                </p>
              </div>
              <div className="flex flex-row items-center ml-2">
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#ED6E33',
                  }}
                />
                <p className="ml-1 text-sm font-light leading-5">Drops</p>
              </div>
              <div className="flex flex-row items-center ml-2">
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#D44333',
                  }}
                />
                <p className="ml-1 text-sm font-light leading-5">
                  No listening
                </p>
              </div>
            </div>
          </div> */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Insights;
