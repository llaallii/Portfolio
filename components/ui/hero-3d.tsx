"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export interface Hero3DProps {
  /** Rotate the camera automatically using OrbitControls */
  autoRotate?: boolean
}

/**
 * Renders a lightweight Three.js scene with floating geometry and particles.
 * The component uses imperative Three.js APIs so it can live alongside other
 * React UI without additional dependencies like react-three-fiber.
 */
export function Hero3D({ autoRotate = true }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // Floating geometry
    const geometry = new THREE.IcosahedronGeometry(1, 0)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Simple particle system
    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Camera controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = autoRotate
    controls.enableDamping = true

    const onResize = () => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", onResize)

    let frameId: number
    const animate = () => {
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.01
      controls.update()
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", onResize)
      controls.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [autoRotate])

  return <div ref={containerRef} className="absolute inset-0" />
}

export default Hero3D

