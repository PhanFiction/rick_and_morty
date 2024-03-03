/* eslint-disable react/prop-types */
export default function Searchbar({ locations, value, handleUserInput }) {
  console.log(locations, locations?.residents);
  const borderStyle = {
    'rounded-full': 'rounded-md',
    'rounded-top': 'rounded-t-md'
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <input
          type="search"
          placeholder='Search'
          className={`w-72 md:w-96 p-2 bg-white ${locations ? borderStyle['rounded-top'] : borderStyle['rounded-full']}`}
          value={value}
          onChange={handleUserInput}
        />
        <ul className={`absolute w-full h-80 top-10 overflow-auto rounded-b-md`}>
          {
            locations?.map((item, index) => 
              <li className="text-white bg-black p-2 hover:text-red-500 hover:cursor-pointer" key={index}>
                { item.name }
              </li>
            )
          }
        </ul>
      </div>
    </div>

  )
}
