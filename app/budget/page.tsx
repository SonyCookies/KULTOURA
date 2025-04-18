"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LucidePieChart,
  LucideLayoutDashboard,
  LucideVideo,
  LucideCrown,
  LucideMusic,
  LucideLibrary,
  LucideMic2,
  LucideUsers,
  LucideDollarSign,
  LucideAward,
  LucideInfo,
  LucideDownload,
} from "lucide-react"
import EventBreakdown from "@/app/budget/components/event-breakdown"
import BudgetOverview from "@/app/budget/components/budget-overview"
import DetailedExpenses from "@/app/budget/components/detailed-expenses"

export default function BudgetPage() {
  const [activeTab, setActiveTab] = useState("summary")
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const overviewRef = useRef<HTMLDivElement>(null)

  // Scroll to overview when tab changes
  useEffect(() => {
    if (overviewRef.current && activeTab === "summary") {
      overviewRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [activeTab])

  // Budget data
  const totalBudget = 35800
  const studentPopulation = 358
  const individualContribution = 100

  // Tabs configuration
  const tabs = [
    { id: "summary", label: "Summary", icon: <LucideLayoutDashboard className="h-4 w-4 mr-2" /> },
    { id: "video", label: "Video Competition", icon: <LucideVideo className="h-4 w-4 mr-2" /> },
    { id: "royalty", label: "Cultural Royalty", icon: <LucideCrown className="h-4 w-4 mr-2" /> },
    { id: "dance", label: "Dance Competition", icon: <LucideMusic className="h-4 w-4 mr-2" /> },
    { id: "museum", label: "Mini-museum", icon: <LucideLibrary className="h-4 w-4 mr-2" /> },
    { id: "choir", label: "Speech Choir", icon: <LucideMic2 className="h-4 w-4 mr-2" /> },
  ]

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white rounded-3xl overflow-hidden shadow-lg border border-green-100 p-8 md:p-12">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500 rounded-full opacity-5 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2 flex items-center">
                <LucidePieChart className="h-8 w-8 mr-3 text-green-600" />
                KULTOURA 2025 Budget Portal
              </h1>
              <p className="text-green-600 text-lg">Detailed breakdown of proposed expenses for all cultural events</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border border-green-100">
                <div className="px-3 py-1.5 bg-green-600 text-white rounded-md font-medium">
                  ₱{totalBudget.toLocaleString()}
                </div>
                <div className="px-3 py-1.5 text-green-800">
                  <span className="font-medium">Total Budget</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <LucideUsers className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-green-600">Students</div>
                <div className="text-xl font-bold text-gray-800">{studentPopulation}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <LucideDollarSign className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-orange-600">Per Student</div>
                <div className="text-xl font-bold text-gray-800">₱{individualContribution}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <LucideAward className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-600">Events</div>
                <div className="text-xl font-bold text-gray-800">5</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <LucideInfo className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-purple-600">Status</div>
                <div className="text-xl font-bold text-gray-800">Proposed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto pb-2"
        >
          <div className="inline-flex items-center justify-center rounded-lg bg-white p-1 grid grid-cols-2 md:grid-cols-6 w-full min-w-max shadow-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                id={`${tab.id}-tab`}
                data-state={activeTab === tab.id ? "active" : "inactive"}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === tab.id ? "bg-green-600 text-white shadow-sm" : "text-green-700 hover:bg-green-50"
                } relative overflow-hidden`}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                {/* Animated highlight effect on hover */}
                {hoveredTab === tab.id && activeTab !== tab.id && (
                  <div className="absolute inset-0 bg-green-200 opacity-20 transform -translate-x-full animate-slide-right"></div>
                )}
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Budget Overview */}
      <div ref={overviewRef}>
        <AnimatePresence mode="wait">
          {activeTab === "summary" && (
            <motion.div
              key="summary-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Use the BudgetOverview component */}
              <BudgetOverview />

              {/* Detailed Expenses Component */}
              <DetailedExpenses className="mt-10" />

              {/* Event Breakdown Cards */}
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <EventBreakdown title="Venue Expenses" eventId="venue" />
                <EventBreakdown title="Judges' Expenses" eventId="judges" />
              </div>

              <EventBreakdown title="Emergency Fund" eventId="emergency" className="mt-8" />
            </motion.div>
          )}

          {activeTab !== "summary" && (
            <motion.div
              key={`${activeTab}-content`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EventBreakdown title={tabs.find((tab) => tab.id === activeTab)?.label || ""} eventId={activeTab} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-50 -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 rounded-full opacity-50 translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <LucideDownload className="h-8 w-8 text-green-600" />
          </div>

          <h3 className="text-xl font-bold text-green-800 mb-4">Need a detailed budget report?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download the complete budget breakdown for KULTOURA 2025 in Excel or PDF format. This report includes
            detailed expense categories, unit costs, and allocation across all events.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group">
              <LucideDownload className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download Excel Report
            </button>

            <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 group">
              <LucideDownload className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download PDF Report
            </button>
          </div>

          <div className="mt-4 text-sm text-green-700">Last updated: April 1, 2025</div>
        </div>
      </motion.div>
    </div>
  )
}

