import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Line, OrbitControls } from "@react-three/drei";

const RotatingTetrahedron = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  return (
    <group ref={ref}>
      <Line
        points={[
          [1, 1, 1],
          [-1, -1, 1],
          [-1, 1, -1],
          [1, 1, 1],
          [1, -1, -1],
          [-1, -1, 1],
          [-1, 1, -1],
          [1, -1, -1],
        ]}
        color="#07c569"
        lineWidth={1.5}
      />
    </group>
  );
};

const GlassCube = () => {
  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color="#07c569" wireframe transparent opacity={0.2} />
      <Edges color="#07c569" />
    </mesh>
  );
};

const HolographicScene = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <GlassCube />
      <RotatingTetrahedron />
      <OrbitControls />
    </Canvas>
  );
};

export default HolographicScene;
