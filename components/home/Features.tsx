'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  BarChart3, 
  Users, 
  LineChart,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Search
} from "lucide-react"
import ImageModal from '@/components/ui/image-modal'

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboard",
    description: "Track your impact metrics, active riders, and carbon credit generation in real-time through an intuitive dashboard.",
    images: [{ url: "/images/features/dashboard-overview.jpg", alt: "Dashboard Overview" }],
    stats: [
      { icon: Users, label: "Active Riders", value: "1,234" },
      { icon: LineChart, label: "CO₂ Reduced", value: "245t" },
      { icon: Wallet, label: "Credits Generated", value: "456" }
    ]
  },
  {
    icon: Users,
    title: "Smart Contract Management",
    description: "Manage your EV transition contracts and carbon credit purchases with secure, transparent smart contracts.",
    images: [
      { url: "/images/features/contract-transitions.jpg", alt: "EV Transition Contracts" },
      { url: "/images/features/contract-buycarbon.jpg", alt: "Carbon Credit Purchases" }
    ],
    projects: [
      { name: "Jakarta Fleet Transition", progress: 65 },
      { name: "Surabaya EV Program", progress: 40 },
      { name: "Bali Green Initiative", progress: 80 }
    ]
  },
  {
    icon: ShieldCheck,
    title: "Verified Impact Tracking",
    description: "Every credit is backed by real data from EVs on the road, with automated verification and reporting.",
    images: [
      { url: "/images/features/analytics.jpg", alt: "Impact Analytics" },
      { url: "/images/features/reports.jpg", alt: "Verification Reports" }
    ],
    metrics: [
      { label: "Verified Trips", value: "50K+" },
      { label: "Data Points/Day", value: "1M+" },
      { label: "Accuracy Rate", value: "99.9%" }
    ]
  }
]

export default function Features() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null)

  return (
    <section 
      id="features" 
      className="relative py-24 overflow-hidden"
    >
      {/* Enhanced creative background effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002838] via-[#002030] to-[#001825]" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#40E0D0]/10 via-[#40E0D0]/5 to-transparent blur-3xl 
          animate-pulse opacity-60" 
        />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#00FFCC]/10 via-[#00FFCC]/5 to-transparent blur-3xl 
          animate-pulse opacity-40 delay-700" 
        />

        {/* Animated patterns */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(64, 224, 208, 0.1) 100px, rgba(64, 224, 208, 0.1) 102px)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-[linear-gradient(45deg,#40E0D0,#00FFCC,#40E0D0)] bg-[length:200%_200%] 
              animate-gradient-x bg-clip-text text-transparent">
              Powerful Platform Features
            </span>
          </h2>
          <p className="text-[#F0F0F0] text-lg max-w-2xl mx-auto">
            Advanced tools and features to manage your carbon credit investments 
            and track your environmental impact
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#40E0D0]/10 flex items-center justify-center
                    border border-[#40E0D0]/20">
                    <feature.icon className="w-6 h-6 text-[#40E0D0]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>

                <p className="text-[#F0F0F0] text-lg">{feature.description}</p>

                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#40E0D0]/5 border border-[#40E0D0]/20
                        hover:border-[#40E0D0]/40 transition-all duration-300 group">
                        <stat.icon className="w-5 h-5 text-[#40E0D0] mb-2" />
                        <p className="text-2xl font-bold text-[#40E0D0]">{stat.value}</p>
                        <p className="text-sm text-[#F0F0F0]/80">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {feature.projects && (
                  <div className="space-y-4">
                    {feature.projects.map((project, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#40E0D0]/5 border border-[#40E0D0]/20
                        hover:border-[#40E0D0]/40 transition-all duration-300">
                        <div className="flex justify-between mb-2">
                          <span className="text-white">{project.name}</span>
                          <span className="text-[#40E0D0]">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-[#40E0D0]/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {feature.metrics && (
                  <div className="grid grid-cols-3 gap-4">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#40E0D0]/5 border border-[#40E0D0]/20
                        hover:border-[#40E0D0]/40 transition-all duration-300">
                        <p className="text-xl font-bold text-[#40E0D0]">{metric.value}</p>
                        <p className="text-sm text-[#F0F0F0]/80">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Images Side */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {feature.images.map((image, imgIndex) => (
                    <motion.div 
                      key={imgIndex}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: imgIndex * 0.2 }}
                      className={`${feature.images.length === 1 ? 'md:col-span-2' : ''} group`}
                    >
                      <div 
                        className="relative rounded-xl overflow-hidden border border-[#40E0D0]/20
                          hover:border-[#40E0D0]/40 transition-all duration-300 
                          hover:shadow-lg hover:shadow-[#40E0D0]/10
                          backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedImage({ url: image.url, alt: image.alt })}
                      >
                        <div className="relative pt-[56.25%]">
                          <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#001219]/50 to-transparent" />
                          
                          {/* Caption */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#001219] to-transparent">
                            <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {image.alt}
                            </p>
                          </div>
                          
                          {/* Zoom Icon */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300">
                            <div className="p-3 rounded-full bg-[#001219]/80 border border-[#40E0D0]/20">
                              <Search className="w-6 h-6 text-[#40E0D0]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        alt={selectedImage?.alt || ''}
      />
    </section>
  )
}
