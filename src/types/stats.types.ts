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

export interface IUserResponse {
  data: IUser[];
}

export interface IUser {
  id: string;
  name: string;
  phoneNumber: string;
  gender: string;
  token?: string;
  email: string;
  location: string;
  dob?: string;
  subscriptionId?: string;
  role: string;
  status: string;
  profilePicture?: string;
  isVerified: boolean;
  isFirstLogin: boolean;
  createdAt: Date;
  updatedAt: Date;
  userSubscription?: string;
}
