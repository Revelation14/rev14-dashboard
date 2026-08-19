import React from 'react';

import type { IUserStats, PlatformFilter } from '@/types/active-users.types';

interface ActiveUserStatsProps {
  stats: IUserStats | null;
  isLoading: boolean;
  selectedFilter: PlatformFilter;
  onSelectFilter: (filter: PlatformFilter) => void;
}

function StatCardItem({
  title,
  value,
  meta,
  isSelected,
  onClick,
}: {
  title: string;
  value: string;
  meta: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border p-5 text-left transition-all hover:border-indigo-200 hover:shadow-md ${
        isSelected
          ? 'border-indigo-600 bg-indigo-50/30 ring-2 ring-indigo-600/20'
          : 'border-gray-100 bg-white shadow-sm'
      }`}
    >
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-400">{meta}</p>
    </button>
  );
}

function StatsSkeleton() {
  const skeletonKeys = ['sk-1', 'sk-2', 'sk-3'];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skeletonKeys.map((k) => (
        <div
          key={k}
          className="h-28 animate-pulse rounded-xl bg-gray-100 p-5"
        />
      ))}
    </div>
  );
}

export function ActiveUserStats({
  stats,
  isLoading,
  selectedFilter,
  onSelectFilter,
}: ActiveUserStatsProps) {
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

  const statCards: Array<{
    id: string;
    filter: PlatformFilter;
    title: string;
    value: string;
    meta: string;
  }> = [
    {
      id: 'card-total',
      filter: 'ALL',
      title: 'Total Active Users',
      value: stats.totalActive.toLocaleString(),
      meta: 'Active in timeframe',
    },
    {
      id: 'card-android',
      filter: 'ANDROID',
      title: 'Users on Android',
      value: stats.androidCount.toLocaleString(),
      meta: `${androidPct}% of active devices`,
    },
    {
      id: 'card-ios',
      filter: 'IOS',
      title: 'Users on iOS',
      value: stats.iosCount.toLocaleString(),
      meta: `${iosPct}% of active devices`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {statCards.map((card) => (
        <StatCardItem
          key={card.id}
          title={card.title}
          value={card.value}
          meta={card.meta}
          isSelected={selectedFilter === card.filter}
          onClick={() => onSelectFilter(card.filter)}
        />
      ))}
    </div>
  );
}
