import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface GeolocationData {
  ip: string
  hostname?: string
  city?: string
  region?: string
  country?: string
  loc?: string
  org?: string
  postal?: string
  timezone?: string
}

async function getClientIP(request: NextRequest): Promise<string> {
  // Vercel forwards the real IP in x-forwarded-for
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cloudflareIP = request.headers.get('cf-connecting-ip')

  if (cloudflareIP) return cloudflareIP
  if (forwarded) return forwarded.split(',')[0].trim()
  if (realIP) return realIP

  // Fallback
  return '0.0.0.0'
}

async function getGeolocation(ip: string): Promise<GeolocationData | null> {
  const token = process.env.IPINFO_TOKEN
  if (!token) {
    console.warn('IPINFO_TOKEN not configured, skipping geolocation')
    return null
  }

  try {
    const response = await fetch(`https://ipinfo.io/${ip}?token=${token}`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Geolocation error:', error)
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = await getClientIP(request)
    const userAgent = request.headers.get('user-agent') || ''
    const { page = '/' } = await request.json().catch(() => ({ page: '/' }))

    // Skip tracking localhost/internal IPs
    if (clientIP === '127.0.0.1' || clientIP === '::1' || clientIP.startsWith('192.168.') || clientIP.startsWith('10.')) {
      return NextResponse.json({ success: true, message: 'Skipped tracking internal IP' })
    }

    // Get geolocation data
    const geoData = await getGeolocation(clientIP)

    // Insert visitor data
    const { error } = await supabase
      .from('visitors')
      .insert({
        ip_address: clientIP,
        user_agent: userAgent,
        country: geoData?.country,
        city: geoData?.city,
        region: geoData?.region,
        latitude: geoData?.loc ? parseFloat(geoData.loc.split(',')[0]) : null,
        longitude: geoData?.loc ? parseFloat(geoData.loc.split(',')[1]) : null,
        page_url: page,
      })

    if (error) {
      console.error('Database insert error:', error)
      return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Views API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
