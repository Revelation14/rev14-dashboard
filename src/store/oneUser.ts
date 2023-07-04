import { create } from 'zustand';

import type { IUser } from '@/types/user.types';
import { EGender, EStatus, EUserRole } from '@/types/user.types';

interface EditUser {
  user: IUser;
  updateUser: (user: IUser) => void;
}
export const editUser = create<EditUser>((set) => ({
  user: {
    id: '',
    name: '',
    phoneNumber: '',
    email: '',
    role: EUserRole.USER,
    profilePicture: '',
    gender: EGender.MALE,
    status: EStatus.ACTIVE,
  },
  updateUser: (user) => {
    set({ user });
  },
}));
