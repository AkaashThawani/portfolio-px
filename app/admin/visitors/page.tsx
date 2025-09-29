'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

interface VisitorStats {
  totalVisits: number
  uniqueIPs: number
  countries: string[]
  last30Days: Array<{ date: string, visits: number }>
  visitors: Array<{
    id: number
    ip_address: string
    user_agent: string
    country: string | null
    city: string | null
    region: string | null
    latitude: number | null
    longitude: number | null
    page_url: string
    visited_at: string
  }>
}

export default function AdminVisitorsPage() {
  const [stats, setStats] = useState<VisitorStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_SUPABASE_URL!,
    process.env.NEXT_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/session')
      const data = await response.json()

      if (!response.ok || !data.authenticated) {
        router.push('/admin/login')
        return
      }
      setAuthenticated(true)
      fetchStats()
    } catch (error) {
      router.push('/admin/login')
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/visitors')
      if (!response.ok) throw new Error('Failed to fetch data')
      const data = await response.json()
      setStats(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!authenticated) {
    return <div className="min-h-screen flex items-center justify-center">Authenticating...</div>
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading visitor data...</div>
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  }

  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-dark)' }}>
      <h1 className="text-3xl font-bold mb-8 hero-title pt-12">Visitor Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card project-card">
          <h2 className="text-xl font-semibold mb-2 text-accent">Total Visits</h2>
          <p className="text-3xl font-bold" style={{ color: '#6366f1' }}>{stats?.totalVisits || 0}</p>
        </div>
        <div className="card project-card">
          <h2 className="text-xl font-semibold mb-2 text-accent">Unique IPs</h2>
          <p className="text-3xl font-bold" style={{ color: '#10b981' }}>{stats?.uniqueIPs || 0}</p>
        </div>
        <div className="card project-card">
          <h2 className="text-xl font-semibold mb-2 text-accent">Countries</h2>
          <p className="text-3xl font-bold" style={{ color: '#a855f7' }}>{stats?.countries.length || 0}</p>
        </div>
      </div>

      <div className="card project-card mb-8">
        <h2 className="text-xl font-semibold mb-4 text-accent">Visits Last 30 Days</h2>
        <div className="h-64 flex items-end space-x-2">
          {stats?.last30Days.map((day) => (
            <div key={day.date} className="flex-1 flex flex-col items-center">
              <div
                className="w-full mb-2"
                style={{
                  height: Math.max((day.visits / Math.max(...stats.last30Days.map(d => d.visits))) * 250, 1),
                  background: 'linear-gradient(135deg, #6366f1 0%, #a21caf 100%)'
                }}
              ></div>
              <span className="text-xs text-gray-400 transform rotate-45 origin-top-left">
                {new Date(day.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="card project-card">
        <h2 className="text-xl font-semibold mb-4 text-accent">Recent Visitors</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto" style={{ color: 'var(--color-text-dark)' }}>
            <thead>
              <tr style={{ background: '#1e293b' }}>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">IP</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Page</th>
              </tr>
            </thead>
            <tbody>
              {stats?.visitors.slice(0, 50).map((visitor) => (
                <tr key={visitor.id} style={{ borderTop: '1px solid #374151' }}>
                  <td className="px-4 py-2">{new Date(visitor.visited_at).toLocaleString()}</td>
                  <td className="px-4 py-2 font-mono text-sm">{visitor.ip_address}</td>
                  <td className="px-4 py-2">
                    {visitor.city && visitor.country ? `${visitor.city}, ${visitor.country}` :
                     visitor.country || 'Unknown'}
                  </td>
                  <td className="px-4 py-2">{visitor.page_url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
