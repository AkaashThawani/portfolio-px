"use client"

import { useState, useMemo, createContext, useContext, ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { NetworkBackground } from './network-background'
import { SnowfallBackground } from './snowfall-background'
import { RainBackground } from './rain-background'
import { SunlightBackground } from './sunlight-background'
import { FlowerFallBackground } from './flower-fall-background'

type BackgroundType = 'snowfall' | 'rain' | 'sunlight' | 'flowerfall'

// Theme context for global theme management
const ThemeContext = createContext<{
  currentTheme: BackgroundType
  setCurrentTheme: (theme: BackgroundType) => void
}>({
  currentTheme: 'snowfall',
  setCurrentTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<BackgroundType>('snowfall')

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

interface BackgroundSwitcherProps {
  className?: string
}

export function BackgroundSwitcher({ className }: BackgroundSwitcherProps) {
  const { currentTheme, setCurrentTheme } = useTheme()
  console.log('BackgroundSwitcher currentTheme:', currentTheme)

  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`}>
      {/* CSS-based backgrounds */}
      {currentTheme === 'snowfall' && <SnowfallBackground />}
      {currentTheme === 'rain' && <RainBackground />}
      {currentTheme === 'flowerfall' && <FlowerFallBackground />}

      {/* Three.js Canvas backgrounds */}
      {currentTheme === 'sunlight' && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            {/* Ambient lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.3} />

            {/* Render sunlight background */}
            <SunlightBackground />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default BackgroundSwitcher
