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
  abbreviation: string;
  abbreviationLocal: string;
  audioBibles: string[];
  countries: { id: string; name: string; nameLocal: string }[];
  dblId: string;
  description?: string;
  descriptionLocal?: string;
  id: string;
  language: {
    id: string;
    name: string;
    nameLocal: string;
    script: string;
    scriptDirection: string;
  };
  name: string;
  nameLocal: string;
  relatedDbl?: string;
  type: string;
  updatedAt: string;
}

export interface IBibleBookResponse {
  abbreviation: string;
  bibleId: string;
  id: string;
  name: string;
  nameLong: string;
}

export interface IBiblePassageResponse {
  bibleId: string;
  bookId: string;
  chapterIds: string[];
  content: string;
  copyright: string;
  id: string;
  orgId: string;
  reference: string;
}
