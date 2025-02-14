'use client'

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

// Benefits data
const benefits = [
  "Direct impact on reducing urban emissions through EV transitions",
  "Transparent tracking of your carbon credit investments",
  "Support local gig economy workers while offsetting emissions",
  "Real-time monitoring of environmental impact"
]

export default function CallToAction() {
  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Enhanced layered backgrounds */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002838] via-[#001825] to-[#001219]" />
        
        {/* Center spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
          from-[#40E0D0]/10 via-transparent to-transparent opacity-60" />
        
        {/* Animated accent gradients */}
        <div className="absolute -left-1/4 top-0 w-[600px] h-[600px] 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#00E0C7]/20 via-[#00E0C7]/5 to-transparent blur-3xl 
          animate-pulse" 
        />
        <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#4FACFE]/20 via-[#4FACFE]/5 to-transparent blur-3xl 
          animate-pulse delay-1000" 
        />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(64,224,208,0.03)1px,transparent_1px)] 
          bg-[size:30px_30px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Main content wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Enhanced headline with gradient animation */}
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
            <span className="text-white">Offset Carbon Emissions with the Most</span>
            <br />
            <span className="bg-[linear-gradient(45deg,#00E0C7,#4FACFE,#00E0C7)] 
              bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent">
              Transparent, Impact-Driven
            </span>
            <br />
            <span className="text-white">Credits Available</span>
          </h2>

          {/* Subheadline */}
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#E0F7F4] opacity-90 max-w-2xl mx-auto">
            Join forward-thinking companies making a real difference in sustainable transportation
          </p>

          {/* Benefits List */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#00E0C7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#E0F7F4]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA buttons with better hover effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 w-full sm:w-auto min-w-[200px] rounded-xl 
                bg-gradient-to-r from-[#00E0C7] to-[#4FACFE] text-white font-semibold text-lg
                shadow-lg shadow-[#00E0C7]/20 hover:shadow-xl hover:shadow-[#00E0C7]/30
                transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Buy Carbon Credits Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 w-full sm:w-auto min-w-[200px] rounded-xl 
                bg-[#001219]/50 backdrop-blur-sm border-2 border-[#4FACFE] text-white font-semibold text-lg
                hover:bg-[#4FACFE]/10 hover:shadow-lg hover:shadow-[#4FACFE]/20 
                transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>

          {/* Enhanced trust indicators section */}
          <div className="mt-20 pt-16 border-t border-[#40E0D0]/10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#E0F7F4] text-lg font-medium mb-8"
            >
              Trusted by Leading Companies
            </motion.p>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* Logo wrapper with hover effects */}
              <div className="grid grid-cols-3 gap-12 opacity-60 hover:opacity-90 transition-all duration-500">
                <Image 
                  src="/images/logos/bojek.png" 
                  alt="Bojek" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                />
                <Image 
                  src="/images/logos/greb.png" 
                  alt="Greb" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                />
                <Image 
                  src="/images/logos/greenbird.png" 
                  alt="Green Bird" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
