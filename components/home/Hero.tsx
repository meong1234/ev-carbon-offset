import type React from "react"
import { Button } from "@/components/ui/button"

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        pt-[72px] md:pt-[80px] pb-10 bg-[#000C14]" // Changed from #001219 to #000C14
    >
      {/* Enhanced background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000C14] via-[#001219] to-[#001825]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#40E0D0]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/5 via-transparent to-[#00FFCC]/5" />
      </div>

      {/* Enhanced particle effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 animate-float"
              style={{
                width: Math.random() * 3 + 1 + "px", // Smaller particles
                height: Math.random() * 3 + 1 + "px", // Smaller particles
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDuration: Math.random() * 3 + 2 + "s",
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 text-center relative z-10">
        <h1
          className="font-inter font-extrabold text-white mb-6 leading-tight animate-fade-in-up"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            textShadow:
              "0 0 20px rgba(64, 224, 208, 0.5), 0 0 40px rgba(64, 224, 208, 0.3), 0 0 60px rgba(64, 224, 208, 0.1)",
          }}
        >
          Driving Change with Every Ride
        </h1>
        <p
          className="font-inter font-semibold text-[#40E0D0] mb-8 leading-relaxed animate-fade-in-up animation-delay-300"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            textShadow: "0 0 10px rgba(64, 224, 208, 0.5)",
          }}
        >
          Your Carbon Credits Help Gig Riders Switch to EVs, Reducing Urban Air Pollution
        </p>
        <p
          className="font-openSans text-white mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            lineHeight: "1.8",
          }}
        >
          Join the movement to transform urban transportation. Every credit you purchase directly supports gig economy
          workers in their transition to electric vehicles, creating cleaner cities and a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up animation-delay-900">
          <Button
            size="lg"
            className="w-full sm:w-auto text-lg font-bold uppercase bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] text-[#001219] hover:from-[#40E0D0]/90 hover:to-[#00FFCC]/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#40E0D0]/20 rounded-full px-8 py-4"
          >
            Buy Carbon Credits
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-lg font-bold uppercase border-2 border-[#40E0D0] text-[#40E0D0] hover:bg-[#40E0D0]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#40E0D0]/20 rounded-full px-8 py-4"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

