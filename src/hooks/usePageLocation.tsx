import { useEffect, useContext } from 'react';
import { PageContext, PageContextType } from '../helpers/PageContext';

export function usePageLocation(location: string) {
  const context = useContext(PageContext);

  if (!context) throw new Error("usePageLocation must be used within a PageContextProvider");

  const { setPage } = context;
  
  useEffect(() => {
    setPage(location);
  }, []);
}