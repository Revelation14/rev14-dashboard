import type { EStatus, EUserRole } from './user.types';

export interface IActiveUser {
  id: string;
  distinctId: string;
  email: string;
  name?: string;
  role?: EUserRole;
  os: 'iOS' | 'Android' | 'Web';
  status?: EStatus;
  lastSeenAt: string;
  location?: string;
  isVerified?: boolean;
}

export type DateRangeFilter = '24h' | '7d' | '30d' | 'all';

export interface IActiveUsersResponse {
  data: IActiveUser[];
  meta: {
    total: number;
    totalPages: number;
    page: number;
    limit: number;
    stats: IUserStats;
  };
}
export interface IUserStats {
  totalActive: number;
  androidCount: number;
  iosCount: number;
  webCount: number;
  verifiedCount: number;
}
