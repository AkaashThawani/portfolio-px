"use client"

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

interface FlowerFallBackgroundProps {
  className?: string
}

interface Flower {
  id: number
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
  color: string
  petalCount: number
  type: 'maple' | 'oak' | 'cherry'
}

export function FlowerFallBackground({ className }: FlowerFallBackgroundProps) {
  const [flowers, setFlowers] = useState<Flower[]>([])

  // Generate flowers only on client side to avoid hydration mismatch
  useEffect(() => {
    const flowerArray: Flower[] = []
    const types: ('maple' | 'oak' | 'cherry')[] = ['maple', 'oak', 'cherry']
    const colors = [
      'var(--autumn-leaf-1)',
      'var(--autumn-leaf-2)',
      'var(--autumn-leaf-3)',
      'var(--autumn-leaf-4)',
      'var(--autumn-leaf-5)'
    ]

    for (let i = 0; i < 25; i++) {
      flowerArray.push({
        id: i,
        x: Math.random() * 100,
        y: -10, // Start at top of screen
        size: Math.random() * 8 + 6,
        speed: Math.random() * 0.3 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        petalCount: Math.floor(Math.random() * 3) + 3,
        type: types[Math.floor(Math.random() * types.length)]
      })
    }
    setFlowers(flowerArray)
  }, [])

  const renderLeaf = (flower: Flower) => {
    // All particles are now autumn leaves
    return (
      <svg
        width={flower.size}
        height={flower.size}
        viewBox="0 0 24 24"
        className="drop-shadow-sm"
      >
        {/* Leaf shape */}
        <path
          d="M12 2C8 2 4 6 4 10C4 12 5 14 7 15C8 16 9 17 10 18C11 19 12 20 12 20C12 20 13 19 14 18C15 17 16 16 17 15C19 14 20 12 20 10C20 6 16 2 12 2Z"
          fill={flower.color}
        />
        {/* Leaf stem */}
        <line
          x1="12"
          y1="20"
          x2="12"
          y2="22"
          stroke={flower.color}
          strokeWidth="1"
          opacity="0.8"
        />
        {/* Leaf vein */}
        <line
          x1="12"
          y1="4"
          x2="12"
          y2="18"
          stroke={flower.color}
          strokeWidth="0.5"
          opacity="0.6"
        />
      </svg>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-b from-[var(--autumn-bg-primary)] to-[var(--autumn-bg-secondary)] ${className}`}>
      {/* Falling flowers/leaves */}
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`
          }}
          animate={{
            y: [0, 800],
            x: [
              0,
              Math.sin(Date.now() * 0.001 + flower.id) * 50,
              Math.sin(Date.now() * 0.001 + flower.id) * 100,
              Math.sin(Date.now() * 0.001 + flower.id) * 150,
              Math.sin(Date.now() * 0.001 + flower.id) * 200
            ],
            rotate: flower.rotation + 720
          }}
          transition={{
            duration: 8 / flower.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        >
          {renderLeaf(flower)}
        </motion.div>
      ))}

      {/* Ground accumulation effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-200/40 via-yellow-100/30 to-transparent"
        animate={{
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gentle breeze effect */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          background: [
            `linear-gradient(45deg, rgba(251, 146, 60, 0.1) 0%, rgba(234, 88, 12, 0.05) 50%, rgba(251, 146, 60, 0.1) 100%)`,
            `linear-gradient(45deg, rgba(234, 88, 12, 0.1) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(234, 88, 12, 0.1) 100%)`,
            `linear-gradient(45deg, rgba(251, 146, 60, 0.1) 0%, rgba(234, 88, 12, 0.05) 50%, rgba(251, 146, 60, 0.1) 100%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-orange-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  )
}

export default FlowerFallBackground
