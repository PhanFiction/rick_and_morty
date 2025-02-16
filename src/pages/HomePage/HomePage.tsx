import React from 'react';
import OverLay from '../../components/OverLay/OverLay';
import rickandmortyCircle from '../../assets/circle-rickandmorty.png';
import rickandmortyTitle from '../../assets/title-rickandmorty.png';
import { usePageLocation } from '../../hooks/usePageLocation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetchMultipleCharacters } from '../../hooks/useFetchData';
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function HomePage() {
  usePageLocation('garage-slide-door');
  const fetchedCharactersData = useFetchMultipleCharacters('1,2,3,4,5');

  return (
    <>
      <OverLay>
        <div className='w-full h-screen flex flex-col items-center'>
          <div className='relative flex justify-center flex-col items-center w-full -top-12'>
            <img src={rickandmortyCircle } alt="circle" className='w-[100%] sm:w-[60%] lg:w-[50%]'/>
            <img src={rickandmortyTitle} alt="title" className='w-[70%] sm:w-[45%] lg:w-[35%] bottom-0 absolute'/>
          </div>
          <div className='flex flex-col items-center w-3/4 md:2/4 mb-12 md:mb-12'>
            <h1 className='text-white text-2xl md:text-4xl text-center border-2 font-Edu border-darkGreen custom-box-shadow rounded-md mt-8 p-4'>
              Meet the Family
            </h1>
          </div>
          <div className='mx-auto w-full lg:w-2/4'>
            <div>
              {
                fetchedCharactersData.length < 1 ? <></> :
                <Swiper
                  modules={[EffectCards]}
                  effect={'cards'}
                  grabCursor={true}
                  slidesPerView={2}
                  spaceBetween={30}
                  speed={500}
                  loop={true}
                  rotate={true}
                  centeredSlides={true}
                  className="mySwiper"
                >
                  {
                    fetchedCharactersData.map((item: any) =>
                      <SwiperSlide key={item.id} className='relative'>
                        <img src={item.image} alt="img" className='rounded-md w-full'/>                    
                        <span className='absolute w-full bottom-0 text-center rounded-b-md text-white z-20 font-semibold'>{item.name}</span>    
                        <div className="absolute w-full bottom-0 bg-black p-4 rounded-b-md opacity-80"></div>
                      </SwiperSlide>
                    )
                  }
                </Swiper>
              }
            </div>
          </div>
        </div>
      </OverLay>
    </>
  )
}