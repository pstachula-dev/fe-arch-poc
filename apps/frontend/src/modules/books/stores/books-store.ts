import create from 'zustand';

export interface BookConfig {
  libraryName: string;
}

interface BooksState {
  bookConfig?: BookConfig;
}

export const useBookStore = create<BooksState>(() => ({
  bookConfig: {
    libraryName: 'Test Library',
  },
}));

export const setBooksConfig = (bookConfig: BookConfig): void => {
  useBookStore.setState({ bookConfig });
};

export const useGetBooksConfig = (): BookConfig | undefined => {
  return useBookStore(({ bookConfig }) => bookConfig);
};
