import { create } from 'zustand';

interface PaginationStore {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));

export default usePaginationStore;
