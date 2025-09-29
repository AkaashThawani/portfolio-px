import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ViewTracker from "@/components/view-tracker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akaash Thawani - Full Stack Engineer",
  description:
    "Portfolio website of Akaash Thawani, a Software Engineer specializing in front-end development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <ViewTracker />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
