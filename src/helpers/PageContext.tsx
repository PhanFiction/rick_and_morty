import { createContext, Dispatch, SetStateAction } from 'react';

export interface PageContextType {
  page: string,
  setPage: Dispatch<SetStateAction<string>> // Dispatch takes action and returns void
}

export const PageContext = createContext<PageContextType | null>(null);