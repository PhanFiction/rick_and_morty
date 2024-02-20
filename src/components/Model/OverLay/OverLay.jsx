import PropTypes from 'prop-types';

export function OverLay({ children }) {
  return (
    <section className='absolute top-0 left-0 right-0 min-h-screen flex justify-center items-center'>
      <div className="z-10">{ children }</div>
      <div className='absolute top-0 left-0 right-0 min-h-screen bg-rickandmorty-bg opacity-80 bg-cover'></div>
    </section>
  )
}

OverLay.propTypes = {
  children: PropTypes.element,
};