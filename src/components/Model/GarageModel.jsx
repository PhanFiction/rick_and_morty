/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap"; // Animation library
import { useGLTF } from "@react-three/drei";
import garageScene from '../../assets/rick_and_morty_garage_fan_art.glb';
import { PageContext } from "../../helpers/PageContext";

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

export function GarageModel(props) {
  const { nodes, materials } = useGLTF(garageScene);
  const modelPosRef = useRef();
  const { page } = useContext(PageContext);
  const gsapTL = gsap.timeline(); // set tlRef to be gsap timeline

  useEffect(() => {

    switch (page) {
      case 'garage-entry-door':
        // Door Location
        gsapTL.to(
          modelPosRef.current.position,
          {
            duration: 0.5,
            x: 200,
            y: -450,
            z: -135,
          },
          0
        );
    
        gsapTL.to(
          modelPosRef.current.rotation,
          {
            duration: 1,
            x: Math.PI / 2,
            y: 0,
            z: 0,
          },
          0,
        )
        break;
      case 'garage-slide-door':
        // Garage door Location
        gsapTL.to(
          modelPosRef.current.position,
          {
            duration: 1,
            x: -350,
            y: -750,
            z: -175,
          },
          0
        );
    
        gsapTL.to(
          modelPosRef.current.rotation,
          {
            duration: 1,
            x: Math.PI / 2,
            y: 1.57,
            z: 0,
          },
          0
        );
        break;
      case 'washingmachine':
        // Washing Machine Location
        gsapTL.to(
          modelPosRef.current.position,
          {
            duration: 1,
            x: 100,
            y: -850,
            z: -220,
          },
          0
        )
        gsapTL.to(
          modelPosRef.current.rotation,
          {
            duration: 1,
            x: Math.PI / 2,
            y: -1.58,
            z: 0,
          },
          0
        )
        break
      case 'board':
        // Board Location
        gsapTL.to(
          modelPosRef.current.position,
          {
            duration: 0.5,
            x: 350,
            y: -950,
            z: -250,
          },
          0
        );
    
        gsapTL.to(
          modelPosRef.current.rotation,
          {
            duration: 1,
            x: Math.PI / 2,
            y: -1.95,
            z: -0.1
          },
          0,
        )
        break;
      case 'shelf':
        // Shelf Location
        gsapTL.to(
          modelPosRef.current.position,
          {
            duration: 1,
            x: -40,
            y: -400,
            z: -135,
          },
          0
        );
    
        gsapTL.to(
          modelPosRef.current.rotation,
          {
            duration: 1,
            x: Math.PI / 2,
            y: 0.5,
            z: 0,
          },
          0
        );
        break;
      case 'table':
        // Table Location
        gsapTL.to(
          modelPosRef.current.position,
          {
            duration: 1,
            x: -550, // -200 default
            y: -380, // -380 default 
            z: -20, // -20 default 
          },
          0
        );
    
        gsapTL.to(
          modelPosRef.current.rotation,
          {
            duration: 1,
            x: Math.PI / 2,
            y: 1.6,
            z: 1.53,
          },
          0
        );
        break;
      default:
        console.log('no page found');
    }
  }, [page]);

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
    <group {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <group rotation={[Math.PI / 2, 0, 0]} ref={modelPosRef}>
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