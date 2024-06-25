import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export function CameraPositionLogger({ event = {} }) {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  // camera positions and angles of 3D model for camera

  useEffect(() => {
    const logCameraPosition = () => {
      let cameraPos = cameraRef.current.position;
      let cameraRot = cameraRef.current.rotation;

      const roundedXPos = Math.round(cameraPos.x * 100) / 100;
      const roundedYPos = Math.round(cameraPos.y * 100) / 100;
      const roundedZPos = Math.round(cameraPos.z * 100) / 100;

      const roundedXRot = Math.round(cameraRot.x * 100) / 100;
      const roundedYRot = Math.round(cameraRot.y * 100) / 100;
      const roundedZRot = Math.round(cameraRot.z * 100) / 100;

      //console.log(mouseRef.current.position, mouseRef.current.rotation);
      console.log(`Position: x ${roundedXPos} y ${roundedYPos} z ${roundedZPos}`);
      console.log(` Rotation: x ${roundedXRot} y ${roundedYRot} z ${roundedZRot}`);
    }
    cameraRef.current = camera;
    window.addEventListener(event, logCameraPosition);

    return () => {
      window.removeEventListener(event, logCameraPosition);
    }
  }, []);
  
  return null;
}

CameraPositionLogger.propTypes = {
  event: PropTypes.event,
}