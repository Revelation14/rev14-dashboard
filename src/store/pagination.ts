import { create } from 'zustand';

interface PaginationStore {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setTotalPages: (pages: number) => void;
}

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
  setTotalPages: (pages) => set(() => ({ totalPages: pages })),
}));

export default usePaginationStore;
