'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef } from "react"

const statistics = [
  { value: "15%", label: "of Urban Transport Emissions" },
  { value: "13M+", label: "Motorcycles in Greater Jakarta" },
  { value: "~60%", label: "of Motorcycle Traffic Comes from Gig Workers" },
  { value: "200+ km/Day", label: "Distance Traveled by Full-Time Gig Riders" }
]

const barriers = [
  {
    title: "High Upfront Cost",
    stat: "30-50%",
    description: "More expensive than fuel-based motorcycles"
  },
  {
    title: "Limited Charging Stations",
    stat: "< 400",
    description: "Public charging points in Jakarta"
  },
  {
    title: "Battery Range Constraints",
    stat: "60-100",
    description: "km range per charge for affordable EVs"
  },
  {
    title: "Market Hesitation",
    stat: "80%",
    description: "Of motorcycles sold are still fuel-based"
  }
]

export default function WhyItMatters() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section 
      id="why-it-matters" 
      ref={containerRef}
      className="relative min-h-screen h-auto py-16 md:py-20 flex items-center bg-[#001219] overflow-hidden"
    >
      {/* Enhanced layered background */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001219] via-[#001825] to-[#001219]" />
        
        {/* Warning accent for problem space */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] 
          from-[#FF4C4C]/5 via-transparent to-transparent" />
        
        {/* Design accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] 
          from-[#40E0D0]/5 via-transparent to-transparent" />
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, #40E0D0 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main content container with increased z-index */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12 px-4 relative z-10">
        {/* Left Section - Main Content */}
        <motion.div 
          className="w-full lg:w-[60%] space-y-8 lg:space-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] text-transparent bg-clip-text">
                Motorcycles Drive
              </span>
              <br />
              <span className="text-white">Urban Emissions</span>
            </h2>
            <p className="text-[#F0F0F0] text-lg max-w-2xl">
              In Jakarta's bustling streets, motorcycles are the backbone of urban mobility,
              but they're also a significant source of emissions that need addressing.
            </p>
          </div>

          {/* Updated Statistics List with better contrast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Updated background glow with less opacity */}
                <div className="absolute inset-0 bg-[#40E0D0]/5 rounded-lg blur-xl group-hover:bg-[#40E0D0]/10 transition-all duration-300" />
                
                {/* Added relative and z-10 to content */}
                <div className="relative z-10 space-y-2 p-4 rounded-lg bg-[#001219]/40">
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] text-transparent bg-clip-text select-all">
                    {stat.value}
                  </p>
                  <p className="text-[#F0F0F0] text-sm font-medium select-all">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Challenges */}
        <motion.div 
          className="w-full lg:w-[40%] relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Updated header with better visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 lg:mb-6 space-y-2"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-[#FF4C4C] select-all">
              The Challenges
            </h3>
            <p className="text-[#F0F0F0] text-sm select-all">
              Key barriers slowing EV adoption among gig workers
            </p>
          </motion.div>

          {/* Updated barriers grid with enhanced styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {barriers.map((barrier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="relative p-4 lg:p-6 
                  bg-gradient-to-br from-[#FF4C4C]/10 via-[#FF4C4C]/5 to-transparent
                  border-[#FF4C4C]/20 hover:border-[#FF4C4C]/40 
                  transition-all duration-300 group overflow-hidden
                  hover:shadow-lg hover:shadow-[#FF4C4C]/5"
                >
                  {/* Enhanced warning glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF4C4C]/10 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content with improved contrast */}
                  <div className="relative z-10 space-y-2 lg:space-y-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF4C4C] to-[#FF8080]" />
                    <h4 className="text-sm lg:text-base text-white font-semibold 
                      group-hover:text-[#FF8080] transition-colors duration-300">
                      {barrier.title}
                    </h4>
                    <p className="text-xl lg:text-2xl font-bold text-[#FF4C4C]">
                      {barrier.stat}
                    </p>
                    <p className="text-xs lg:text-sm text-[#F0F0F0]/90 
                      group-hover:text-white transition-colors duration-300">
                      {barrier.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
