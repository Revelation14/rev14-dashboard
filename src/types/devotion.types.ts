import type { IUser } from './user.types';

export interface IDevotion extends INewDevotion {
  user: IUser;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface INewDevotion {
  attachments: string[];
  coverImage: string;
  timestamp: string;
  title: string;
  verse: string;
  content: string;
  status: EDevotionStatus;
  createdBy: string;
}

export enum EDevotionStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  DELETED = 'DELETED',
}
