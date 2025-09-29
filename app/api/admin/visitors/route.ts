import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    // Optional: Add authentication check here
    // For now, just return all visitor data

    const { data, error } = await supabaseAdmin
      .from('visitors')
      .select('*')
      .order('visited_at', { ascending: false })
      .limit(1000) // Limit to prevent overwhelming response

    if (error) {
      console.error('Database query error:', error)
      return NextResponse.json({ error: 'Failed to fetch visitor data' }, { status: 500 })
    }

    // Calculate some stats
    const totalVisits = data.length
    const uniqueIPs = new Set(data.map(v => v.ip_address)).size
    const countries = [...new Set(data.map(v => v.country).filter(Boolean))]

    // Group by date for last 30 days
    const last30Days = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const visitsOnDate = data.filter(v =>
        v.visited_at.startsWith(dateStr)
      ).length
      last30Days.push({ date: dateStr, visits: visitsOnDate })
    }

    return NextResponse.json({
      success: true,
      data: {
        totalVisits,
        uniqueIPs,
        countries,
        last30Days,
        visitors: data
      }
    })

  } catch (error) {
    console.error('Admin visitors API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
