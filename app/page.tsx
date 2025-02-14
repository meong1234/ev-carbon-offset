import Hero from "@/components/home/Hero"
import WhyItMatters from "@/components/home/WhyItMatters"
import HowItWorks from "@/components/home/HowItWorks"
import CallToAction from "@/components/home/CallToAction"
import Features from "@/components/home/Features"  // Add this import

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyItMatters />
      <HowItWorks />
      <Features /> 
      <CallToAction />
    </main>
  )
}

