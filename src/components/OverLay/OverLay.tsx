import PropTypes from 'prop-types';
import rickandmortyBG from '../../assets/bg-rickandmorty.png';

export default function OverLay({ children }) {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 min-h-screen overflow-auto z-10'>{ children }</div>
      <img src={rickandmortyBG} alt="img" className="fixed top-0 left-0 right-0 w-full min-h-screen opacity-80 bg-cover"/>
    </>
  )
}

OverLay.propTypes = {
  children: PropTypes.element,
};