import { useEffect, useContext } from 'react';
import { PageContext } from '../../helpers/PageContext';

export default function HomePage() {
  const { setPage } = useContext(PageContext);
  
  useEffect(() => {
    setPage('table');
  }, []);

  return (
    <article>
      <h1>Home Page</h1>
    </article>
  )
}