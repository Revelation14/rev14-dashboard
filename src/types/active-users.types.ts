import type { EStatus, EUserRole } from './user.types';

export interface IActiveUser {
  id: string;
  distinctId: string;
  email: string;
  name?: string;
  role?: EUserRole;
  os?: 'iOS' | 'Android' | 'Web'; // Made optional since PostHog didn't return it in the user object
  status?: EStatus;
  lastSeenAt: string;
  location?: string;
  isVerified?: boolean;
}

export type DateRangeFilter = '24h' | '7d' | '30d' | 'all';

// The exact shape of the Edge Function envelope
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

// Our strict frontend UI state shape
export interface IUserStats {
  totalActive: number;
  androidCount: number;
  iosCount: number;
  webCount: number;
  verifiedCount: number;
}
