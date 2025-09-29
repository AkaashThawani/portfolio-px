'use client'

import { useEffect } from 'react'

export default function ViewTracker() {
  useEffect(() => {
    // Call the views API to track the visit
    const trackView = async () => {
      // Don't track admin pages
      if (window.location.pathname.startsWith('/admin')) {
        return
      }

      try {
        await fetch('/api/views', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: window.location.pathname,
          }),
        })
      } catch (error) {
        console.error('Error tracking view:', error)
      }
    }

    trackView()
  }, []) // Empty dependency array ensures it runs only once on mount

  return null // This component doesn't render anything
}
