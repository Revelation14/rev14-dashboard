import type { EStatus, EUserRole } from './user.types';

export interface IActiveUser {
  id: string;
  distinctId: string;
  email: string;
  name?: string;
  role?: EUserRole;
  status?: EStatus;
  lastSeenAt: string;
  location?: string;
  isVerified?: boolean;
}

export interface IActiveUsersResponse {
  users: IActiveUser[];
  totalCount: number;
}

export type DateRangeFilter = '24h' | '7d' | '30d' | 'all';
