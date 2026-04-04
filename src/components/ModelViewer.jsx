import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Center, useGLTF } from "@react-three/drei";

function ModelObject({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  );
}

function ModelLoader() {
  return <Html center className="model-loader">Loading 3D model...</Html>;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div className="model-viewer-wrap">
      <Canvas camera={{ position: [4, 3, 6], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <Suspense fallback={<ModelLoader />}>
          <Environment preset="city" />
          <ModelObject modelPath={modelPath} />
        </Suspense>
        <OrbitControls enablePan={false} minDistance={2} maxDistance={12} />
      </Canvas>
    </div>
  );
}