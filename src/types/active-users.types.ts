import type { EStatus, EUserRole } from './user.types';

export interface IActiveUser {
  id: string;
  distinctId: string;
  email: string;
  name?: string;
  role?: EUserRole;
  os?: 'iOS' | 'Android' | 'Web';
  status?: EStatus;
  lastSeenAt: string;
  location?: string;
  isVerified?: boolean;
}

export type DateRangeFilter = '24h' | '7d' | '30d' | 'all';
export type PlatformFilter = 'ALL' | 'ANDROID' | 'IOS';

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
