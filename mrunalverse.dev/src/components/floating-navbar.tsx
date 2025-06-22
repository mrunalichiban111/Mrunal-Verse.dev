"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react"

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", icon: Home, href: "#home", section: "home" },
    { name: "About", icon: User, href: "#about", section: "about" },
    { name: "Projects", icon: Briefcase, href: "#projects", section: "projects" },
    { name: "Contact", icon: Mail, href: "#contact", section: "contact" },
  ]

  const handleNavigation = (href: string) => {
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      // Smooth scroll to the section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      
      // Update URL without page reload
      window.history.pushState(null, '', href)
      
      // Update active section
      setActiveSection(sectionId)
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-transparent"
      }`}
      style={{
        borderRadius: "2rem",
        padding: "0.75rem 1.5rem",
      }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className={`flex items-center space-x-2 transition-all duration-300 group ${
              activeSection === item.section 
                ? "text-cyan-400" 
                : "text-white/80 hover:text-cyan-400"
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation(item.href)
            }}
          >
            <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{item.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 py-3 transition-colors ${
                  activeSection === item.section 
                    ? "text-cyan-400" 
                    : "text-white/80 hover:text-cyan-400"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}