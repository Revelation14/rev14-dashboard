import create from 'zustand';

import type { IUser } from '@/types/user.types';

interface IAuthState {
  user: IUser | null;
  accessToken: string;
  authenticate: (user: IUser, accessToken: string) => void;
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
}));
