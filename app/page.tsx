"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  LucideCalendar,
  LucideMap,
  LucideUsers,
  LucideArrowRight,
  LucidePieChart,
  LucideVideo,
  LucideCrown,
  LucideMic2,
  LucideBookOpen,
  LucideHeart,
  LucideMessageSquare,
  LucideArrowDown,
  LucideCheck,
  LucideAward,
  LucideCamera,
  LucidePalette,
  LucideMusic,
  LucideGlobe,
} from "lucide-react"

export default function HomePage() {
  const [activeEvent, setActiveEvent] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Event data
  const events = [
    {
      id: "video",
      title: "Promotional Video Competition",
      date: "April 15, 2025",
      icon: <LucideVideo className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      description:
        "Showcase Oriental Mindoro's cultural heritage through creative video storytelling that captures the essence of local traditions and practices.",
      participants: "10 Teams",
      location: "Main Auditorium",
      highlights: ["Creative storytelling", "Cultural representation", "Technical excellence", "Audience impact"],
    },
    {
      id: "royalty",
      title: "Cultural Royalty",
      date: "April 20, 2025",
      icon: <LucideCrown className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500",
      description:
        "Mr. and Ms. Cultural Royalty 2025 will represent the values and traditions of Oriental Mindoro through a showcase of cultural knowledge and talent.",
      participants: "16 Contestants",
      location: "Grand Theater",
      highlights: [
        "Cultural attire showcase",
        "Traditional talent presentation",
        "Q&A on cultural heritage",
        "Advocacy presentation",
      ],
    },
    {
      id: "dance",
      title: "Festival Dance Competition",
      date: "April 22, 2025",
      icon: <LucideUsers className="h-6 w-6" />,
      color: "from-green-500 to-teal-500",
      description:
        "Experience traditional dances that tell the stories of Oriental Mindoro's indigenous cultures through movement, music, and cultural expression.",
      participants: "8 Dance Groups",
      location: "Open-Air Amphitheater",
      highlights: ["Authentic choreography", "Traditional music", "Cultural storytelling", "Costume design"],
    },
    {
      id: "museum",
      title: "Mini-museum Competition",
      date: "April 18-25, 2025",
      icon: <LucideMap className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      description:
        "Discover interactive exhibits highlighting the province's historical artifacts and cultural significance through creative museum installations.",
      participants: "6 Exhibits",
      location: "University Gallery",
      highlights: ["Historical accuracy", "Interactive elements", "Visual presentation", "Educational value"],
    },
    {
      id: "choir",
      title: "Speech Choir",
      date: "April 24, 2025",
      icon: <LucideMic2 className="h-6 w-6" />,
      color: "from-yellow-500 to-amber-500",
      description:
        "Listen to powerful narratives of Oriental Mindoro's legends and folklore through choral speaking that brings stories to life.",
      participants: "5 Choirs",
      location: "Cultural Center",
      highlights: ["Vocal harmony", "Storytelling", "Cultural representation", "Performance impact"],
    },
  ]

  // Timeline data
  const timelineEvents = [
    { date: "April 15", title: "Opening Ceremony & Video Competition", icon: <LucideVideo className="h-5 w-5" /> },
    { date: "April 18", title: "Mini-museum Exhibition Opens", icon: <LucideMap className="h-5 w-5" /> },
    { date: "April 20", title: "Cultural Royalty Competition", icon: <LucideCrown className="h-5 w-5" /> },
    { date: "April 22", title: "Festival Dance Competition", icon: <LucideUsers className="h-5 w-5" /> },
    { date: "April 24", title: "Speech Choir Competition", icon: <LucideMic2 className="h-5 w-5" /> },
    { date: "April 25", title: "Awarding & Closing Ceremony", icon: <LucideAward className="h-5 w-5" /> },
  ]

  // Cultural elements
  const culturalElements = [
    {
      icon: <LucideMusic className="h-6 w-6" />,
      title: "Traditional Music",
      description: "Ancestral rhythms and melodies",
    },
    {
      icon: <LucidePalette className="h-6 w-6" />,
      title: "Indigenous Arts",
      description: "Visual expressions of heritage",
    },
    {
      icon: <LucideCamera className="h-6 w-6" />,
      title: "Cultural Photography",
      description: "Capturing living traditions",
    },
    {
      icon: <LucideGlobe className="h-6 w-6" />,
      title: "Language Preservation",
      description: "Protecting linguistic diversity",
    },
  ]

  // Calculate parallax effect for hero section
  const heroParallax = scrollY * 0.5
  const titleParallax = scrollY * 0.2

  return (
    <div className="space-y-16 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-20 left-20 w-80 h-80 bg-green-500 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ transform: `translate(${heroParallax * 0.1}px, ${heroParallax * -0.05}px)` }}
          ></div>
          <div
            className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{
              animationDelay: "1.5s",
              transform: `translate(${heroParallax * -0.15}px, ${heroParallax * 0.05}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-green-50/30 to-transparent opacity-70"
            style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
          ></div>
        </div>

        {/* Decorative patterns */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.svg')] bg-repeat"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              May 9, 2025 • Mindoro State University
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ transform: `translateY(${titleParallax * -0.5}px)` }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-green-600 to-green-800">
              KULTOURA
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">2025</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-green-700 italic max-w-3xl mx-auto mb-8"
            style={{ transform: `translateY(${titleParallax * -0.3}px)` }}
          >
            "Tracing Roots, Bridging Generations: Weaving Oriental Mindoro's Living Heritage"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            A cultural festival celebrating and preserving the rich heritage of Oriental Mindoro through art,
            performance, and community engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/program-flow"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/30"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-700 to-green-800 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
              <span className="relative flex items-center">
                <LucideCalendar className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                View Program Schedule
              </span>
            </Link>

            <Link
              href="/budget"
              className="group relative px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/20"
            >
              <span className="absolute inset-0 w-full h-full bg-green-50 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
              <span className="relative flex items-center">
                <LucidePieChart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                Budget Portal
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Purpose & Mission with 3D-like cards */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
                Our Purpose
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
              </h2>
              <p className="text-gray-600 text-lg">
                KULTOURA 2025 aims to preserve, celebrate, and promote the cultural heritage of Oriental Mindoro by
                engaging students and the community in meaningful cultural experiences.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group perspective"
            >
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12 preserve-3d">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-lg h-full transform-gpu backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <LucideBookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Preserve</h3>
                  <p className="text-gray-600">
                    Document and safeguard the traditional practices, arts, and knowledge of Oriental Mindoro for future
                    generations.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Documenting oral histories</span>
                    </li>
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Archiving cultural artifacts</span>
                    </li>
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Recording traditional music</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group perspective"
            >
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12 preserve-3d">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 shadow-lg h-full transform-gpu backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <LucideHeart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Celebrate</h3>
                  <p className="text-gray-600">
                    Honor the diverse cultural expressions through performances, exhibitions, and competitions that
                    showcase local talent.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Cultural performances</span>
                    </li>
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Art exhibitions</span>
                    </li>
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Traditional craft showcases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group perspective"
            >
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12 preserve-3d">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg h-full transform-gpu backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <LucideUsers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Connect</h3>
                  <p className="text-gray-600">
                    Bridge generations by connecting youth with elders and traditional knowledge bearers to ensure
                    cultural continuity.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Intergenerational workshops</span>
                    </li>
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Community storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <LucideCheck className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Knowledge transfer programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Event Showcase */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50/30 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
              Featured Events
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience the rich cultural tapestry of Oriental Mindoro through our diverse range of events and
              competitions.
            </p>
          </motion.div>

          {/* Event Selector */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {events.map((event, index) => (
              <motion.button
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => setActiveEvent(index)}
                className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 ${
                  activeEvent === index
                    ? `bg-gradient-to-r ${event.color} text-white shadow-lg scale-105`
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className={`mr-2 ${activeEvent !== index && "text-gray-500"}`}>{event.icon}</span>
                <span className="font-medium">{event.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              key={events[activeEvent].id + "-details"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${events[activeEvent].color} p-6 text-white`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    {events[activeEvent].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{events[activeEvent].title}</h3>
                    <p className="text-white/80">{events[activeEvent].date}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{events[activeEvent].description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Participants</p>
                    <p className="font-medium text-gray-800">{events[activeEvent].participants}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-gray-800">{events[activeEvent].location}</p>
                  </div>
                </div>

                <h4 className="font-medium text-gray-800 mb-3">Event Highlights</h4>
                <ul className="space-y-2">
                  {events[activeEvent].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${events[activeEvent].color} flex items-center justify-center text-white mr-3 flex-shrink-0`}
                      >
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/program-flow"
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${events[activeEvent].color} text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg`}
                  >
                    View Schedule
                    <LucideArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={events[activeEvent].id + "-image"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${events[activeEvent].color} flex items-center justify-center text-white`}
                  >
                    {events[activeEvent].icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl font-bold">{events[activeEvent].title}</h3>
                  <p className="text-white/80">{events[activeEvent].date}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r ${events[activeEvent].color} opacity-20 blur-xl`}
              ></div>
              <div
                className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r ${events[activeEvent].color} opacity-10 blur-xl`}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 relative bg-gradient-to-b from-green-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
              Event Timeline
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Mark your calendar for these key dates during KULTOURA 2025.
            </p>
          </motion.div>

          {/* Timeline visualization */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-green-300 rounded-full"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${
                        index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"
                      }`}
                    >
                      <div className="font-bold text-green-800 mb-1">{event.date}</div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">{event.title}</h3>
                      <Link
                        href="/program-flow"
                        className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                      >
                        View details
                        <LucideArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                    {event.icon}
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Elements Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
              Cultural Elements
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore the diverse cultural elements that make Oriental Mindoro's heritage unique and vibrant.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-600 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {element.icon}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{element.title}</h3>
                    <p className="text-gray-600">{element.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Blog Posts */}
      <section className="py-20 relative bg-gradient-to-b from-white to-green-50/30">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-10 blur-xl animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
              Latest Updates
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Stay informed about the latest news and announcements for KULTOURA 2025.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-green-200 to-green-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-green-800 font-medium">Featured Image</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <LucideCalendar className="h-4 w-4 mr-1" />
                    <span>March 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                    Announcing KULTOURA 2025: A Celebration of Mindoro's Heritage
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mindoro State University is proud to announce KULTOURA 2025, a week-long cultural festival
                    celebrating the rich heritage of Oriental Mindoro.
                  </p>
                  <a
                    href="#"
                    className="text-green-600 font-medium hover:text-green-700 flex items-center group-hover:underline"
                  >
                    Read more{" "}
                    <LucideArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-orange-800 font-medium">Featured Image</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <LucideCalendar className="h-4 w-4 mr-1" />
                    <span>March 10, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                    Call for Participants: Cultural Royalty Competition
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Applications are now open for the Mr. and Ms. Cultural Royalty 2025 competition. Showcase your
                    knowledge of Mindoro's cultural heritage.
                  </p>
                  <a
                    href="#"
                    className="text-green-600 font-medium hover:text-green-700 flex items-center group-hover:underline"
                  >
                    Read more{" "}
                    <LucideArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-blue-800 font-medium">Featured Image</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <LucideCalendar className="h-4 w-4 mr-1" />
                    <span>March 5, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                    Workshop Series: Traditional Crafts of Oriental Mindoro
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the art of traditional weaving, pottery, and bamboo crafts from master artisans in our
                    upcoming workshop series.
                  </p>
                  <a
                    href="#"
                    className="text-green-600 font-medium hover:text-green-700 flex items-center group-hover:underline"
                  >
                    Read more{" "}
                    <LucideArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/30"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-700 to-green-800 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
              <span className="relative flex items-center">
                View All News & Updates
                <LucideArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Budget Transparency Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full opacity-5 -translate-y-1/3 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500 rounded-full opacity-5 translate-y-1/3 -translate-x-1/3"></div>

            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 md:mb-0 md:mr-8"
                >
                  <h2 className="text-3xl font-bold text-green-800 mb-4">Budget Transparency</h2>
                  <p className="text-gray-600 max-w-xl">
                    KULTOURA 2025 is committed to transparency in all aspects of the event, including financial
                    management. View our detailed budget breakdown to see how resources are being allocated.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 min-w-[150px] shadow-md">
                    <div className="text-2xl font-bold text-green-800">₱35,800</div>
                    <div className="text-sm text-green-600">Total Budget</div>
                  </div>

                  <Link
                    href="/budget"
                    className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/30"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-700 to-green-800 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                    <span className="relative flex items-center">
                      <LucidePieChart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                      View Budget Portal
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative bg-gradient-to-b from-green-50/30 to-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
              What People Say
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from participants, cultural practitioners, and community members about their KULTOURA experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full mr-4 flex-shrink-0 border-2 border-white shadow-md"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Maria Santos</h3>
                    <p className="text-green-600 text-sm">Cultural Practitioner</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "KULTOURA provides a vital platform for preserving and sharing our traditional practices with the
                  younger generation. It's a bridge between past and future."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LucideAward key={star} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full mr-4 flex-shrink-0 border-2 border-white shadow-md"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Juan Dela Cruz</h3>
                    <p className="text-green-600 text-sm">Student Participant</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Participating in KULTOURA opened my eyes to the rich cultural heritage of my province. I've gained a
                  deeper appreciation for our traditions."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LucideAward key={star} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full mr-4 flex-shrink-0 border-2 border-white shadow-md"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Dr. Elena Reyes</h3>
                    <p className="text-green-600 text-sm">University Professor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "KULTOURA exemplifies how academic institutions can contribute to cultural preservation while
                  providing students with meaningful learning experiences."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LucideAward key={star} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">KULTOURA 2025</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
              A celebration of Oriental Mindoro's rich cultural heritage, hosted by Mindoro State University – Calapan
              City Campus.
            </p>
            <p className="text-green-600 text-xl font-medium max-w-2xl mx-auto mb-8">April 15-25, 2025</p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/20 mx-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-green-50 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
              <span className="relative flex items-center">
                <LucideMessageSquare className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Contact Information
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

