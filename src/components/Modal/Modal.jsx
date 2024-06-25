import PropTypes from 'prop-types';
import OverLay from "../OverLay/OverLay";

export default function Modal({ showModal, toggleModal, children }) {
  return (
    <>
      {
        showModal ? (
            <OverLay>
              <div className='flex flex-col justify-center items-center h-screen text-white mt-8'>
                <article className='bg-black custom-box-shadow rounded-md relative'>
                  <button className='absolute right-2 top-0 z-20' onClick={toggleModal}>
                    <span className="text-2xl text-white">X</span>
                  </button>
                  { children }
                </article>
              </div>
            </OverLay>
        ) : null
      }
    </>
  )
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.element,
}