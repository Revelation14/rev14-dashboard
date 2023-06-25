import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import { DatePicker } from '@/components/common/DatePicker';
import AppUsageChart from '@/components/insights/AppUsageChart';
import DataCard from '@/components/insights/DataCard';
import PieChartComponent from '@/components/insights/PieChart';
import Layout from '@/layouts/dashboard/Layout';
import type { ValueType } from '@/types/common.types';

const Insights = () => {
  const [selectedDate, setSelectedDate] = useState('');

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

  const graphData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  const usageData = [
    { name: '1', uv: 100 },
    { name: '5', uv: 300 },
    { name: '15', uv: 200 },
    { name: '20', uv: 400 },
    { name: '25', uv: 500 },
    { name: '30', uv: 350 },
  ];

  const chartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];
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
          />
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <DataCard
            title="Active Users"
            number="1056"
            status={-10}
            data={graphData}
          />
          <DataCard
            title="Average Listening time"
            number="2.6 minutes"
            status={10}
            data={graphData}
          />
          <DataCard
            title="Drop Rates"
            number="1056"
            status={50}
            data={graphData}
          />
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-4 md:m-4 md:flex-row">
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
            <div className="w-[300px]  md:h-[269px] md:w-[800px]">
              <AppUsageChart data={usageData} />
            </div>
          </div>
          <div className="flex w-full flex-col flex-wrap items-start gap-6 rounded-lg border border-solid border-gray-200 bg-white p-8 md:mx-8">
            <h1 className="text-2xl font-normal">Listening</h1>
            <PieChartComponent data={chartData} />
            <div className="order-2 flex w-full flex-row items-start justify-between gap-2 justify-self-stretch">
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
              <div className="ml-2 flex flex-row items-center">
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
              <div className="ml-2 flex flex-row items-center">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insights;
