"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Heart, Code2, BookOpen, Target, Sparkles, Zap } from "lucide-react"
import Image from "next/image"

export function AboutMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  

  

  const achievements = [
    { icon: GraduationCap, label: "CGPA", value: "9.15/10" },
    { icon: Award, label: "Year", value: "Sophomore" },
  ]

  const passions = [
    { icon: Code2, text: "Clean, efficient code" },
    { icon: BookOpen, text: "Continuous learning" },
    { icon: Target, text: "Problem solving" },
    { icon: Sparkles, text: "Innovation & creativity" },
  ]

  return (
    <section className="relative py-24 px-6 md:px-16 bg-black overflow-hidden" id="about">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal stars */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-60 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1500" />

        {/* Very subtle background glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Section Header */}
          <motion.div  className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">About</span>
            </motion.div>
          </motion.div>

          {/* Main Card Container */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-16 shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl" />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Photo Section */}
              <motion.div  className="flex justify-center lg:justify-start">
                <div className="relative group">
                  {/* Photo container */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-80 h-150 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/50 bg-gray-800"
                  >
                    {/* Placeholder for your photo */}
                    <Image
                      src="/images/myImage2.jpg"
                      alt="Professional Portrait"
                      width={320}
                      height={800}
                      className="object-cover w-full h-full"
                    />

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Status badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-300">Available for opportunities</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Minimal floating elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-6 -right-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700"
                  >
                    <Zap className="w-6 h-6 text-purple-400" />
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -bottom-6 -left-6 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700"
                  >
                    <Code2 className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content Section */}
              <motion.div  className="space-y-10">
                {/* Header */}
                <div className="space-y-6">
                  <motion.h2
                   
                    className="text-5xl md:text-6xl font-bold text-white font-[Batangas] leading-tight"
                  >
                    About Me
                  </motion.h2>
                  <motion.div  className="w-24 h-1.5 bg-purple-500 rounded-full" />
                </div>

                {/* Description */}
                <motion.div  className="space-y-6">
                  <div className="relative">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                      I&apos;m a <span className="text-white font-semibold">Sophomore</span> at{" "}
                      <span className="text-white font-semibold">IIIT Lucknow</span>, pursuing{" "}
                      <span className="text-white font-semibold">B.Tech in Computer Science and Business</span> with a
                      stellar <span className="text-purple-400 font-bold">CGPA of 9.15</span>.
                    </p>
                  </div>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    I&apos;m a passionate technologist who thrives on transforming innovative concepts into elegant digital
                    solutions. My journey bridges the gap between cutting-edge technology and strategic business
                    thinking, creating impactful experiences that matter.
                  </p>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    Beyond coding, I&apos;m constantly exploring the frontiers of computer science—from complex algorithms to
                    immersive 3D experiences. I believe in the power of continuous learning and the endless
                    possibilities that emerge when creativity meets technical excellence.
                  </p>
                </motion.div>

                {/* Achievement Cards */}
                <motion.div  className="grid grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <motion.div
                      key={achievement.label}
                      whileHover={{ scale: 1.08, y: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center group hover:border-gray-600 transition-all duration-300 overflow-hidden"
                    >
                      {/* Subtle hover glow */}
                      <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                      <achievement.icon className="w-8 h-8 text-gray-400 group-hover:text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-sm text-gray-500 mb-2 font-medium tracking-wide">{achievement.label}</div>
                      <div className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {achievement.value}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Passion Points */}
                <motion.div  className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Heart className="w-6 h-6 text-purple-400" />
                    What Drives Me
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {passions.map((item) => (
                      <motion.div
                        key={item.text}
                        whileHover={{ x: 8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                          <item.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all" />
                        </div>
                        <span className="text-gray-400 group-hover:text-white transition-colors font-medium">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div  className="pt-4">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl font-semibold text-white text-lg shadow-lg transition-all duration-300 relative overflow-hidden group border border-purple-500/50"
                     onClick={() => window.open("https://linktr.ee/SugoiMrunal01", "_blank")}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Let&apos;s Connect
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Minimal decorative elements */}
            <div className="absolute top-8 right-8 w-24 h-24 border border-gray-800 rounded-full animate-spin-slow" />
            <div className="absolute bottom-8 left-8 w-20 h-20 border border-gray-800 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
