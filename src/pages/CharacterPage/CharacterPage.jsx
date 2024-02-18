import { useEffect, useContext } from 'react';
import { PageContext } from '../../helpers/PageContext';

export default function CharacterPage() {
  const { setPage } = useContext(PageContext);
  
  useEffect(() => {
    setPage('garage-slide-door');
  }, []);

  return (
    <div>CharacterPage</div>
  )
}
