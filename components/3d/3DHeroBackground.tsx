'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, lazy } from 'react';
import { OrbitControls } from '@react-three/drei';

const TechnicalParticles = lazy(() => import('./TechnicalParticles'));
const MedicalDeviceModel = lazy(() => import('./MedicalDeviceModel'));

export default function ThreeDHeroBackground() {
  return (
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <gridHelper args={[10, 10, '#10B981', '#10B981']} />
        <TechnicalParticles />
        <MedicalDeviceModel />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
