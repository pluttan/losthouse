// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// const Model = ({ url, scale = 1 }) => {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={scale} />;
// };
//
// const Lighting = () => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//     </>
//   );
// };
import React, { useEffect } from 'react';
import './Model.scss';

const CanvasWrapper = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        id="iframehouse"
        title="A-Frame Cabin"
        className="house"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/14c3fb0e1fb24aedb93fb409d819457b/embed?autostart=1&transparent=1"
      />
    </div>
  );
};

export default CanvasWrapper;
  // return (
  //   <Canvas>
  //     <Lighting />
  //     <Suspense fallback={null}>
  //       <Model url="/house1/model.gltf" scale={0.5} />
  //     </Suspense>
  //     <OrbitControls />
  //   </Canvas>
  // );
