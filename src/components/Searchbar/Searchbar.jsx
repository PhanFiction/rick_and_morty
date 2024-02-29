/* eslint-disable react/prop-types */
export default function Searchbar({ locations, value, handleUserInput }) {
  console.log(locations, locations?.residents);
  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <input
          type="search"
          placeholder='Search'
          className='w-72 md:w-96 p-2 rounded-lg bg-white'
          value={value}
          onChange={handleUserInput}
        />
        <ul className='absolute w-full h-80 top-10 rounded-lg z-20 overflow-auto'>
          {
            locations?.map((item, index) => 
              <li className="text-white bg-black" key={index}>
                { item.name }
              </li>
            )
          }
        </ul>
      </div>
    </div>

  )
}
