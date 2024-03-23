import PropTypes from 'prop-types';

export default function Card({ children }) {
  return (
    <div className='rounded-md border-2 border-lightGreen custom-box-shadow residentCard cursor-pointer bg-black'>
      { children }
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.element,
}