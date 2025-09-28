import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function SpinningPoly() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.45;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial metalness={0.6} roughness={0.2} color="#2563eb" />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 3, 2]} intensity={1.1} />
        <SpinningPoly />
        
        <OrbitControls enableZoom={false} enablePan={false} />
        <Stars radius={150} depth={55} count={8000} factor={5} fade />
      </Canvas>
    </div>
  );
}
