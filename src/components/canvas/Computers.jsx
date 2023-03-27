import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; //canvas is an empty canvas to place something on it
import { FirstPersonControls, OrbitControls, Preload, useGLTF} from '@react-three/drei'; 

//useGLTF will allow us to use 3D models on the web page

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01,-.02,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    
    //Set initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);


    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    
    //Add the callback function as a listener for chnages to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    
    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };

  }, []);

  return(
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1,2]}
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}  
          maxPolarAngle={Math.PI /2 } 
          min PolarAngle={Math.PI /2 } 
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;