import React, { useMemo, useState } from 'react';

import type { IActiveUser, PlatformFilter } from '@/types/active-users.types';

type SortField = 'name' | 'role' | 'location' | 'lastSeenAt';
type SortDirection = 'asc' | 'desc';

interface ISortConfig {
  field: SortField | null;
  direction: SortDirection | null;
}

interface IActiveUserListProps {
  users: IActiveUser[];
  isLoading: boolean;
  selectedUser: IActiveUser | null;
  onSelectUser: (user: IActiveUser) => void;
  selectedFilter: PlatformFilter;
  onClearFilter: () => void;
}

interface ISortIndicatorProps {
  field: SortField;
  currentConfig: ISortConfig;
}

function SortIndicator({ field, currentConfig }: ISortIndicatorProps) {
  if (currentConfig.field !== field) {
    return <span className="text-gray-300">↕</span>;
  }

  if (currentConfig.direction === 'asc') {
    return <span className="font-bold text-indigo-600">↑</span>;
  }

  if (currentConfig.direction === 'desc') {
    return <span className="font-bold text-indigo-600">↓</span>;
  }

  return null;
}

function ListSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {[1, 2, 3, 4, 5].map((skeletonId) => (
        <div
          key={`skeleton-row-${skeletonId}`}
          className="h-12 w-full rounded-lg bg-gray-100"
        />
      ))}
    </div>
  );
}

function EmptyStateMessage({ onClearFilter }: { onClearFilter?: () => void }) {
  return (
    <div className="py-12 text-center text-gray-500">
      <p className="text-sm font-medium">
        No active users recorded in PostHog right now.
      </p>
      {onClearFilter && (
        <div className="mt-4">
          <button
            type="button"
            onClick={onClearFilter}
            className="text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-800"
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
}

function formatLastSeen(isoString: string): string {
  try {
    const date = new Date(isoString);

    if (Number.isNaN(date.getTime())) {
      return 'Invalid date';
    }

    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    });

    const day = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });

    return `${time} on ${day}`;
  } catch {
    return 'Unknown time';
  }
}

export function ActiveUserList({
  users,
  isLoading,
  selectedUser,
  onSelectUser,
  selectedFilter,
  onClearFilter,
}: IActiveUserListProps) {
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    field: null,
    direction: null,
  });

  // Tri-State cycle: asc -> desc -> null
  const handleColumnHeaderClick = (field: SortField) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.field !== field) {
        return { field, direction: 'asc' };
      }
      if (prevConfig.direction === 'asc') {
        return { field, direction: 'desc' };
      }
      if (prevConfig.direction === 'desc') {
        return { field: null, direction: null };
      }
      return { field, direction: 'asc' };
    });
  };

  const handleResetSort = () => {
    setSortConfig({ field: null, direction: null });
  };

  const displayUsers = useMemo(() => {
    let filtered = users;
    if (selectedFilter !== 'ALL') {
      filtered = users.filter(
        (user) => user.os?.toUpperCase() === selectedFilter
      );
    }

    if (!sortConfig.field || !sortConfig.direction) {
      return filtered;
    }

    const { field, direction } = sortConfig;
    const multiplier = direction === 'asc' ? 1 : -1;

    return [...filtered].sort((userA, userB) => {
      if (field === 'lastSeenAt') {
        const timeA = userA.lastSeenAt
          ? new Date(userA.lastSeenAt).getTime()
          : 0;
        const timeB = userB.lastSeenAt
          ? new Date(userB.lastSeenAt).getTime()
          : 0;
        return (timeA - timeB) * multiplier;
      }

      const valA = userA[field] ?? '';
      const valB = userB[field] ?? '';

      return (
        valA.toString().localeCompare(valB.toString(), undefined, {
          numeric: true,
          sensitivity: 'base',
        }) * multiplier
      );
    });
  }, [users, selectedFilter, sortConfig]);

  if (isLoading) {
    return <ListSkeleton />;
  }

  if (users.length === 0) {
    return <EmptyStateMessage onClearFilter={onClearFilter} />;
  }

  return (
    <div className="space-y-2">
      <div className="flex h-6 items-center justify-end">
        {sortConfig.field && (
          <button
            type="button"
            onClick={handleResetSort}
            className="text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-800"
          >
            Clear Sort ×
          </button>
        )}
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th
                className="cursor-pointer select-none px-4 py-3 hover:bg-gray-100"
                onClick={() => handleColumnHeaderClick('name')}
              >
                <div className="flex items-center gap-1">
                  <span>User</span>
                  <SortIndicator field="name" currentConfig={sortConfig} />
                </div>
              </th>

              <th
                className="cursor-pointer select-none px-4 py-3 hover:bg-gray-100"
                onClick={() => handleColumnHeaderClick('role')}
              >
                <div className="flex items-center gap-1">
                  <span>Role</span>
                  <SortIndicator field="role" currentConfig={sortConfig} />
                </div>
              </th>

              <th
                className="cursor-pointer select-none px-4 py-3 hover:bg-gray-100"
                onClick={() => handleColumnHeaderClick('location')}
              >
                <div className="flex items-center gap-1">
                  <span>Location</span>
                  <SortIndicator field="location" currentConfig={sortConfig} />
                </div>
              </th>

              <th
                className="cursor-pointer select-none px-4 py-3 hover:bg-gray-100"
                onClick={() => handleColumnHeaderClick('lastSeenAt')}
              >
                <div className="flex items-center gap-1">
                  <span>Last Active (UTC)</span>
                  <SortIndicator
                    field="lastSeenAt"
                    currentConfig={sortConfig}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {displayUsers.map((user) => {
              const isSelected = selectedUser?.id === user.id;
              return (
                <tr
                  key={user.id} // Satisfies no-array-index-key ESLint rule
                  onClick={() => onSelectUser(user)}
                  className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                    isSelected ? 'bg-gray-100 font-semibold' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="font-semibold text-gray-900">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </td>

                  <td className="px-4 py-3 text-xs">
                    <span className="rounded-full bg-gray-100 px-2 py-1 font-medium text-gray-700">
                      {user.role ?? 'STANDARD_USER'}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs text-gray-600">
                    {user.location ?? 'Unknown'}
                  </td>

                  <td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-gray-700">
                    {formatLastSeen(user.lastSeenAt)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
