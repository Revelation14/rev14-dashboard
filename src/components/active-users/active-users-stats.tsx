import React from 'react';

import type { IUserStats } from '@/types/active-users.types';

interface ActiveUserStatsProps {
  stats: IUserStats | null;
  isLoading: boolean;
}

function StatCardItem({
  title,
  value,
  meta,
}: {
  title: string;
  value: string;
  meta: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-xl font-medium text-gray-900">{title}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-400">{meta}</p>
    </div>
  );
}

function StatsSkeleton() {
  const skeletonKeys = ['sk-1', 'sk-2', 'sk-3', 'sk-4'];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skeletonKeys.map((k) => (
        <div
          key={k}
          className="h-28 animate-pulse rounded-xl bg-gray-100 p-5"
        />
      ))}
    </div>
  );
}

export function ActiveUserStats({ stats, isLoading }: ActiveUserStatsProps) {
  if (isLoading) {
    return <StatsSkeleton />;
  }

  if (!stats) {
    return (
      <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 text-center text-xs text-gray-500">
        Telemetry stats currently unavailable.
      </div>
    );
  }

  const androidPct = stats.totalActive
    ? Math.round((stats.androidCount / stats.totalActive) * 100)
    : 0;

  const iosPct = stats.totalActive
    ? Math.round((stats.iosCount / stats.totalActive) * 100)
    : 0;

  const statCards = [
    {
      id: 'card-total',
      title: 'Total Active Users',
      value: stats.totalActive.toLocaleString(),
      meta: 'Active in timeframe',
    },
    {
      id: 'card-android',
      title: 'Users on Android',
      value: stats.androidCount.toLocaleString(),
      meta: `${androidPct}% of active devices`,
    },
    {
      id: 'card-ios',
      title: 'Users on iOS',
      value: stats.iosCount.toLocaleString(),
      meta: `${iosPct}% of active devices`,
    },
    {
      id: 'card-verified',
      title: 'Verified Accounts',
      value: stats.verifiedCount.toLocaleString(),
      meta: `${
        stats.totalActive
          ? Math.round((stats.verifiedCount / stats.totalActive) * 100)
          : 0
      }% verification rate`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card) => (
        <StatCardItem
          key={card.id}
          title={card.title}
          value={card.value}
          meta={card.meta}
        />
      ))}
    </div>
  );
}
