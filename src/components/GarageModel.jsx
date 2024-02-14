/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useFrame } from '@react-three/fiber'
import gsap from "gsap";
import { useGLTF, useScroll } from "@react-three/drei";
import garageScene from '../assets/rick_and_morty_garage_fan_art.glb';

/* const positions = {
  washingmachine: {
    pos: [100,-850,-220],
    rot: [Math.PI / 2, -1.58, 0],
  },
  door: {
    pos: [200,-450,-135],
    rot: [Math.PI / 2, 0, 0],
  },
  board: {
    pos: [350,-950, -250],
    rot: [Math.PI / 2, -1.95, -0.1],
  },
  shelf: {
    pos: [-40,-400,-135],
    rot: [Math.PI / 2, 0.5, 0]
  }
} */


// camera positions and angles of 3D model for camera
const positions = [
  {
    pos: [200,-450,-135],
    rot: [Math.PI / 2, 0, 0],
  },
  {
    pos: [100,-850,-220],
    rot: [Math.PI / 2, -1.58, 0],
  },
  {
    pos: [350,-950, -250],
    rot: [Math.PI / 2, -1.95, -0.1],
  },
  {
    pos: [-40,-400,-135],
    rot: [Math.PI / 2, 0.5, 0]
  }
]

export function GarageModel(props) {
  const { nodes, materials, scene } = useGLTF(garageScene);
  const modelPosRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useEffect(() => {
    return () => {
      // Clean up resources when component unmounts
      nodes.traverse(node => {
        if (node.isMesh) {
          node.geometry.dispose();
          node.material.dispose();
        }
      });
    };
  }, [nodes]);

  return (
    <group {...props} ref={modelPosRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <group rotation={positions[0].rot} position={positions[0].pos}>
          <group
            position={[200, 0, -70]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wood_WoodMat_0.geometry}
              material={materials.WoodMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wood_Outline_0.geometry}
              material={materials.Outline}
            />
          </group>
          <group position={[0, 100, -80]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wall_WallMat_0.geometry}
              material={materials.WallMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wall_Outline_0.geometry}
              material={materials.Outline}
            />
          </group>
          <group
            position={[-100, 300, -74.508]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cable-Dark_Cable-DarkMat_0"].geometry}
              material={materials["Cable-DarkMat"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cable-Dark_Outline_0"].geometry}
              material={materials.Outline}
            />
          </group>
          <group
            position={[-86.888, 300, -74.508]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cable-Light_Cable-LightMat_0"].geometry}
              material={materials["Cable-LightMat"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cable-Light_Outline_0"].geometry}
              material={materials.Outline}
            />
          </group>
          <group
            position={[-200, 0, 719.823]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wood001_WoodMat_0.geometry}
              material={materials.WoodMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wood001_Outline_0.geometry}
              material={materials.Outline}
            />
          </group>
          <group
            position={[0, 341.486, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ceiling_CeilingMat_0.geometry}
              material={materials.CeilingMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ceiling_Outline_0.geometry}
              material={materials.Outline}
            />
          </group>
          <group
            position={[30, 0, 1.197]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_InteriorMat_0.geometry}
              material={materials.InteriorMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_Outline_0.geometry}
              material={materials.Outline}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_FloorMat_0.geometry}
            material={materials.FloorMat}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Background_BackgroundMat_0.geometry}
            material={materials.BackgroundMat}
            position={[275, 165, -144.623]}
            scale={114.942}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_InteriorMat_0.geometry}
            material={materials.InteriorMat}
            position={[275, 172.572, -74.623]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_InteriorMat_0.geometry}
            material={materials.InteriorMat}
            position={[-285.672, 100.829, 650.883]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(null);