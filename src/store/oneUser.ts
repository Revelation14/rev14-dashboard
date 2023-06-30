import { create } from 'zustand';

import type { IEditUser } from '@/types/user.types';

interface EditUser {
  user: IEditUser;
  updateUser: (user: IEditUser) => void;
}
export const editUser = create<EditUser>((set) => ({
  user: {
    id: '',
    name: '',
    phoneNumber: '',
    email: '',
    role: '',
    image: '',
    contributions: '',
  },
  updateUser: (user) => {
    set({ user });
  },
}));
