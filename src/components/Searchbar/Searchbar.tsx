import React from 'react';
import PropTypes from 'prop-types';

interface Searchbar {
  locations: any[];
  userInput: string;
  handleUserInput: (input: string) => void;
  setLocation: (input: string) => void;
}

export default function Searchbar({ locations, userInput, handleUserInput, setLocation }: 
  { locations: any[], userInput: string, handleUserInput: any, setLocation: any }) {
  const borderStyle = {
    'hidden': 'hidden',
    'block': 'block'
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <input
          type="search"
          placeholder='Search dimension'
          className={`w-72 md:w-96 p-2 bg-transparent border-2 border-lightGreen custom-box-shadow rounded-md`}
          value={userInput}
          onChange={handleUserInput}
        />
        <ul className={`absolute w-full h-80 top-11 overflow-auto rounded-md z-20 ${userInput === '' ? borderStyle['hidden'] : borderStyle['block'] }`}>
          {
            locations?.map((item, index) => 
              <li className="text-white bg-black p-2 hover:text-lighterGreen hover:cursor-pointer" key={index} onClick={()=>{setLocation(item)}}>
                { item.name }
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

Searchbar.propTypes = {
  locations: PropTypes.array,
  userInput: PropTypes.string,
  handleUserInput: PropTypes.func,
  setLocation: PropTypes.func,
}