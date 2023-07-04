import React, { useEffect } from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

import type { ActiveUser } from '../../types/stats.types';

interface IdataCardProps {
  title: string;
  number: string;
  data: any;
}

const DataCard: React.FC<IdataCardProps> = ({ title, number, data }) => {
  const [isPositiveChange, setIsPositiveChange] = React.useState(false);
  const [comparisonText, setComparisonText] = React.useState('');
  const statusColor = isPositiveChange ? '#06AA8D' : '#D44333';
  const lineColor = isPositiveChange ? '#06AA8D' : '#D44333';
  const arrowImageSource = isPositiveChange
    ? '/assets/icons/arrow_positive.png'
    : '/assets/icons/arrow_negative.png';

  useEffect(() => {
    const todayIndex = data.findIndex((user: ActiveUser) => {
      const joinedDate =
        new Date(user.joinedAt) || new Date(user.createdAt || '');
      const today = new Date();
      return (
        joinedDate.getDate() === today.getDate() &&
        joinedDate.getMonth() === today.getMonth() &&
        joinedDate.getFullYear() === today.getFullYear()
      );
    });

    const yesterdayIndex = todayIndex - 1;

    if (yesterdayIndex < 0) {
      setIsPositiveChange(true);
    }

    const todayUsers = data[todayIndex];
    const yesterdayUsers = data[yesterdayIndex];

    const todayCount = todayUsers?.length || 0;
    const yesterdayCount = yesterdayUsers?.length || 0;

    const diff = todayCount - yesterdayCount;
    const percentage = ((diff / yesterdayCount) * 100).toFixed(2);

    if (diff > 0) {
      setComparisonText(`+${percentage}% (${diff} users increased)`);
    } else if (diff < 0) {
      setComparisonText(
        `-${Math.abs(Number(percentage))}% (${Math.abs(diff)} users fell short)`
      );
    } else {
      setComparisonText('0');
    }
  }, [data]);
  return (
    <div className="my-4 flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white p-6 md:m-4 md:flex-row">
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-sm font-light leading-6">{title}</h3>
        <p className="text-2xl font-normal leading-6">{number}</p>
        <p className="flex flex-row items-center text-sm font-normal leading-6">
          <img src={arrowImageSource} alt="" className="mr-1 h-3.5 w-3.5" />
          <span style={{ color: statusColor }}>{comparisonText} </span>
          <span className="ml-2 text-black"> since yesterday</span>
        </p>
      </div>
      <div className="h-24 w-full max-w-lg md:w-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke={lineColor}
              strokeWidth={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataCard;
