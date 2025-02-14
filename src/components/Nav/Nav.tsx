import { useState } from 'react';
import { IoMdRewind } from "react-icons/io";
import { IoAccessibility, IoHomeSharp, IoEarth, } from "react-icons/io5";
import rickandmortyIcon from '../../assets/icon-rickandmorty.svg';
import NavItem from './NavItem';

export default function Nav() {
  const [extendSidebar, setExtendSidebar] = useState(false);

  const sidebarExtend = {
    extend: extendSidebar ? 'w-56' : 'hidden',
  }

  const toggleSidebar = () => setExtendSidebar(!extendSidebar);

  return (
    <>
      <aside className='text-white'>
        {/*Desktop*/}
        <nav className={`p-4 hidden md:block fixed w-16 hover:w-56 sm:w-20 top-0  bg-darkNavy h-screen z-10 bg-opacity-90 ease-in-out duration-500 group`}>
          <ul className={`flex flex-col h-96 justify-between gap-2`}>
            <li className='flex justify-between items-center w-full'>
              <img 
                className='group-hover:sidebar-icon-slide-in sidebar-icon-slide-out'
                src={rickandmortyIcon} 
                alt="icon" 
              />
              <IoMdRewind
                className={
                  `text-3xl sm:text-5xl hover:cursor-pointer
                  group-hover:rotate-0 rotate-180
                  ease-in-out duration-500`
                } 
              />
            </li>
            {/*Nav Items that slide out*/}
            <div className={`flex flex-col items-center w-full gap-6`}>
              <NavItem Icon={<IoAccessibility className='text-2xl sm:text-4xl'/>} linkName={'Characters'}/>
              <NavItem Icon={<IoEarth className={`text-2xl sm:text-4xl`}/>} linkName={'Planets'}/>
              <NavItem Icon={<IoHomeSharp className={`text-2xl sm:text-4xl`}/>} linkName={'Home'}/>
            </div>
          </ul>
        </nav>

        {/*Mobile*/}
        <nav className={`${sidebarExtend.extend} p-4 group fixed top-0 text-white bg-darkNavy h-screen z-10 bg-opacity-90 ease-in-out duration-500`}>          
          <ul className={`flex flex-col h-96 justify-between gap-2`}>
            <li className='flex justify-between items-center w-full'>
              <img
                className={`${extendSidebar === 'hidden' ? 'animate-text-slide-out' : 'block animate-text-slide-in'} w-8 sm:w-12 custom-color`}
                src={rickandmortyIcon}
                alt="icon"
              />
              <IoMdRewind
                className={
                  `text-3xl sm:text-5xl hover:cursor-pointer
                  ${extendSidebar === 'short' ? 'rotate-180' : 'rotate-0'}
                  ease-in-out duration-500`
                }
                onClick={toggleSidebar}
              />
            </li>
            <div className={`flex flex-col items-center w-full gap-6`}>
              <NavItem Icon={<IoHomeSharp className={`text-2xl sm:text-4xl`}/>} linkName={'Home'}/>
              <NavItem Icon={<IoAccessibility className='text-2xl sm:text-4xl'/>} linkName={'Characters'}/>
              <NavItem Icon={<IoEarth className={`text-2xl sm:text-4xl`}/>} linkName={'Planet'}/>
            </div>
          </ul>
        </nav>
      </aside>

      <button className={`${extendSidebar ? 'hidden' : 'fixed'} md:hidden top-0 left-0 p-4 text-white bg-darkNavy z-20`} onClick={toggleSidebar}>
        <IoMdRewind
          className={
            `text-3xl sm:text-5xl hover:cursor-pointer rotate-180 ease-in-out duration-500`
          } 
        />
      </button>
    </>
  )
}

