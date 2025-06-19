"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Heart, Code2, BookOpen, Target } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AboutMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const achievements = [
    { icon: GraduationCap, label: "CGPA", value: "9.15/10" },
    { icon: Code2, label: "Projects", value: "50+" },
    { icon: Award, label: "Year", value: "Sophomore" },
  ]

  return (
    <section className="relative py-20 px-8 md:px-16 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="relative"
        >
          {/* Main Card Container */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/10 overflow-hidden"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50 animate-pulse" />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Photo Section */}
              <motion.div  className="flex justify-center lg:justify-start">
                <div className="relative group">
                  {/* Photo container with animated border */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/20"
                  >
                    {/* Placeholder for your photo */}
                    <Image src="/images/myImage.jpg" alt="Your Name" layout="fill" objectFit="cover" />

                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* Floating elements around photo */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Right: Content Section */}
              <motion.div  className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <motion.h2
                    
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-[Batangas]"
                  >
                    About Me
                  </motion.h2>
                  <motion.div
                    
                    className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  />
                </div>

                {/* Main Description */}
                <motion.div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I'm a <span className="text-cyan-400 font-semibold">Sophomore</span> at{" "}
                    <span className="text-blue-400 font-semibold">IIIT Lucknow</span>, pursuing{" "}
                    <span className="text-purple-400 font-semibold">B.Tech in Computer Science and Business</span> with
                    a stellar <span className="text-cyan-400 font-bold">CGPA of 9.15</span>.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate student who thrives on turning innovative ideas into reality through code. My
                    journey in tech is driven by curiosity and a relentless pursuit of excellence. I love exploring the
                    intersection of technology and business, creating solutions that make a real impact.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me diving deep into DSA problems, experimenting with 3D designs, or
                    building the next big thing. I believe in continuous learning and pushing the boundaries of what's
                    possible.
                  </p>
                </motion.div>

                {/* Achievement Cards */}
                <motion.div  className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 text-center group hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <achievement.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-sm text-gray-400 mb-1">{achievement.label}</div>
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Passion Points */}
                <motion.div  className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    What Drives Me
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { icon: Code2, text: "Clean, efficient code" },
                      { icon: BookOpen, text: "Continuous learning" },
                      { icon: Target, text: "Problem solving" },
                      { icon: Award, text: "Academic excellence" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Let's Connect</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 border border-cyan-400/20 rounded-full animate-spin-slow" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
