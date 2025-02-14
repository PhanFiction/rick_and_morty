import React from 'react';
import PropTypes from 'prop-types';

export default function CircleButton({ active='not-active', handleClick, refProp, children }) {
  const colors = {
    'active':'scale-125 custom-circle flex items-center justify-center flex-col bg-darkGreen custom-box-shadow ease-in-out duration-300 hover:cursor-pointer',
    'not-active':'scale-75 custom-circle flex items-center justify-center flex-col bg-darkGreen hover:custom-box-shadow ease-in-out duration-300 hover:cursor-pointer'
  }
  return (
    <button
      className={`${colors[active]}`} 
      onClick={handleClick} 
      ref={refProp}>
      { children }
    </button>
  )
}

CircleButton.propTypes = {
  children: PropTypes.element,
  active: PropTypes.string,
  handleClick: PropTypes.func,
  refProp: PropTypes.oneOfType([
    // Either a function
    PropTypes.func, 
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};