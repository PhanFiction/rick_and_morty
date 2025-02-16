import React, { useState } from 'react';
import OverLay from '../../components/OverLay/OverLay';
import { usePageLocation } from '../../hooks/usePageLocation';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useFetchMultipleCharacters, useSearchLocation, useFetchSingleCharacter } from '../../hooks/useFetchData';
import { extractCharacterIds } from '../../helpers/extractCharacterIds';
import Modal from '../../components/Modal/Modal';
import ModalContent from '../../components/Modal/ModalContent';
import Card from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';
import rickandmortyCircle from '../../assets/circle-rickandmorty.png';
import rickandmortyTitle from '../../assets/title-rickandmorty.png';

interface Planet {
  name?: string | null;
  type?: string | null;
  dimension?: string | null;
  residents?: string | null;
}

export default function PlanetPage() {
  usePageLocation('washingmachine');
  const [userInput, setUserInput] = useState('');
  const [planet, setPlanet] = useState<Planet>({
    name: 'Earth',
    type: 'Earth',
    dimension: 'Earth',
    residents: ''
  });
  const [multipleCharIds, setMultCharIds] = useState([0]);
  const [characterId, setCharacterId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Below is custom hooks of useEffects
  const fetchedLocationData = useSearchLocation(userInput);
  const fetchedCharactersData = useFetchMultipleCharacters(multipleCharIds);
  const fetchedSingleCharacterData = useFetchSingleCharacter(characterId);

  // Toggle modal when user clicks on card
  const toggleModal = (charId: number) => { 
    setShowModal(!showModal);
    setCharacterId(charId);
  }

  const handleUserInput = (e: { target: { value: React.SetStateAction<string>; }; }) => setUserInput(e.target.value);
  
  const selectedLocation = (location: any) => {
    setUserInput('');
    const parsedCharacterIds = extractCharacterIds(location.residents);
    setPlanet(location);
    setMultCharIds(parsedCharacterIds);
  }
  
  return (
    <OverLay>
      <div className='w-full h-screen flex flex-col items-center gap-4 text-white'>

        <div className='relative flex justify-center flex-col items-center w-full -top-12'>
          <img src={rickandmortyCircle } alt="circle" className='w-[100%] sm:w-[60%] lg:w-[50%]'/>
          <img src={rickandmortyTitle} alt="title" className='w-[70%] sm:w-[45%] lg:w-[35%] bottom-0 absolute'/>
        </div>

        <form className='w-full'>
          <Searchbar 
            locations={fetchedLocationData.results} 
            userInput={userInput} 
            handleUserInput={handleUserInput} 
            setLocation={selectedLocation}
          />
        </form>

        {/*Box to show type, dimension, and population based on user search*/}
        <div className='w-72 md:w-6/12 border-2 border-darkGreen custom-box-shadow rounded-md mt-8 p-4'>
          <h1 className='text-center font-semibold text-lg font-Edu'>{planet.name}</h1>
          <ul className='flex flex-col justify-center gap-4 sm:flex-row my-4 font-Truculenta'>
            <li className='text-md text-lightGray'>Type: <span className='font-semibold text-white'>{planet?.type}</span></li>
            <li className='text-md text-lightGray'>Dimension: <span className='font-semibold text-white'>{planet?.dimension}</span></li>
            <li className='text-md text-lightGray'>Population: <span className='font-semibold text-white'>{planet.residents?.length}</span></li>
          </ul>
        </div>

        {/*Display list of all characters once user selected the planet*/}
        <article className='flex flex-col text-white'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16 mx-8 md:ml-24'>
            {
              fetchedCharactersData?.map((character) => (
                <Card key={character.id}>
                  <button onClick={()=>{toggleModal(character.id)}}>
                    <CardContent character={character} />
                  </button>
                </Card>
              ))
            }
          </div>
          <Modal showModal={showModal} toggleModal={toggleModal}>
            <ModalContent character={fetchedSingleCharacterData}/>
          </Modal>
        </article>
      </div>
    </OverLay>
  )
}
