import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import FloatingNav from "@/app/components/floating-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KULTOURA 2025 - Cultural Festival",
  description: "Tracing Roots, Bridging Generations: Weaving Oriental Mindoro's Living Heritage",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
          <div className="absolute top-0 left-0 w-full h-64 bg-[url('/pattern-bg.svg')] bg-repeat opacity-10 z-0"></div>
          <FloatingNav />
          <Header />
          <main className="container mx-auto px-4 py-8 md:px-6 relative z-10 max-w-7xl">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

