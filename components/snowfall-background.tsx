"use client"

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

interface SnowfallBackgroundProps {
  className?: string
}

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export function SnowfallBackground({ className }: SnowfallBackgroundProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  // Generate snowflakes only on client side to avoid hydration mismatch
  useEffect(() => {
    const flakes: Snowflake[] = []
    for (let i = 0; i < 30; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 120 - 10, // Start slightly outside viewport
        y: 0, // Start at top of screen
        size: Math.random() * 4 + 12,
        speed: Math.random() * 0.3 + 0.15,
        opacity: Math.random() * 0.8 + 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      })
    }
    setSnowflakes(flakes)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-b from-[var(--snowfall-bg-primary)] to-[var(--snowfall-bg-secondary)] ${className}`}>
      {/* Ice Crystals */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.x}%`,
            opacity: flake.opacity
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, flake.opacity, 0]
          }}
          transition={{
            duration: 8 / flake.speed,
            repeat: Infinity,
            ease: "linear",
            delay: 0
          }}
        >
          <svg
            width={flake.size}
            height={flake.size}
            viewBox="0 0 24 24"
            className="text-blue-600 drop-shadow-sm"
          >
            {/* Ice crystal shape */}
            <g transform="translate(12,12)">
              {/* Center */}
              <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.8" />
              {/* Main arms */}
              <line x1="0" y1="-8" x2="0" y2="8" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-6" y1="-6" x2="6" y2="6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-6" y1="6" x2="6" y2="-6" stroke="currentColor" strokeWidth="0.8" />
              {/* Side branches */}
              <line x1="0" y1="-4" x2="2" y2="-4" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="4" x2="-2" y2="4" stroke="currentColor" strokeWidth="0.5" />
              <line x1="-4" y1="0" x2="-4" y2="2" stroke="currentColor" strokeWidth="0.5" />
              <line x1="4" y1="0" x2="4" y2="-2" stroke="currentColor" strokeWidth="0.5" />
            </g>
          </svg>
        </motion.div>
      ))}

      {/* Gentle snow accumulation effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--snowfall-glow)]/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle wind effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            `linear-gradient(45deg, transparent 0%, var(--snowfall-wind) 50%, transparent 100%)`,
            `linear-gradient(45deg, transparent 0%, var(--snowfall-wind) 50%, transparent 100%)`,
            `linear-gradient(45deg, transparent 0%, var(--snowfall-wind) 50%, transparent 100%)`
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default SnowfallBackground
