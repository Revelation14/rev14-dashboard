import type { EStatus, EUserRole } from './user.types';

export interface IActiveUser {
  id: string;
  distinctId: string;
  email: string;
  name?: string;
  role?: EUserRole;
  os?: 'IOS' | 'ANDROID' | 'WEB' | 'UNKNOWN';
  status?: EStatus;
  lastSeenAt: string | null;
  location?: string;
  isVerified?: boolean;
}

export type DateRangeFilter = '24h' | '7d' | '30d' | '6m' | 'ytd' | 'all';
export type PlatformFilter = 'ALL' | 'ANDROID' | 'IOS';
export type SortField = 'name' | 'role' | 'location' | 'lastSeenAt';
export type SortDirection = 'asc' | 'desc';

export interface ISortConfig {
  field: SortField | null;
  direction: SortDirection | null;
}

export interface IActiveUsersResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    totalActiveUsers: number;
    platformBreakdown: {
      ios: number;
      android: number;
      web: number;
    };
    totalFiltered: number;
    users: IActiveUser[];
  };
}

export interface IUserStats {
  totalActive: number;
  androidCount: number;
  iosCount: number;
  webCount: number;
  verifiedCount: number;
}
