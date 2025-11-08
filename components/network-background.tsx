"use client"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

interface NetworkBackgroundProps {
  className?: string
}

export function NetworkBackground({ className }: NetworkBackgroundProps) {
  const groupRef = useRef<THREE.Group>(null)

  // Generate network nodes and connections
  const networkData = useMemo(() => {
    const nodes: Array<{
      position: [number, number, number]
      connections: number[]
    }> = []
    const connections: Array<{
      start: [number, number, number]
      end: [number, number, number]
      opacity: number
    }> = []

    // Create nodes
    for (let i = 0; i < 15; i++) {
      nodes.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        connections: [] as number[]
      })
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.position[0] - otherNode.position[0], 2) +
            Math.pow(node.position[1] - otherNode.position[1], 2) +
            Math.pow(node.position[2] - otherNode.position[2], 2)
          )

          if (distance < 8 && Math.random() > 0.7) {
            node.connections.push(j)
            connections.push({
              start: node.position,
              end: otherNode.position,
              opacity: Math.random() * 0.3 + 0.1
            })
          }
        }
      })
    })

    return { nodes, connections }
  }, [])

  // Gentle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005
      groupRef.current.rotation.x += 0.0002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Network connections */}
      {networkData.connections.map((connection, index) => (
        <Line
          key={index}
          points={[connection.start, connection.end]}
          color="#475569"
          lineWidth={1}
          opacity={connection.opacity}
          transparent
        />
      ))}

      {/* Network nodes */}
      {networkData.nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[0.05, 8, 6]} />
          <meshBasicMaterial
            color="#64748b"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export default NetworkBackground
