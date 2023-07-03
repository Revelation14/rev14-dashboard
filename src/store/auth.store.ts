import { create } from 'zustand';

import type { IUser } from '@/types/user.types';

interface IAuthState {
  user: IUser | null;
  accessToken: string;
  authenticate: (user: IUser, accessToken: string) => void;
  updateUser: (user: IUser) => void;
  logout: () => void;
}

export const useAuth = create<IAuthState>((set) => ({
  user: null,
  accessToken: '',
  authenticate: (user, accessToken) => {
    set({ user, accessToken });
  },
  logout: () => {
    set({ user: null, accessToken: '' });
  },
  updateUser: (user) => {
    set({ user });
  },
}));
