import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import robotoFont from "three/examples/fonts/helvetiker_regular.typeface.json"; // Load a font

extend({ TextGeometry });

const numSymbols = 150; // Adjust density

const font = new FontLoader().parse(robotoFont);

function MatrixSymbol({ position, speed }) {
  const ref = useRef();
  const characters = "01あかさたなABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const char = useMemo(
    () => characters[Math.floor(Math.random() * characters.length)],
    []
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y -= speed;
      if (ref.current.position.y < -5) {
        ref.current.position.y = 5; // Reset to the top when out of view
      }
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <textGeometry args={[char, { font, size: 0.3, height: 0.01 }]} />
      <meshStandardMaterial
        color="#0F0"
        emissive="#0F0"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

export default function MatrixRain() {
  const symbols = useMemo(() => {
    return new Array(numSymbols).fill().map(() => ({
      position: [
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 2 - 1,
      ],
      speed: Math.random() * 0.05 + 0.02,
    }));
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {symbols.map((symbol, index) => (
        <MatrixSymbol
          key={index}
          position={symbol.position}
          speed={symbol.speed}
        />
      ))}
    </Canvas>
  );
}
