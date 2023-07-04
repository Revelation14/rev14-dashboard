export interface Stats {
  success: boolean;
  statusCode: number;
  message: string;
  data: Data;
  path: string;
  method: string;
}

export interface Data {
  users: Users;
  devotions: Devotions;
}

export interface Devotions {
  draftedDevotions: EdDevotion[];
  publishedDevotions: EdDevotion[];
  unpublishedDevotions: any[];
}

export interface EdDevotion {
  id: string;
  status: string;
  createdAt: Date;
}

export interface Users {
  activeUsers: ActiveUser[];
  contentCreators: ActiveUser[];
  suspendedCreators: ActiveUser[];
}

export interface ActiveUser {
  status: string;
  joinedAt: Date;
  createdAt?: Date;
}
