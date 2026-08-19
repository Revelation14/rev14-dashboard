import React from 'react';

import type { IActiveUser } from '@/types/active-users.types';

interface IActiveUserDetailProps {
  user: IActiveUser;
  onClose: () => void;
}

interface IDetailItemProps {
  label: string;
  value: string;
  copyable?: boolean;
}

function DetailItem({ label, value, copyable }: IDetailItemProps) {
  return (
    <div className="flex flex-col space-y-1 rounded-lg bg-gray-50 p-3">
      <span className="text-xs font-medium uppercase text-gray-500">
        {label}
      </span>
      <div className="flex items-center justify-between">
        <span className="break-all text-sm font-semibold text-gray-800">
          {value}
        </span>
        {copyable && (
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(value)}
            className="text-xs text-blue-600 hover:underline"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}

export const ActiveUserDetail: React.FC<IActiveUserDetailProps> = ({
  user,
  onClose,
}) => {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header with dismiss button */}
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
        <button
          onClick={onClose}
          type="button"
          className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {/* Profile summary & Telemetry metadata grid */}
      <div className="mt-6 space-y-4">
        <DetailItem
          label="PostHog Distinct ID"
          value={user.distinctId}
          copyable
        />
        <DetailItem label="Email" value={user.email} />
        <DetailItem label="Mobile Platform" value={user.os ?? 'UNKNOWN'} />
        <DetailItem label="Role" value={user.role ?? 'STANDARD_USER'} />
        <DetailItem label="Last Active Timestamp" value={user.lastSeenAt} />
        <DetailItem
          label="Detected Region"
          value={user.location ?? 'Unknown'}
        />
      </div>
    </div>
  );
};
