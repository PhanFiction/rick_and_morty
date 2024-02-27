import PropTypes from 'prop-types';

export default function OverLay({ children }) {
  return (
    <>
      <div className='absolute top-0 left-0 right-0 min-h-screen overflow-auto z-10'>{ children }</div>
      <div className='absolute top-0 left-0 right-0 min-h-screen bg-rickandmorty-bg opacity-80 bg-cover'></div>
    </>
  )
}

OverLay.propTypes = {
  children: PropTypes.element,
};