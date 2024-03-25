import { useState, Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { GarageModel } from './components/Model/GarageModel';
import { Html, useProgress, OrbitControls } from '@react-three/drei';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageContext } from './helpers/PageContext';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import PlanetPage from './pages/PlanetPage/PlanetPage';
import Nav from './components/Nav/Nav';

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

function App() {
  const [page, setPage] = useState('garage-slide-door');
  const cameraRef = useRef();

  //<div className='h-screen relative overflow-hidden'>
  return (
    <BrowserRouter>
      <div className='h-screen relative'>
        <PageContext.Provider value={{ page, setPage }}>
          <Canvas 
            camera = {{
              fov: 75, // default 75 FOV for desktop, set to 90 for mobile
            }}
          >
            <Suspense fallback={<Loading/>}>
              <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} ref={cameraRef}/>
              <GarageModel />
            </Suspense>
          </Canvas>
          <Routes>
            <Route path="/planets" element={<PlanetPage />} />
            <Route path="/characters" element={<CharacterPage />}/>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageContext.Provider>
      </div>
      <Nav />
    </BrowserRouter>
  )
}

export default App
