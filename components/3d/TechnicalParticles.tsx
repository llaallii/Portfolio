'use client';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

export default function TechnicalParticles() {
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  return (
    <Points positions={particles} frustumCulled={false}>
      <PointMaterial color="#0EA5E9" size={0.05} sizeAttenuation depthWrite={false} />
    </Points>
  );
}
