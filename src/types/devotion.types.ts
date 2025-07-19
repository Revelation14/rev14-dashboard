import type { IUser } from './user.types';

export interface IDevotionCategory {
  createdAt: string;
  updatedAt: string;
  id: string;
  categoryName: string;
  createdBy: string;
}
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
  speaker: string;
  content: string;
  category: string;
  releaseDate: string;
  status: EDevotionStatus;
  createdBy: string;
}

export enum EDevotionStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  DELETED = 'DELETED',
}

export interface IBibleResponse {
  full_name: string;
  short_name: string;
  updated: number;
}

export interface IBibleBookResponse {
  bookid: number;
  chronorder: number;
  name: string;
  chapters: number;
}

export interface IBiblePassageResponse {
  book: number;
  chapter: number;
  pk: number;
  text: string;
  translation: string;
  verse: number;
}
