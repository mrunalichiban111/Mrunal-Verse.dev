"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart, ExternalLink } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/mrunalichiban111", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: Linkedin, href: " https://www.linkedin.com/in/mrunal-kulkarni-16b44b314/", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/Mrunal_111", color: "hover:text-cyan-400" },
    { name: "Email", icon: Mail, href: "mrunalkul185@gmail.com", color: "hover:text-pink-400" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const [positions, setPositions] = useState<
    { x: number; y: number; duration: number }[]
  >([])

  useEffect(() => {
    const newPositions = Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 200 + 100,
      duration: Math.random() * 10 + 5,
    }))
    setPositions(newPositions)
  }, [])

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-t from-black via-purple-950/20 to-black text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 px-8 md:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mrunal
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Full-stack developer passionate about creating innovative solutions and beautiful user experiences. Always
              learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`p-3 rounded-full bg-white/5 border border-white/10 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-300">Ready to work together? Let&apos;s create something amazing!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> by Mrunal
          </p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>

      {/* Floating Bubbles */}
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
          initial={{ x: pos.x, y: pos.y }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 200 + 100,
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </footer>
  )
}
