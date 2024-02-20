import { useEffect, useContext } from 'react';
import { PageContext } from '../../helpers/PageContext';
import { OverLay } from '../../components/Model/Overlay/Overlay';
import rickandmortyCircle from '../../assets/circle-rickandmorty.png';
import rickandmortyTitle from '../../assets/title-rickandmorty.png';

export default function HomePage() {
  const { setPage } = useContext(PageContext);
  
  useEffect(() => {
    setPage('garage-slide-door');
  }, []);

  return (
    <>
      <OverLay>
        <div className='relative -top-24 sm:bottom-0 left-0 right-0'>
          <div className='flex items-center justify-center'>
            <div className='absolute -bottom-24'>
              <input
                type="search"
                placeholder='Search'
                className='w-72 md:w-96 p-4 rounded-lg bg-white'
              />
              <div className='absolute w-full h-[160px] sm:h-[120px] top-11 rounded-lg bg-red-50'>
                
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={rickandmortyCircle } alt="circle" className='w-[100%] md:w-[60%] lg:w-[75%]'/>
            <img src={rickandmortyTitle} alt="title" className='w-[70%] sm:w-[65%] md:w-[55%] lg:w-[50%] absolute bottom-0'/>
          </div>
        </div>
      </OverLay>
    </>
  )
}