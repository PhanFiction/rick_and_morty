import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoMdRewind } from "react-icons/io";
import { IoAccessibility, IoHomeSharp, IoEarth, } from "react-icons/io5";
import rickandmortyIcon from '../../assets/icon-rickandmorty.svg';

export default function Nav() {
  const [extendSidebar, setSideBar] = useState('short');
  const [showIcon, hideIcon] = useState('hidden')

  const bodyExtendStyle = {
    'extend': 'w-56',
    'short': 'w-16 sm:w-20',
  }

  const toggleExtend = () => setSideBar(extendSidebar === 'short' ? 'extend' : 'short');

  return (
    <aside className={`${bodyExtendStyle[extendSidebar]} fixed top-0 text-white bg-darkNavy h-screen z-10 bg-opacity-90 ease-in-out duration-500`}>
      <nav className={`p-4`}>
        <ul className={`${extendSidebar === 'short' ? 'items-center' : 'items-start'} flex flex-col h-96 justify-between gap-2`}>
          
          <li className='flex justify-between items-center w-full'>
            <img 
              className={`${extendSidebar === 'short' ? 'animate-text-slide-out hidden' : 'block animate-text-slide-in'} w-8 sm:w-12 custom-color`} 
              src={rickandmortyIcon} 
              alt="icon" 
            />
            <IoMdRewind
              className={
                `text-3xl sm:text-5xl hover:cursor-pointer
                ${extendSidebar === 'short' ? 'rotate-180' : 'rotate-0'} 
                ease-in-out duration-500`
              } 
              onClick={toggleExtend}
            />
          </li>
          
          <div className={`flex flex-col items-center w-full gap-6`}>
            

            <Link to="/" className='w-full'>
              <li className={`flex items-center gap-8`}>
                <span>
                  <IoHomeSharp className={`text-2xl sm:text-4xl`}/>
                </span>
                <span className={`text-lg sm:text-2xl ${extendSidebar === 'short' ? 'animate-text-slide-out hidden': 'animate-text-slide-in'}`}>Home</span>
              </li>
            </Link>

            <Link to="/characters?page=1" className='w-full'>
              <li className={`flex items-center gap-8`}>
                <span>
                  <IoAccessibility className='text-2xl sm:text-4xl'/>
                </span>
                <span className={`text-lg sm:text-2xl ${extendSidebar === 'short' ? 'animate-text-slide-out hidden': 'animate-text-slide-in'}`}>Characters</span>
              </li>
            </Link>

            <Link to="/planets" className='w-full'>
              <li className={`flex items-center gap-8`}>
                <span>
                  <IoEarth className={`text-2xl sm:text-4xl`}/>
                </span>
                <span className={`text-lg sm:text-2xl ${extendSidebar === 'short' ? 'animate-text-slide-out hidden': 'animate-text-slide-in'}`}>Planets</span>
              </li>
            </Link>
          </div>

        </ul>
      </nav>
    </aside>
  )
}
