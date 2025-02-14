'use client'

import { motion } from "framer-motion"
import { ArrowDown, Wallet, Car, Search, LineChart, Users, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const fundingSteps = [
  {
    icon: Users,
    title: "Review Program",
    description: "Review transitions program, target drivers, and expected benefits",
    color: "#40E0D0"
  },
  {
    icon: Wallet,
    title: "Fund Transition",
    description: "Provide funding for EV transition through smart contracts",
    color: "#00FFCC"
  },
  {
    icon: Shield,
    title: "Monitor Progress",
    description: "Track transition progress and driver onboarding status",
    color: "#00FFFF"
  },
  {
    icon: Car,
    title: "EV Deployment",
    description: "Riders begin their journey with new electric vehicles",
    color: "#40E0D0"
  },
  {
    icon: LineChart,
    title: "Track Impact",
    description: "Monitor real-time environmental impact and ROI",
    color: "#00FFCC"
  }
]

const buyingSteps = [
  {
    icon: Search,
    title: "Select Drivers",
    description: "Filter and choose EV drivers based on your criteria",
    color: "#40E0D0"
  },
  {
    icon: Wallet,
    title: "Purchase Credits",
    description: "Buy carbon credits directly from verified EV drivers",
    color: "#00FFCC"
  },
  {
    icon: Shield,
    title: "Verify Impact",
    description: "Automatic verification of carbon reduction claims",
    color: "#00FFFF"
  },
  {
    icon: LineChart,
    title: "Monitor Results",
    description: "Track your contribution and environmental impact",
    color: "#40E0D0"
  }
]

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="relative py-24 bg-[#001825] overflow-hidden"
    >   
      {/* Enhanced creative backgrounds */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001825] via-[#002030] to-[#002838]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#40E0D0]/20 via-[#40E0D0]/5 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#00FFCC]/20 via-[#00FFCC]/5 to-transparent blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(64, 224, 208, 0.1) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header section with enhanced gradients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-br from-[#40E0D0] via-[#00FFCC] to-[#40E0D0] text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-3xl text-white font-bold mb-6">
            Two Ways to Make an Impact
          </p>
          <p className="text-lg text-[#F0F0F0]/90 max-w-2xl mx-auto">
            Choose how you want to contribute to the EV transition movement
          </p>
        </motion.div>

        {/* Cards Grid with fixed height and flexbox for button alignment */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fund EV Transition Path */}
          <motion.div className="h-full">
            <div className="h-full p-8 rounded-2xl relative overflow-hidden
              border border-[#40E0D0]/20 group-hover:border-[#40E0D0]/40 
              transition-all duration-300 backdrop-blur-sm
              flex flex-col" // Added flexbox
            >
              {/* Card background effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/[0.08] via-[#40E0D0]/[0.03] to-transparent" />
                <div className="absolute inset-0 bg-[#001825]/90 backdrop-blur-sm" />
              </div>

              {/* Content wrapper with flex-1 to push button to bottom */}
              <div className="relative z-10 flex-1">
                <div>
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#40E0D0]/10 border border-[#40E0D0]/20 
                      flex items-center justify-center mx-auto mb-6">
                      <Wallet className="w-8 h-8 text-[#40E0D0]" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Fund EV Transition</h3>
                    <p className="text-[#F0F0F0]/80 text-lg">
                      Support the transition of gig workers to electric vehicles through direct funding
                    </p>
                  </div>

                  <div className="space-y-6">
                    {fundingSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#001219] p-2.5
                          border border-[#40E0D0]/20 group-hover:border-[#40E0D0]/40 transition-all duration-300
                          shadow-sm shadow-[#40E0D0]/5 group-hover:shadow-[#40E0D0]/10">
                          <step.icon className="w-full h-full" style={{ color: step.color }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 group-hover:text-[#40E0D0] transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-[#F0F0F0]/70 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        {index < fundingSteps.length - 1 && (
                          <div className="absolute -bottom-4 left-6 transform -translate-x-1/2">
                            <ChevronDown className="w-4 h-4 text-[#40E0D0] animate-bounce" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button container */}
              <div className="relative z-10 mt-12 text-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] 
                    text-[#001219] font-bold text-lg hover:opacity-90
                    shadow-lg shadow-[#40E0D0]/20 hover:shadow-[#40E0D0]/30
                    transform hover:scale-[1.02] transition-all duration-300"
                >
                  Start Funding Program
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Buy Carbon Credits Path */}
          <motion.div className="h-full">
            <div className="h-full p-8 rounded-2xl relative overflow-hidden
              border border-[#40E0D0]/20 group-hover:border-[#40E0D0]/40 
              transition-all duration-300 backdrop-blur-sm
              flex flex-col" // Added flexbox
            >
              {/* Card background effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#40E0D0]/[0.08] via-[#40E0D0]/[0.03] to-transparent" />
                <div className="absolute inset-0 bg-[#001825]/90 backdrop-blur-sm" />
              </div>

              {/* Content wrapper with flex-1 to push button to bottom */}
              <div className="relative z-10 flex-1">
                <div>
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#40E0D0]/10 border border-[#40E0D0]/20 
                      flex items-center justify-center mx-auto mb-6">
                      <Search className="w-8 h-8 text-[#40E0D0]" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Buy Carbon Credits</h3>
                    <p className="text-[#F0F0F0]/80 text-lg">
                      Purchase carbon credits directly from verified EV drivers
                    </p>
                  </div>

                  <div className="space-y-6">
                    {buyingSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#001219] p-2.5
                          border border-[#40E0D0]/20 group-hover:border-[#40E0D0]/40 transition-all duration-300
                          shadow-sm shadow-[#40E0D0]/5 group-hover:shadow-[#40E0D0]/10">
                          <step.icon className="w-full h-full" style={{ color: step.color }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 group-hover:text-[#40E0D0] transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-[#F0F0F0]/70 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        {index < buyingSteps.length - 1 && (
                          <div className="absolute -bottom-4 left-6 transform -translate-x-1/2">
                            <ChevronDown className="w-4 h-4 text-[#40E0D0] animate-bounce" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button container */}
              <div className="relative z-10 mt-12 text-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 bg-transparent 
                    text-[#40E0D0] font-bold text-lg 
                    border-2 border-[#40E0D0] hover:bg-[#40E0D0]/10
                    shadow-lg shadow-[#40E0D0]/10 hover:shadow-[#40E0D0]/20
                    transform hover:scale-[1.02] transition-all duration-300"
                >
                  Browse Available Credits
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
