import React from 'react';

import type { IActiveUser } from '@/types/active-users.types';

function formatLastSeen(isoString: string): string {
  try {
    const date = new Date(isoString);
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const day = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return `${time} on ${day}`;
  } catch {
    return 'Unknown time';
  }
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

function EmptyStateMessage() {
  return (
    <div className="py-12 text-center text-gray-500">
      <p className="text-sm font-medium">
        No active users recorded in PostHog right now.
      </p>
    </div>
  );
}

interface IActiveUserListProps {
  users: IActiveUser[];
  isLoading: boolean;
  selectedUser: IActiveUser | null;
  onSelectUser: (user: IActiveUser) => void;
}

export const ActiveUserList: React.FC<IActiveUserListProps> = ({
  users,
  isLoading,
  selectedUser,
  onSelectUser,
}) => {
  if (isLoading) {
    return <ListSkeleton />;
  }

  if (users.length === 0) {
    return <EmptyStateMessage />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
          <tr>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Last Active</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.map((user) => {
            const isSelected = selectedUser?.id === user.id;
            return (
              <tr
                key={user.id}
                onClick={() => onSelectUser(user)}
                className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                  isSelected ? 'bg-gray-100 font-medium font-semibold' : ''
                }`}
              >
                {/* Column 1: User Identity */}
                <td className="px-4 py-3">
                  <div className="font-semibold text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </td>

                {/* Column 2: Role Badge */}
                <td className="px-4 py-3 text-xs">
                  <span className="rounded-full bg-gray-100 px-2 py-1 font-medium text-gray-700">
                    {user.role ?? 'STANDARD_USER'}
                  </span>
                </td>

                {/* Column 3: Location */}
                <td className="px-4 py-3 text-xs text-gray-600">
                  {user.location ?? 'Unknown'}
                </td>

                {/* Column 4: Last Active Timestamp */}
                <td className="px-4 py-3 text-xs font-medium text-gray-700">
                  {formatLastSeen(user.lastSeenAt)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
