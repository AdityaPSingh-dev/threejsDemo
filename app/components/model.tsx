"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./starwars";

const Starwars = () => {
  return (
    <div className="w-full h-full p-24">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
        <Model scale={0.5} />
      </Canvas>
    </div>
  );
};

export default Starwars;
