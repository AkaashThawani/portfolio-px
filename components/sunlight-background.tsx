"use client"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

interface SunlightBackgroundProps {
  className?: string
}

export function SunlightBackground({ className }: SunlightBackgroundProps) {
  const groupRef = useRef<THREE.Group>(null)

  // Generate diagonal sunlight beams from top-right in world coordinates
  const sunlightBeams = useMemo(() => {
    const beams = []

    // Camera is at [0, 0, 5], fov 75, so visible area is roughly -4 to 4 in x/y at z=0
    for (let i = 0; i < 8; i++) {
      // Create diagonal beams from top-right to bottom-left with increased bottom spread
      const startX = 3.5 - (i * 0.4) // Start from right edge in world coords
      const startY = 2.5 // Start from top
      const endX = startX - 8 - (i * 0.8) // Increased spread at bottom (was 6 + 0.3)
      const endY = -3.5 // End further down

      beams.push({
        start: [startX, startY, 0] as [number, number, number],
        end: [endX, endY, 0] as [number, number, number],
        color: new THREE.Color().setHSL(0.12 + Math.random() * 0.08, 0.9, 0.75), // Golden yellow hues
        opacity: Math.random() * 0.2 + 0.25
      })
    }

    return beams
  }, [])

  // Gentle animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0001

      // Animate beam opacity for flickering effect
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          const material = child.material as THREE.LineBasicMaterial
          const baseOpacity = sunlightBeams[index]?.opacity || 0.2
          const flicker = Math.sin(state.clock.elapsedTime * 3 + index) * 0.1 + 0.9
          material.opacity = baseOpacity * flicker
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Sunlight beams */}
      {sunlightBeams.map((beam, index) => (
        <Line
          key={index}
          points={[beam.start, beam.end]}
          color={beam.color}
          lineWidth={2}
          opacity={beam.opacity}
          transparent
        />
      ))}

      {/* Sun positioned at top-right (light source) */}
      <mesh position={[4, 3, 0]}>
        <sphereGeometry args={[0.8, 16, 12]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Sun glow rings at light source */}
      {[1.5, 2.2, 3.0].map((radius, index) => (
        <mesh key={`glow-${index}`} position={[4, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius, radius + 0.2, 32]} />
          <meshBasicMaterial
            color="#f59e0b"
            transparent
            opacity={0.2 - index * 0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Warm light particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const distance = 6 + Math.random() * 6
        const height = (Math.random() - 0.5) * 4

        return (
          <mesh key={`particle-${i}`} position={[
            Math.cos(angle) * distance,
            height,
            Math.sin(angle) * distance
          ]}>
            <sphereGeometry args={[0.15, 8, 6]} />
            <meshBasicMaterial
              color={new THREE.Color().setHSL(0.1 + Math.random() * 0.15, 0.8, 0.8)}
              transparent
              opacity={0.7}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default SunlightBackground
