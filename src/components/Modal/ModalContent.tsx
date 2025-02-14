import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = ({ character }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/*Content*/}
      <img src={character?.image} alt="img" className='rounded-md w-full'/>
      <div className="flex flex-col m-0 my-4 md:my-4 md:mx-4 w-full">
        <h2 className='text-lighterGreen font-semibold text-2xl my-2 text-center font-Truculenta'>{ character?.name }</h2>
        <ul className='px-8 [&>li]:my-1 [&>li>span]:text-lightGray text-left font-Touri'>
          <li><span>Species: </span>{character?.species}</li>
          <li><span>Status: </span>{character?.status}</li>
          <li><span>Gender: </span>{character?.gender}</li>
          <li><span>Appearances: </span>{character.episode?.length}</li>
          <li><span>Origin: </span>{character.origin?.name}  </li>
          <li><span>Location: </span>{character.location?.name}</li>
        </ul>
      </div>
    </div>
  )
}

export default ModalContent;

ModalContent.propTypes = {
  character: PropTypes.object,
}