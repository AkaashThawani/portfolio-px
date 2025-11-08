"use client"

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

interface RainBackgroundProps {
  className?: string
}

interface Raindrop {
  id: number
  x: number
  length: number
  speed: number
  opacity: number
  delay: number
}

export function RainBackground({ className }: RainBackgroundProps) {
  const [raindrops] = useState<Raindrop[]>(() => {
    const drops: Raindrop[] = []
    for (let i = 0; i < 80; i++) {
      drops.push({
        id: i,
        x: Math.random() * 100,
        length: Math.random() * 25 + 15,
        speed: Math.random() * 0.4 + 0.6,
        opacity: Math.random() * 0.5 + 0.4,
        delay: Math.random() * 5
      })
    }
    return drops
  })

  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-b from-[var(--rain-bg-primary)] to-[var(--rain-bg-secondary)] ${className}`}>
      {/* Raindrops */}
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute bg-blue-300 rounded-full"
          style={{
            left: `${drop.x}%`,
            width: '2px',
            height: `${drop.length}px`,
            opacity: drop.opacity,
            boxShadow: `0 0 4px rgba(147, 197, 253, 0.8)`
          }}
          animate={{
            y: ['-5vh', '100vh'],
            opacity: [0, drop.opacity, 0]
          }}
          transition={{
            duration: 1.5 / drop.speed,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Rain splash effects */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`splash-${i}`}
          className="absolute bottom-0 w-2 h-2"
          style={{
            left: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        >
          <div className="w-full h-full bg-blue-200 rounded-full" />
          <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping" />
        </motion.div>
      ))}

      {/* Misty atmosphere */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 30% 20%, rgba(191, 219, 254, 0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at 70% 80%, rgba(191, 219, 254, 0.4) 0%, transparent 50%)`,
            `radial-gradient(circle at 30% 20%, rgba(191, 219, 254, 0.3) 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle water reflection effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-300/20 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default RainBackground
