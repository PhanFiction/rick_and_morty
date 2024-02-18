import { useEffect, useContext } from 'react'
import { PageContext } from '../../helpers/PageContext';

export default function PlanetPage() {
  const { setPage } = useContext(PageContext);
  
  useEffect(() => {
    setPage('shelf');
  }, []);

  return (
    <div>PlanetPage</div>
  )
}
