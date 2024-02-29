import { useEffect, useContext } from 'react';
import { PageContext } from '../helpers/PageContext';

export function usePageLocation(location) {
  const { setPage } = useContext(PageContext);
  
  useEffect(() => {
    setPage(location);
  }, []);
}