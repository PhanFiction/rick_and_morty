import React, { useState } from 'react';
import OverLay from '../../components/OverLay/OverLay';
import Pagination from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { useFetchData, useSearchLocation, useFetchSingleCharacter } from '../../hooks/useFetchData';
import { usePageLocation } from '../../hooks/usePageLocation';
import Modal from '../../components/Modal/Modal';
import ModalContent from '../../components/Modal/ModalContent';
import Card from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';

export default function CharacterPage() {
  usePageLocation('shelf');
  useSearchLocation('earth');
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')); // Fetch page from URL and convert from Str to Int
  const [, setActivePage] = useState(page); // set active page to be coverted page number
  const fetchedData = useFetchData(page);
  const { results, info } = fetchedData;
  const [characterId, setCharacterId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const fetchedSingleCharacterData = useFetchSingleCharacter(characterId);

  const nextPage = (nextPage) => {
    setSearchParams({ page: nextPage });
    if (nextPage > 0 && nextPage <= info?.pages) setActivePage(nextPage);
  }

  const toggleModal = (charId) => { 
    setShowModal(!showModal);
    setCharacterId(charId);
  }

  return (
    <OverLay>
      <article className='flex flex-col text-white overflow-auto h-screen scrollbar items-center'>
        <h1 className='text-center text-4xl font-Edu sm:text-6xl mt-12 sm:my-20 border-2 border-darkGreen custom-box-shadow rounded-md p-4 w-1/4'>Characters</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 md:ml-24'>
          {
            results?.map(character => (
              <Card key={character.id}>
                <button onClick={()=>{toggleModal(character.id)}}>
                  <CardContent character={character} />
                </button>
              </Card>
            ))
          }
          <Modal showModal={showModal} toggleModal={toggleModal}>
            <ModalContent character={fetchedSingleCharacterData}/>
          </Modal>
        </div>
        
        <div className='flex justify-center items-center gap-2 my-4'>
          <Pagination totalPages={info?.pages} activePage={page} nextPage={nextPage} />
        </div>
      </article>
    </OverLay>
  )
}
