import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, useGLTF, Center } from "@react-three/drei";
import { Suspense } from "react";

function SteelModel() {
  const { scene } = useGLTF("/models/steel-model.glb");
  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  );
}

function Loader() {
  return <Html center>Loading model...</Html>;
}

export function ModelViewer() {
  return (
    <div className="model-viewer-wrap">
      <Canvas camera={{ position: [4, 3, 6], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={<Loader />}>
          <Environment preset="city" />
          <SteelModel />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
}