import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface IAppUsageChartProps {
  data: any;
}

const AppUsageChart: React.FC<IAppUsageChartProps> = ({ data }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <AreaChart
        width={800}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} stroke="#EEEEEE" />
        <XAxis axisLine={false} tickLine={false} dataKey="name" />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#DF9A57',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '10px',
            color: '#FFFFFF',
            boxShadow:
              '0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06)',
          }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="black"
          strokeWidth={2}
          fill="url(#colorGradient)"
        />
        <defs>
          <linearGradient id="colorGradient" gradientTransform="rotate(180)">
            <stop offset="0%" stopColor="#0000001A" />
            <stop offset="141.68%" stopColor="#FFFFFF00" />
          </linearGradient>
        </defs>
      </AreaChart>
    </div>
  );
};

export default AppUsageChart;
