import { useState, useEffect, useContext } from 'react'
import { PageContext } from '../../helpers/PageContext';
import OverLay from '../../components/OverLay/OverLay';
import { usePageLocation } from '../../hooks/usePageLocation';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useFetchData, useSearchLocation } from '../../hooks/useFetchData';
import rickandmortyCircle from '../../assets/circle-rickandmorty.png';
import rickandmortyTitle from '../../assets/title-rickandmorty.png';

export default function PlanetPage() {
  const { setPage } = useContext(PageContext);
  usePageLocation('washingmachine');
  const [userInput, setUserInput] = useState(null);
  const response = useSearchLocation(userInput);
  const { results, info } = response;

  const handleUserInput = (e) => setUserInput(e.target.value);

  return (
    <OverLay>
      <div className='w-full h-screen flex flex-col'>

        <div className='relative flex justify-center flex-col items-center w-full -top-12'>
          <img src={rickandmortyCircle } alt="circle" className='w-[100%] sm:w-[60%] lg:w-[50%]'/>
          <img src={rickandmortyTitle} alt="title" className='w-[70%] sm:w-[45%] lg:w-[35%] bottom-0 absolute'/>
        </div>

        <form className='w-full'>
          <Searchbar locations={results} value={userInput} handleUserInput={handleUserInput}/>
        </form>

        <article className='flex flex-col text-white'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-16 ml-24 mr-5'>
{/*             {
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
            } */}
          </div>
        </article>
      </div>
    </OverLay>
  )
}
