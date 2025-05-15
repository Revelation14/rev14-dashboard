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
  reference: string;
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
  verses: IBibleVerse[];
}

export interface IBibleVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
}
