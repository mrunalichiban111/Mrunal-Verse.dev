"use client"

import type React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Spline from "@splinetool/react-spline"
import { TextHoverEffect } from "./TextHover"
import { GlowingEffect } from "./GlowingEffect"
import { Box, Lock, Search, Settings, Sparkles, ArrowDown, Code, Palette, Zap, Globe } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { AboutMeSection } from "./AboutMe"

export default function EnhancedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cosmic gradient orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Animated grid pattern */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Floating cosmic particles */}
        
      </div>

      {/* Enhanced Mouse follower effect */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
      />

      <motion.div style={{ opacity }} className="relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 min-h-screen">
          {/* Left: Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-30 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white font-[Batangas] mb-6">
                Hey, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Mrunal
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Full-stack developer • DSA nerd • 3D design enthusiast <br />
              Currently building the{" "}
              <motion.span
                className="text-pink-400 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MrunalVerse
              </motion.span>
              .
            </motion.p>

            {/* Enhanced Stats Section */}
            

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Clean 3D Spline Element */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[400px] md:h-[700px] mt-10 md:mt-0 perspective-1000"
          >
            <div className="relative h-full">
              <Spline scene="https://prod.spline.design/j26SNL5D4aHw27M4/scene.splinecode" />

              {/* Floating tech icons around 3D element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <Code className="absolute top-10 left-10 w-6 h-6 text-cyan-400 opacity-60" />
                <Palette className="absolute top-20 right-10 w-6 h-6 text-blue-400 opacity-60" />
                <Zap className="absolute bottom-20 left-10 w-6 h-6 text-purple-400 opacity-60" />
                <Globe className="absolute bottom-10 right-20 w-6 h-6 text-cyan-400 opacity-60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Welcome Text Section */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-20 flex items-center justify-center py-20"
      >
        <TextHoverEffect text="WELCOME to My Portfolio" />
      </motion.div>

      <AboutMeSection/>

      {/* Enhanced Skills Grid Section */}
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 px-8 md:px-16 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-7xl  font-[Batangas]  bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent h-20"
        >
          I'm a Passionate
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-5 w-5 text-cyan-400" />}
            title="Full Stack Developer"
            description="I build full-stack applications with Next.js, React, Node.js, and more."
            delay={0.1}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-5 w-5 text-purple-400" />}
            title="Web3 Enthusiast"
            description="I love building decentralized applications and exploring blockchain technology."
            delay={0.2}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-5 w-5 text-pink-400" />}
            title="AI Enthusiast"
            description="I enjoy working with AI technologies and integrating them into my projects."
            delay={0.3}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
            title="Open Source Contributor"
            description="I am a beginner open source contributor, always looking to learn and grow."
            delay={0.4}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-5 w-5 text-blue-400" />}
            title="Frontend Developer"
            description="I specialize in creating beautiful and responsive user interfaces with React and Tailwind CSS."
            delay={0.5}
            isInView={isInView}
          />
        </ul>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-white/60 cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById("about")
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full border border-white/20 hover:border-purple-400/50 transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  delay: number
  isInView: boolean
}

const GridItem = ({ area, icon, title, description, delay, isInView }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay: delay + 0.3, duration: 0.6, ease: "easeOut" }}
      className={`min-h-[16rem] list-none ${area}`}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -8,
          rotateX: 5,
          rotateY: 5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full rounded-3xl border border-blue-500/20 p-3 bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <GlowingEffect spread={80} glow={true} disabled={false} proximity={100} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl p-6 bg-black/20 backdrop-blur-sm group-hover:bg-black/10 transition-all duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 10 }}
              className="w-fit rounded-xl border border-blue-400/30 p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300"
            >
              {icon}
            </motion.div>
            <div className="space-y-4">
              <h3 className="font-sans text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                {title}
              </h3>
              <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {description}
              </p>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </div>
      </motion.div>
    </motion.li>
  )
}
