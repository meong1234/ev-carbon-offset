"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "#hero", label: "Home" },
  { href: "#why-it-matters", label: "Why It Matters" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#cta", label: "Get Started" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navigationItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    
    setIsMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-[#001219]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="hidden md:block">
              <NavLinks isScrolled={isScrolled} onNavClick={handleNavClick} />
            </div>
            <div className="hidden md:block">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] text-[#001219] font-bold 
                  uppercase text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl 
                  hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Buy Credits
              </Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full
                  text-[#40E0D0] hover:text-white hover:bg-[#40E0D0]/10
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#40E0D0]
                  transition-all duration-300"
              >
                <span className="sr-only">Toggle menu</span>
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 top-16 bg-[#001219]/95 backdrop-blur-md transition-all duration-300 
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              <NavLinks isScrolled={true} mobile onNavClick={handleNavClick} />
              <div className="pt-6 border-t border-white/10">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] 
                    text-[#001219] font-bold uppercase text-sm px-6 py-4 rounded-full 
                    shadow-lg hover:shadow-xl hover:scale-[1.02] 
                    transition-all duration-300 ease-in-out"
                >
                  Buy Credits
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  )
}

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center">
    <div className="text-2xl font-bold font-montserrat">
      <span className="bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] text-transparent bg-clip-text font-black animate-glow">
        EV
      </span>
      <span className="text-white font-bold">Carbon</span>
      <span className="text-[#40E0D0] italic text-base font-medium animate-pulse">&</span>
      <span className="bg-gradient-to-r from-[#40E0D0] to-[#00FFCC] text-transparent bg-clip-text font-bold animate-underline">
        Offset
      </span>
    </div>
  </Link>
)

interface NavLinksProps {
  isScrolled: boolean
  mobile?: boolean
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const NavLinks: React.FC<NavLinksProps> = ({ isScrolled, mobile, onNavClick }) => {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = `px-4 py-3 rounded-lg text-base font-semibold uppercase tracking-wider 
    transition-all duration-300 text-white hover:text-[#40E0D0]
    hover:bg-[#40E0D0]/10 relative overflow-hidden group
    ${mobile ? 'block w-full text-center' : ''}`

  const activeLinkClass = `${linkClass} text-[#40E0D0] bg-[#40E0D0]/10`

  return (
    <div className={mobile ? 'space-y-2' : 'flex space-x-1'}>
      {navigationItems.map((item, index) => {
        const isActive = activeSection === item.href.substring(1)
        return (
          <Link
            key={index}
            href={item.href}
            onClick={onNavClick}
            className={isActive ? activeLinkClass : linkClass}
          >
            {item.label}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00E0C7] 
              to-[#00AFFF] transform transition-transform duration-300 
              ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar

