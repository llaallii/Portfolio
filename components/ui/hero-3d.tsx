'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export interface Hero3DProps {
  /** Number of particles in the background field */
  particleCount?: number
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = t * 0.2
      group.current.children.forEach((child, idx) => {
        child.position.y = Math.sin(t + idx) * 0.5
      })
    }
  })
  return (
    <group ref={group}>
      <mesh position={[-1.2, 0, 0]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#0EA5E9" />
      </mesh>
      <mesh position={[1.2, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      <mesh position={[0, 0, -1.5]} castShadow>
        <torusGeometry args={[0.4, 0.15, 16, 32]} />
        <meshStandardMaterial color="#10B981" />
      </mesh>
    </group>
  )
}

function ParticleField({ count }: { count: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])
  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.03} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Hero3D({ particleCount = 500 }: Hero3DProps) {
  return (
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingShapes />
      <ParticleField count={particleCount} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export { Hero3D }
export type { Hero3DProps }
