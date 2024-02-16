/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, Suspense, useEffect, createContext, useContext, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { GarageModel } from './components/GarageModel';
import { Html, useProgress, OrbitControls, Text } from '@react-three/drei';
import { CameraPositionLogger } from './helpers/CameraPositionLogger';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Loading = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <p>
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  )
}

export const PageContext = createContext(null);

const PlanetPage = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('shelf');
  }, [])

  return (
    <article>
      <h1>Planet Page</h1>
    </article>
  )
}

const CharacterPage = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('garage-slide-door');
  }, [])
  
  return (
    <article>
      <h1>Character Page</h1>
    </article>
  )
}

const HomePage = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('table');
  }, [])

  return (
    <article>
      <h1>Home Page</h1>
    </article>
  )
}

function App() {
  const [page, setPage] = useState('table');
  const [isMobile, setMobile] = useState('');
  const cameraRef = useRef();

  return (
    <BrowserRouter>
      <section className='h-screen w-screen relative'>
        <PageContext.Provider value={{ page, setPage }}>
          <Canvas>
            <Suspense fallback={<Loading/>}>
              <ambientLight intensity={1} />
              <OrbitControls /* enableZoom={false} enableRotate={false} enablePan={false} */ ref={cameraRef}/>
              <CameraPositionLogger event='mousedown' mouseRef={cameraRef} />
              <GarageModel />
            </Suspense>
          </Canvas>
          <Routes>
            <Route path="/planets" element={<PlanetPage />} />
            <Route path="/characters" element={<CharacterPage />}/>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageContext.Provider>
      </section>
      <nav className='absolute top-12 right-12'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default App
