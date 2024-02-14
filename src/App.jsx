/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { GarageModel } from './components/GarageModel';
import { OrbitControls } from '@react-three/drei';
import { Html } from "@react-three/drei";

const Loading = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    </Html>
  )
}

console.log('executed');

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

  }, []);

  const nextPage = () => {
    console.log(count);
    if (count > 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <section className='h-screen w-screen relative'>
      <Canvas 
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loading/>}>
          <ambientLight intensity={1} />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
          <GarageModel page={count}/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default App
