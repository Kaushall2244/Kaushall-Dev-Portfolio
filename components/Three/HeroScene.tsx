"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, TorusKnot, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { clock, pointer } = state;
    const elapsedTime = clock.getElapsedTime();

    if (meshRef.current) {
      // Rotation: combining automatic kinetic spin and mouse coordinate follow
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        pointer.y * 0.6 + elapsedTime * 0.15,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        pointer.x * 0.6 + elapsedTime * 0.2,
        0.05
      );

      // Slight translational hover based on cursor
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        pointer.x * 0.5,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        pointer.y * 0.5,
        0.05
      );
    }
  });

  return (
    <>
      {/* Lighting matrix for premium refractive glass rendering */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={2.0} color="#ccff00" />
      <pointLight position={[5, -5, 5]} intensity={1.2} color="#00ffff" />

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <TorusKnot ref={meshRef} args={[0.9, 0.28, 150, 20]} scale={1.3}>
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.8}
            chromaticAberration={0.4}
            anisotropy={0.3}
            distortion={0.3}
            distortionScale={0.3}
            temporalDistortion={0.1}
            roughness={0.08}
            transmission={0.95}
            color="#ffffff"
          />
        </TorusKnot>
      </Float>
    </>
  );
}