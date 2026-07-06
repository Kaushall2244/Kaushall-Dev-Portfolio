"use client";
import { useRef, useMemo } from "react"; // Added useMemo here
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null); // Removed duplicate declaration
  
  // Initialize the new Timer
  const timer = useMemo(() => new THREE.Timer(), []);

  useFrame((state, delta) => {
    // Update the timer with the delta
    timer.update(delta);
    
    // Get elapsed time
    const elapsedTime = timer.getElapsed();

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2;
      meshRef.current.rotation.y = Math.cos(elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 1]}>
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={0.5} 
          chromaticAberration={0.5} 
          anisotropy={0.1} 
          distortion={0.5} 
        />
      </Icosahedron>
    </Float>
  );
}