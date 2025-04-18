"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LucideCalendar,
  LucideClock,
  LucideChevronDown,
  LucideDownload,
  LucideUsers,
  LucideMapPin,
  MicIcon as LucideMicrophone,
  LucideAward,
  LucideCamera,
  LucideCrown,
  LucideMusic,
  LucideVideo,
  LucideX,
  LucideSearch,
  LucideFilter,
  LucideCalendarDays,
} from "lucide-react"

export default function ProgramFlowPage() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<"morning" | "afternoon">("morning")
  const morningRef = useRef<HTMLDivElement>(null)
  const afternoonRef = useRef<HTMLDivElement>(null)

  // Scroll to section
  const scrollToSection = (section: "morning" | "afternoon") => {
    setActiveSection(section)
    if (section === "morning" && morningRef.current) {
      morningRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (section === "afternoon" && afternoonRef.current) {
      afternoonRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Event types with their colors and icons
  const eventTypes = {
    ceremony: {
      label: "Ceremony",
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
      textColor: "text-purple-800",
      icon: <LucideMicrophone className="h-5 w-5" />,
    },
    competition: {
      label: "Competition",
      color: "bg-green-500",
      lightColor: "bg-green-100",
      textColor: "text-green-800",
      icon: <LucideAward className="h-5 w-5" />,
    },
    exhibition: {
      label: "Exhibition",
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-800",
      icon: <LucideCamera className="h-5 w-5" />,
    },
    performance: {
      label: "Performance",
      color: "bg-orange-500",
      lightColor: "bg-orange-100",
      textColor: "text-orange-800",
      icon: <LucideMusic className="h-5 w-5" />,
    },
    royalty: {
      label: "Royalty",
      color: "bg-pink-500",
      lightColor: "bg-pink-100",
      textColor: "text-pink-800",
      icon: <LucideCrown className="h-5 w-5" />,
    },
    video: {
      label: "Video",
      color: "bg-red-500",
      lightColor: "bg-red-100",
      textColor: "text-red-800",
      icon: <LucideVideo className="h-5 w-5" />,
    },
    setup: {
      label: "Setup",
      color: "bg-gray-500",
      lightColor: "bg-gray-100",
      textColor: "text-gray-800",
      icon: <LucideUsers className="h-5 w-5" />,
    },
    other: {
      label: "Other",
      color: "bg-teal-500",
      lightColor: "bg-teal-100",
      textColor: "text-teal-800",
      icon: <LucideCalendar className="h-5 w-5" />,
    },
  }

  // Morning events (Mini-Museum Exhibit)
  const morningEvents = [
    {
      id: "setup-1",
      time: "6:00-7:00 am",
      duration: "60 mins",
      title: "Preparation of Activity Center and Mini-Museum Preparation and Setup",
      type: "setup",
      location: "Activity Center",
      people: "Organizing Committee and Participants",
      details:
        "Setting up the venue, arranging displays, testing audio-visual equipment, and preparing registration materials.",
    },
    {
      id: "registration-1",
      time: "7:00-7:30 am",
      duration: "30 mins",
      title: "Registration & Mini-Museum Exhibit Opening",
      type: "ceremony",
      location: "Main Entrance",
      people: "Registration Committee and Students",
      details:
        "Participants check in, receive event materials, and name badges. Mini-Museum exhibits are unveiled for viewing.",
    },
    {
      id: "opening-1",
      time: "7:30-7:40 am",
      duration: "10 mins",
      title: "Prayer and Singing of National Anthem, MinSU Hymn and Oriental Mindoro Hymn",
      type: "ceremony",
      location: "Main Stage",
      people: "Technical Committee and Students",
      details: "Opening prayer followed by the singing of the National Anthem, MinSU Hymn, and Oriental Mindoro Hymn.",
    },
    {
      id: "remarks-1",
      time: "7:40-7:45 am",
      duration: "5 mins",
      title: "Opening Remarks",
      type: "ceremony",
      location: "Main Stage",
      people: "Mrs. Maria Clarissa Magdael",
      details: "Official welcome address highlighting the significance of KULTOURA 2025 and its cultural importance.",
    },
    {
      id: "welcome-1",
      time: "7:45-7:50 am",
      duration: "5 mins",
      title: "Welcoming Remarks",
      type: "ceremony",
      location: "Main Stage",
      people: "",
      details: "Address from the university leadership emphasizing the educational and cultural value of the event.",
    },
    {
      id: "intro-judges-1",
      time: "7:50-8:00 am",
      duration: "10 mins",
      title: "Introduction of Judges and Criteria & Guidelines of Mini-Museum",
      type: "other",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details:
        "Introduction of the judging panel and explanation of the criteria and guidelines for the Mini-Museum competition.",
    },
    {
      id: "museum-judging-1",
      time: "8:00-8:30 am",
      duration: "30 mins",
      title: "Viewing and Judging of Mini-Museum",
      type: "exhibition",
      location: "Exhibition Hall",
      people: "Participants and Judges",
      details: "Judges evaluate the Mini-Museum exhibits while participants present their cultural displays.",
    },
    {
      id: "guidelines-1",
      time: "8:30-8:35 am",
      duration: "5 mins",
      title: "Discussions Guidelines and Criteria in Promotional Video Competition and Festival Dance Competition",
      type: "other",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details:
        "Explanation of the rules, criteria, and procedures for the Promotional Video and Festival Dance competitions.",
    },
    {
      id: "video-1",
      time: "8:35-8:40 am",
      duration: "5 mins",
      title: "Promotional Video Entry #1",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the first promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-1",
      time: "8:40-8:47 am",
      duration: "7 mins",
      title: "Festival Dance Entry #1",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the first dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-2",
      time: "8:47-8:52 am",
      duration: "5 mins",
      title: "Promotional Video Entry #2",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the second promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-2",
      time: "8:52-8:59 am",
      duration: "7 mins",
      title: "Festival Dance Entry #2",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the second dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-3",
      time: "8:59-9:04 am",
      duration: "5 mins",
      title: "Promotional Video Entry #3",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the third promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-3",
      time: "9:04-9:11 am",
      duration: "7 mins",
      title: "Festival Dance Entry #3",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the third dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-4",
      time: "9:11-9:16 am",
      duration: "5 mins",
      title: "Promotional Video Entry #4",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the fourth promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-4",
      time: "9:16-9:23 am",
      duration: "7 mins",
      title: "Festival Dance Entry #4",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the fourth dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-5",
      time: "9:23-9:28 am",
      duration: "5 mins",
      title: "Promotional Video Entry #5",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the fifth promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-5",
      time: "9:28-9:35 am",
      duration: "7 mins",
      title: "Festival Dance Entry #5",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the fifth dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-6",
      time: "9:35-9:40 am",
      duration: "5 mins",
      title: "Promotional Video Entry #6",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the sixth promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-6",
      time: "9:40-9:47 am",
      duration: "7 mins",
      title: "Festival Dance Entry #6",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the sixth dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-7",
      time: "9:47-9:52 am",
      duration: "5 mins",
      title: "Promotional Video Entry #7",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the seventh promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "dance-7",
      time: "9:52-9:59 am",
      duration: "7 mins",
      title: "Festival Dance Entry #7",
      type: "performance",
      location: "Main Stage",
      people: "Festival Dance Participants and Master of the Ceremony",
      details: "Performance by the seventh dance group presenting traditional dance forms of Oriental Mindoro.",
    },
    {
      id: "video-8",
      time: "9:59-10:04 am",
      duration: "5 mins",
      title: "Promotional Video Entry #8",
      type: "video",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Screening of the eighth promotional video entry showcasing Oriental Mindoro's cultural heritage.",
    },
    {
      id: "judges-cert",
      time: "10:04-10:13 am",
      duration: "9 mins",
      title: "Awarding for Certificate of Judges",
      type: "ceremony",
      location: "Main Stage",
      people: "Judges, Master of the Ceremony",
      details: "Recognition and presentation of certificates to the judges for their contribution to the event.",
    },
    {
      id: "photo-op-1",
      time: "10:13-10:23 am",
      duration: "10 mins",
      title: "Photo Opportunity",
      type: "other",
      location: "Main Stage",
      people: "All",
      details: "Group photos with participants, judges, and organizers to document the morning events.",
    },
    {
      id: "lunch",
      time: "10:23-11:23 am",
      duration: "60 mins",
      title: "Lunch Break",
      type: "other",
      location: "Dining Area",
      people: "All",
      details: "Lunch break featuring local cuisine and cultural food demonstrations.",
    },
  ]

  // Afternoon events (Cultural Royalty and Speech Choir)
  const afternoonEvents = [
    {
      id: "setup-2",
      time: "10:53-11:23 am",
      duration: "30 mins",
      title: "Setting Up of Activity Center",
      type: "setup",
      location: "Activity Center",
      people: "Organizing Committees",
      details:
        "Preparing the venue for the Cultural Royalty competition, including stage setup, lighting, and sound checks.",
    },
    {
      id: "opening-2",
      time: "11:23-11:28 am",
      duration: "5 mins",
      title: "Opening Spiel",
      type: "ceremony",
      location: "Main Stage",
      people: "Master of the Ceremony",
      details: "Introduction to the Cultural Royalty competition and overview of the afternoon events.",
    },
    {
      id: "intro-judges-2",
      time: "11:28-11:43 am",
      duration: "15 mins",
      title: "Introduction of Judges and Criteria & Guidelines of Speech Choir and Mr. And Ms. Cultural Royalty",
      type: "other",
      location: "Main Stage",
      people: "Mr. and Ms. Cultural Royalty candidates and Master of the Ceremony",
      details:
        "Introduction of the judging panel and explanation of the criteria for the Cultural Royalty and Speech Choir competitions.",
    },
    {
      id: "speech-choir-1",
      time: "11:43 am-12:04 pm",
      duration: "21 mins",
      title: "Speech Choir Entries #1-3",
      type: "performance",
      location: "Main Stage",
      people: "Speech Choir Participants and Master of the Ceremony",
      details: "Performances by the first three speech choir groups presenting cultural narratives and folklore.",
    },
    {
      id: "cultural-fashion-1",
      time: "12:04-12:39 pm",
      duration: "35 mins",
      title: "Cultural Fashion Walk (Ethnic Attire, Outfit #1)",
      type: "royalty",
      location: "Main Stage",
      people: "Mr. and Ms. Cultural Royalty candidates and Master of the Ceremony",
      details:
        "Candidates showcase traditional ethnic attire representing different cultural groups of Oriental Mindoro.",
    },
    {
      id: "speech-choir-2",
      time: "12:39-1:00 pm",
      duration: "21 mins",
      title: "Speech Choir Entries #4-6",
      type: "performance",
      location: "Main Stage",
      people: "Speech Choir Participants and Master of the Ceremony",
      details: "Performances by the next three speech choir groups presenting cultural narratives and folklore.",
    },
    {
      id: "cultural-fashion-2",
      time: "1:00-1:35 pm",
      duration: "35 mins",
      title: "Cultural Fashion Walk (Traditional Attire, Outfit #2)",
      type: "royalty",
      location: "Main Stage",
      people: "Mr. and Ms. Cultural Royalty candidates and Master of the Ceremony",
      details: "Candidates showcase traditional formal attire representing the heritage of Oriental Mindoro.",
    },
    {
      id: "speech-choir-3",
      time: "1:35-1:49 pm",
      duration: "14 mins",
      title: "Speech Choir Entries #7-8",
      type: "performance",
      location: "Main Stage",
      people: "Speech Choir Participants and Master of the Ceremony",
      details: "Performances by the final two speech choir groups presenting cultural narratives and folklore.",
    },
    {
      id: "cultural-fashion-3",
      time: "1:49-2:24 pm",
      duration: "35 mins",
      title: "Cultural Fashion Walk (Modern Attire, Outfit #3)",
      type: "royalty",
      location: "Main Stage",
      people: "Mr. and Ms. Cultural Royalty candidates and Master of the Ceremony",
      details:
        "Candidates showcase modern interpretations of cultural attire, blending tradition with contemporary design.",
    },
    {
      id: "qa-round",
      time: "2:24-2:59 pm",
      duration: "35 mins",
      title: "Question and Answer Round",
      type: "royalty",
      location: "Main Stage",
      people: "Mr. and Ms. Cultural Royalty candidates, Master of the Ceremony and Judges",
      details: "Candidates respond to questions about cultural heritage, preservation, and advocacy.",
    },
    {
      id: "awarding-museum",
      time: "2:59-3:04 pm",
      duration: "5 mins",
      title: "Awarding for Mini-Museum Exhibit",
      type: "ceremony",
      location: "Main Stage",
      people: "Master of the Ceremony, Judges and Participants Representative",
      details: "Presentation of awards and recognition for the Mini-Museum competition winners.",
    },
    {
      id: "awarding-video",
      time: "3:04-3:09 pm",
      duration: "5 mins",
      title: "Awarding for Promotional Video Competition",
      type: "ceremony",
      location: "Main Stage",
      people: "Master of the Ceremony, Judges and Participants Representative",
      details: "Presentation of awards and recognition for the Promotional Video competition winners.",
    },
    {
      id: "awarding-dance",
      time: "3:09-3:14 pm",
      duration: "5 mins",
      title: "Awarding for Festival Dance Competition",
      type: "ceremony",
      location: "Main Stage",
      people: "Master of the Ceremony, Judges and Festival Dance Participants",
      details: "Presentation of awards and recognition for the Festival Dance competition winners.",
    },
    {
      id: "awarding-choir",
      time: "3:14-3:19 pm",
      duration: "5 mins",
      title: "Awarding for Speech Choir Competition",
      type: "ceremony",
      location: "Main Stage",
      people: "Master of the Ceremony, Judges and Speech Choir Participants",
      details: "Presentation of awards and recognition for the Speech Choir competition winners.",
    },
    {
      id: "awarding-royalty",
      time: "3:19-3:24 pm",
      duration: "5 mins",
      title: "Awarding for Mr. and Ms. Cultural Royalty",
      type: "ceremony",
      location: "Main Stage",
      people: "Mr. and Ms. Cultural Royalty candidates, Master of the Ceremony and Judges",
      details: "Crowning of Mr. and Ms. Cultural Royalty 2025 and recognition of runners-up and special awards.",
    },
    {
      id: "awarding-judges",
      time: "3:24-3:29 pm",
      duration: "5 mins",
      title: "Awarding for Certificate of Judges",
      type: "ceremony",
      location: "Main Stage",
      people: "Judges, Master of the Ceremony",
      details: "Recognition and presentation of certificates to the judges for their contribution to the event.",
    },
    {
      id: "closing",
      time: "3:29-3:39 pm",
      duration: "10 mins",
      title: "Closing Remarks",
      type: "ceremony",
      location: "Main Stage",
      people: "Ma'am Maria Clarissa Magdael",
      details:
        "Closing address summarizing the day's events, acknowledging participants, and highlighting the cultural significance.",
    },
    {
      id: "photo-op-2",
      time: "3:39-3:45 pm",
      duration: "6 mins",
      title: "Photo Opportunity",
      type: "other",
      location: "Main Stage",
      people: "All",
      details: "Final group photos with all participants, winners, judges, and organizers.",
    },
    {
      id: "cleanup",
      time: "3:45-4:05 pm",
      duration: "20 mins",
      title: "Cleaning of Activity Center",
      type: "setup",
      location: "Activity Center",
      people: "Committees",
      details: "Dismantling of exhibits, cleaning of the venue, and restoration of the activity center.",
    },
  ]

  // Filter events based on search and type filter
  const filteredMorningEvents = morningEvents.filter((event) => {
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.people.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = filterType === null || event.type === filterType

    return matchesSearch && matchesType
  })

  const filteredAfternoonEvents = afternoonEvents.filter((event) => {
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.people.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = filterType === null || event.type === filterType

    return matchesSearch && matchesType
  })

  // Toggle event expansion
  const toggleEvent = (id: string) => {
    if (expandedEvent === id) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(id)
    }
  }

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
                <LucideCalendar className="h-8 w-8 mr-3 text-green-600" />
                KULTOURA 2025 Program Flow
              </h1>
              <p className="text-green-600 text-lg">Detailed schedule of all events and activities</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border border-green-100">
                <div className="px-3 py-1.5 bg-green-600 text-white rounded-md font-medium">May 9, 2025</div>
                <div className="px-3 py-1.5 text-green-800">
                  <span className="font-medium">One-Day Cultural Festival</span>
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
                <div className="text-sm text-green-600">Participants</div>
                <div className="text-xl font-bold text-gray-800">350+</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <LucideAward className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-orange-600">Competitions</div>
                <div className="text-xl font-bold text-gray-800">5</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <LucideMapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-600">Venue</div>
                <div className="text-xl font-bold text-gray-800">Activity Center</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <LucideClock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-purple-600">Duration</div>
                <div className="text-xl font-bold text-gray-800">12 Hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Program Navigation */}
      <section className="sticky top-4 z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => scrollToSection("morning")}
                className={`px-4 py-3 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                  activeSection === "morning" ? "bg-green-600 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <LucideCalendarDays className="h-5 w-5 mr-2" />
                  <span className="font-medium">Morning Session</span>
                </div>
                <div className={`text-xs mt-1 ${activeSection === "morning" ? "text-green-100" : "text-gray-500"}`}>
                  Mini-Museum Exhibit (6:00 AM - 12:00 PM)
                </div>
              </button>

              <button
                onClick={() => scrollToSection("afternoon")}
                className={`px-4 py-3 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                  activeSection === "afternoon"
                    ? "bg-green-600 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <LucideCalendarDays className="h-5 w-5 mr-2" />
                  <span className="font-medium">Afternoon Session</span>
                </div>
                <div className={`text-xs mt-1 ${activeSection === "afternoon" ? "text-green-100" : "text-gray-500"}`}>
                  Cultural Royalty & Speech Choir (12:30 PM - 6:00 PM)
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">May 9, 2025 Program Schedule</h2>
            <div className="text-green-100 mt-1">Mindoro State University – Calapan City Campus</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(eventTypes).map(([key, type]) => (
              <button
                key={key}
                onClick={() => setFilterType(filterType === key ? null : key)}
                className={`px-3 py-1.5 rounded-full text-sm flex items-center transition-all duration-300 ${
                  filterType === key
                    ? `${type.color} text-white`
                    : `${type.lightColor} ${type.textColor} hover:bg-opacity-80`
                }`}
              >
                <span className="mr-1.5">{type.icon}</span>
                <span>{type.label}</span>
                {filterType === key && (
                  <span className="ml-1.5 bg-white bg-opacity-20 rounded-full p-0.5">
                    <LucideX className="h-3 w-3" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 flex items-center gap-2 bg-white bg-opacity-20 rounded-lg p-2">
          <div className="relative flex-1">
            <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
            <input
              type="text"
              placeholder="Search events, people, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md py-2 pl-10 pr-4 text-black placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-white focus:bg-opacity-30"
            />
          </div>

          <button
            onClick={() => {
              setSearchQuery("")
              setFilterType(null)
            }}
            className="px-3 py-2 bg-white text-green-700 rounded-md text-sm hover:bg-opacity-90 transition-all duration-300 flex items-center font-medium"
          >
            <LucideFilter className="h-4 w-4 mr-1.5" />
            Clear Filters
          </button>
        </div>
      </motion.div>

      {/* Morning Session */}
      <section ref={morningRef} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <LucideCalendarDays className="h-6 w-6 mr-2 text-green-600" />
            Morning Session: Mini-Museum Exhibit
          </h2>
          <p className="text-gray-600">
            The morning session features the Mini-Museum Exhibit, Promotional Video Competition, and Festival Dance
            Competition.
          </p>
        </motion.div>

        {filteredMorningEvents.length > 0 ? (
          <div className="space-y-4">
            {filteredMorningEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg ${
                  expandedEvent === event.id ? "ring-2 ring-green-500" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row cursor-pointer" onClick={() => toggleEvent(event.id)}>
                  {/* Time column */}
                  <div className="md:w-48 lg:w-56 bg-gray-50 p-4 flex flex-col justify-center">
                    <div className="text-gray-500 text-sm">{event.time}</div>
                    <div className="text-gray-700 font-medium">{event.duration}</div>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 p-4 md:p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>

                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <div
                            className={`px-2.5 py-1 rounded-full text-xs flex items-center ${eventTypes[event.type as keyof typeof eventTypes].lightColor} ${eventTypes[event.type as keyof typeof eventTypes].textColor}`}
                          >
                            {eventTypes[event.type as keyof typeof eventTypes].icon}
                            <span className="ml-1.5">{eventTypes[event.type as keyof typeof eventTypes].label}</span>
                          </div>

                          <div className="flex items-center text-gray-600 text-sm">
                            <LucideMapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            {event.location}
                          </div>

                          <div className="flex items-center text-gray-600 text-sm">
                            <LucideUsers className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            {event.people}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`transition-transform duration-300 ${
                          expandedEvent === event.id ? "rotate-180" : ""
                        }`}
                      >
                        <LucideChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 md:ml-56 border-t border-gray-100">
                        <div className="text-gray-700">
                          <h4 className="font-medium text-gray-800 mb-2">Event Details</h4>
                          <p>{event.details}</p>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Location</div>
                              <div className="flex items-center">
                                <LucideMapPin className="h-4 w-4 mr-2 text-green-600" />
                                <span className="font-medium">{event.location}</span>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Participants</div>
                              <div className="flex items-center">
                                <LucideUsers className="h-4 w-4 mr-2 text-green-600" />
                                <span className="font-medium">{event.people}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LucideCalendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Events Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              No events match your current search or filter criteria. Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setFilterType(null)
              }}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <LucideFilter className="mr-2 h-4 w-4" />
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Afternoon Session */}
      <section ref={afternoonRef} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <LucideCalendarDays className="h-6 w-6 mr-2 text-green-600" />
            Afternoon Session: Cultural Royalty & Speech Choir
          </h2>
          <p className="text-gray-600">
            The afternoon session features the Mr. and Ms. Cultural Royalty competition, Speech Choir performances, and
            Awarding Ceremonies.
          </p>
        </motion.div>

        {filteredAfternoonEvents.length > 0 ? (
          <div className="space-y-4">
            {filteredAfternoonEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg ${
                  expandedEvent === event.id ? "ring-2 ring-green-500" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row cursor-pointer" onClick={() => toggleEvent(event.id)}>
                  {/* Time column */}
                  <div className="md:w-48 lg:w-56 bg-gray-50 p-4 flex flex-col justify-center">
                    <div className="text-gray-500 text-sm">{event.time}</div>
                    <div className="text-gray-700 font-medium">{event.duration}</div>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 p-4 md:p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>

                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <div
                            className={`px-2.5 py-1 rounded-full text-xs flex items-center ${eventTypes[event.type as keyof typeof eventTypes].lightColor} ${eventTypes[event.type as keyof typeof eventTypes].textColor}`}
                          >
                            {eventTypes[event.type as keyof typeof eventTypes].icon}
                            <span className="ml-1.5">{eventTypes[event.type as keyof typeof eventTypes].label}</span>
                          </div>

                          <div className="flex items-center text-gray-600 text-sm">
                            <LucideMapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            {event.location}
                          </div>

                          <div className="flex items-center text-gray-600 text-sm">
                            <LucideUsers className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            {event.people}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`transition-transform duration-300 ${
                          expandedEvent === event.id ? "rotate-180" : ""
                        }`}
                      >
                        <LucideChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 md:ml-56 border-t border-gray-100">
                        <div className="text-gray-700">
                          <h4 className="font-medium text-gray-800 mb-2">Event Details</h4>
                          <p>{event.details}</p>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Location</div>
                              <div className="flex items-center">
                                <LucideMapPin className="h-4 w-4 mr-2 text-green-600" />
                                <span className="font-medium">{event.location}</span>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Participants</div>
                              <div className="flex items-center">
                                <LucideUsers className="h-4 w-4 mr-2 text-green-600" />
                                <span className="font-medium">{event.people}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LucideCalendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Events Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              No events match your current search or filter criteria. Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setFilterType(null)
              }}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <LucideFilter className="mr-2 h-4 w-4" />
              Clear Filters
            </button>
          </div>
        )}
      </section>

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

          <h3 className="text-xl font-bold text-green-800 mb-4">Need a copy of the program flow?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download the complete program flow for KULTOURA 2025 to keep track of all events and activities. This PDF
            includes detailed schedules, venue information, and participant details.
          </p>

          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group">
            <LucideDownload className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
            Download Program Flow (PDF)
          </button>

          <div className="mt-4 text-sm text-green-700">Last updated: April 15, 2025</div>
        </div>
      </motion.div>
    </div>
  )
}

