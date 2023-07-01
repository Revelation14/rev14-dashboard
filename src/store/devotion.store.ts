import { create } from 'zustand';

import type { IDevotion } from '@/types/devotion.types';

interface IDevotionState {
  devotion: IDevotion | null;
  setDevotion: (devotion: IDevotion) => void;
  removeDevotion: (devotion: IDevotion) => void;
  updateDevotion: (devotion: IDevotion) => void;
}

export const useDevotion = create<IDevotionState>((set) => ({
  devotion: null,
  setDevotion: (devotion) => {
    set({ devotion });
  },
  removeDevotion: () => {
    set({ devotion: null });
  },
  updateDevotion: (devotion) => {
    set({ devotion });
  },
}));
