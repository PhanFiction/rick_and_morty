import OverLay from '../../components/OverLay/OverLay';
import rickandmortyCircle from '../../assets/circle-rickandmorty.png';
import rickandmortyTitle from '../../assets/title-rickandmorty.png';
import { usePageLocation } from '../../hooks/usePageLocation';

export default function HomePage() {
  usePageLocation('garage-slide-door');

  return (
    <>
      <OverLay>
        <div className='w-full h-screen flex flex-col'>
          <div className='relative flex justify-center flex-col items-center w-full -top-12'>
            <img src={rickandmortyCircle } alt="circle" className='w-[100%] sm:w-[60%] lg:w-[50%]'/>
            <img src={rickandmortyTitle} alt="title" className='w-[70%] sm:w-[45%] lg:w-[35%] bottom-0 absolute'/>
          </div>
        </div>
      </OverLay>
    </>
  )
}