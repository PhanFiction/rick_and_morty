/* eslint-disable react/prop-types */
import OverLay from "../OverLay/OverLay";

export default function Modal({ showModal, children }) {
  return (
    <>
      {
        showModal ? (
            <OverLay>
              <div className='flex flex-col justify-center items-center h-screen text-white'>
                <article className='w-1/2 bg-black custom-box-shadow rounded-md relative'>
                  <div className="flex">
                    <button className='absolute right-2 top-0 z-20'>
                      <span className="text-2xl text-white">X</span>
                    </button>
                    <img src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" alt="img" className='rounded-l-md'/>
                    {/*Content*/}
                    <div className="flex flex-col m-6 w-full">
                      <h2 className="font-semibold text-3xl mb-4 text-center">Bible Saurus</h2>
                      <ul className="">
                        <li className="text-lg">Species<span></span></li>
                        <li className="text-lg">Type<span></span></li>
                        <li className="text-lg">Status<span></span></li>
                        <li className="text-lg">Gender<span></span></li>
                        <li className="text-lg">Appearances<span></span></li>
                        <li className="text-lg">Origin<span></span></li>
                        <li className="text-lg">Location<span></span></li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </OverLay>
        ) : null
      }
    </>
  )
}