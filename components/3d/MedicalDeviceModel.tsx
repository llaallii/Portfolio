'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MedicalDeviceModel() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
      <meshStandardMaterial color="#8B5CF6" />
    </mesh>
  );
}
