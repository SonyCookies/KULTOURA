"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideMenu, LucideX, LucidePieChart, LucideFileText, LucideCalendar, LucideMegaphone, LucideClipboardList, LucideNewspaper, LucideTrophy, LucideHome, LucideChevronRight } from 'lucide-react'

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", path: "/", icon: <LucideHome className="h-5 w-5" /> },
    { name: "Budget Portal", path: "/budget", icon: <LucidePieChart className="h-5 w-5" /> },
    { name: "Budget Report", path: "/budget-report", icon: <LucideFileText className="h-5 w-5" /> },
    { name: "Program Flow", path: "/program-flow", icon: <LucideCalendar className="h-5 w-5" /> },
    { name: "Announcements", path: "/announcements", icon: <LucideMegaphone className="h-5 w-5" /> },
    { name: "Event Criteria", path: "/criteria", icon: <LucideClipboardList className="h-5 w-5" /> },
    { name: "News & Updates", path: "/news", icon: <LucideNewspaper className="h-5 w-5" /> },
    { name: "Results", path: "/results", icon: <LucideTrophy className="h-5 w-5" /> },
  ]

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleNav}
        className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 text-white right-[280px] lg:right-[320px]" : "bg-green-600 text-white right-6"
        } top-10`}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <LucideX className="h-6 w-6" /> : <LucideMenu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isMobile && isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleNav} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-[280px] lg:w-[320px]" : "w-0"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-6">
            <h2 className="text-xl font-bold">KULTOURA 2025</h2>
            <p className="text-sm text-green-100">Navigation Menu</p>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        pathname === item.path
                          ? "bg-green-50 text-green-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={isMobile ? toggleNav : undefined}
                    >
                      <span className="mr-3 text-green-600">{item.icon}</span>
                      <span>{item.name}</span>
                      {pathname === item.path && <LucideChevronRight className="ml-auto h-4 w-4 text-green-600" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="bg-green-50 rounded-lg p-4 text-sm text-gray-600">
              <p className="font-medium text-green-800 mb-1">KULTOURA 2025</p>
              <p>Mindoro State University – Calapan City Campus</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
