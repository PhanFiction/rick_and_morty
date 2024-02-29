import { useState } from 'react';
import OverLay from '../../components/OverLay/OverLay';
import Pagination from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useFetchData, useSearchLocation } from '../../hooks/useFetchData';
import { usePageLocation } from '../../hooks/usePageLocation';

export default function CharacterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'));
  const [, setActivePage] = useState(page);
  useSearchLocation('earth');
  const fetchedData = useFetchData('character', page);
  const { results, info } = fetchedData;
  usePageLocation('shelf');

  const nextPage = (nextPage) => {
    setSearchParams({ page: nextPage });
    if (nextPage > 0 && nextPage <= info?.pages) setActivePage(nextPage);
  }

  return (
    <OverLay>
      <article className='flex flex-col text-white overflow-auto h-screen scrollbar'>
        <h1 className='text-center text-4xl sm:text-6xl mt-12 sm:mt-24'>Characters</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-16 ml-24 mr-5'>
          {
            results?.map(character => (
              <div className='rounded-md border-2 border-lightGreen custom-box-shadow residentCard cursor-pointer bg-black' key={character.id}>
                <img src={`${character.image}`} alt="" className='w-full opacity-90'/>
                <h2 className='text-lighterGreen font-semibold text-2xl text-center my-2'>{ character.name }</h2>
                <div className='my-4'>
                  <ul className='px-8 [&>li]:my-1'>
                    <li><span className="text-lightGray">Gender: </span>{ character.gender }</li>
                    <li><span className="text-lightGray">Species: </span>{ character.species }</li>
                    <li><span className="text-lightGray">Location: </span>{ character.location.name }</li>
                    <li><span className="text-lightGray">Status: </span>{ character.status }</li>
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex justify-center items-center gap-2 mb-4'>
          <button onClick={() => {nextPage(1)}}>Start</button>
          <Pagination totalPages={info?.pages} activePage={page} nextPage={nextPage} />
          <button onClick={() => {nextPage(42)}}>end</button>
        </div>
      </article>
    </OverLay>
  )
}
