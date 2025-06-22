"use client"

import type React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Spline from "@splinetool/react-spline"
import { TextHoverEffect } from "./TextHover"
import { GlowingEffect } from "./GlowingEffect"
import {
  Box,
  ArrowDown,
  Code,
  Palette,
  Zap,
  Globe,
  Bitcoin,
  BrainCircuit,
  GitPullRequest,
  Pen,
  Terminal,
  Database,
  Wrench,
  FileCode,
  Hexagon,
  Coffee,
  Shield,
  Lightbulb,
  Cpu,
  Leaf,
  Braces,
  Github,
  Gitlab,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { AboutMeSection } from "./AboutMe"
import Image from "next/image"


export default function EnhancedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const techSkillsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const isTechSkillsInView = useInView(techSkillsRef, { once: true, margin: "-100px" })

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

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-white overflow-hidden scroll-smooth"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cosmic gradient orbs */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Animated grid pattern */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>


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
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white font-[Batangas] mb-6 ml-5 px-6">
                Hey, I&apos;m{" "}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed ml-5 px-6"
            >
              <p className="mb-4">
                <b>Full-Stack Developer • Web3 & AI Enthusiast • Creative Technologist</b>
              </p>
              <p className="mb-4 text-lg">
                I&apos;m a CSE + Business undergrad turning innovative ideas into interactive, real-world solutions — with a
                touch of design, a love for 3D, and a flair for storytelling
              </p>
              <p>
                Currently building the{" "}
                <motion.span
                  className="text-blue-400 font-semibold cursor-pointer"
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  CineVault
                </motion.span>
                .
              </p>
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

      <AboutMeSection />

      {/* Enhanced Skills & Technologies Section */}
      <motion.div
        ref={techSkillsRef}
        initial={{ opacity: 0 }}
        animate={isTechSkillsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 px-8 md:px-16 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isTechSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-[Batangas] bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools I use to build exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Full Stack Frameworks */}
        <TechSection
          title="Full Stack Frameworks"
          icon={<Globe className="w-8 h-8 text-cyan-400" />}
          delay={0.3}
          isInView={isTechSkillsInView}
          technologies={[
            {
              name: "Next.js",
              icon: <Zap className="w-6 h-6" />,
              color: "from-gray-800 to-black",
              description: "React Framework",
            },
            {
              name: "React",
              icon: <Code className="w-6 h-6" />,
              color: "from-cyan-500 to-blue-600",
              description: "UI Library",
            },
            {
              name: "Node.js",
              icon: <Terminal className="w-6 h-6" />,
              color: "from-green-500 to-green-700",
              description: "Runtime Environment",
            },
          ]}
        />

        {/* Backend Technologies */}
        <TechSection
          title="Backend Technologies"
          icon={<Database className="w-8 h-8 text-purple-400" />}
          delay={0.4}
          isInView={isTechSkillsInView}
          technologies={[
            {
              name: "Express.js",
              icon: <Zap className="w-6 h-6" />,
              color: "from-gray-600 to-gray-800",
              description: "Web Framework",
            },
            {
              name: "Django",
              icon: <Code className="w-6 h-6" />,
              color: "from-green-600 to-green-800",
              description: "Python Framework",
            },
            {
              name: "Spring Boot",
              icon: <Leaf className="w-6 h-6" />,
              color: "from-yellow-500 to-green-600",
              description: "Java Framework",
            },
          ]}
        />

        {/* Frontend Technologies */}
        <TechSection
          title="Frontend Technologies"
          icon={<Palette className="w-8 h-8 text-pink-400" />}
          delay={0.5}
          isInView={isTechSkillsInView}
          technologies={[
            {
              name: "JavaScript",
              icon: <Code className="w-6 h-6" />,
              color: "from-yellow-400 to-orange-500",
              description: "Core Language",
            },
            {
              name: "TypeScript",
              icon: <FileCode className="w-6 h-6" />,
              color: "from-blue-500 to-blue-700",
              description: "Typed JavaScript",
            },
            {
              name: "Tailwind CSS",
              icon: <Palette className="w-6 h-6" />,
              color: "from-cyan-400 to-blue-500",
              description: "CSS Framework",
            },
            {
              name: "Bootstrap",
              icon: <Braces className="w-6 h-6" />,
              color: "from-purple-400 to-blue-500",
              description: "CSS Framework",
            },
          ]}
        />

        {/* Web3 & Blockchain */}
        <TechSection
          title="Web3 & Blockchain"
          icon={<Bitcoin className="w-8 h-8 text-yellow-400" />}
          delay={0.6}
          isInView={isTechSkillsInView}
          technologies={[
            {
              name: "Solidity",
              icon: <Code className="w-6 h-6" />,
              color: "from-purple-500 to-purple-700",
              description: "Smart Contracts",
            },
            {
              name: "Ethereum",
              icon: <Hexagon className="w-6 h-6" />,
              color: "from-blue-400 to-purple-600",
              description: "Blockchain Platform",
            },
            {
              name: "Web3.js",
              icon: <Globe className="w-6 h-6" />,
              color: "from-orange-500 to-red-600",
              description: "Blockchain Library",
            },
          ]}
        />

        {/* Programming Languages */}
        <TechSection
          title="Core Programming Languages"
          icon={<Code className="w-8 h-8 text-green-400" />}
          delay={0.7}
          isInView={isTechSkillsInView}
          technologies={[
            {
              name: "C++",
              icon: <Cpu className="w-6 h-6" />,
              color: "from-blue-500 to-blue-700",
              description: "System Programming",
            },
            {
              name: "C",
              icon: <Cpu className="w-6 h-6" />,
              color: "from-gray-500 to-gray-700",
              description: "Low-level Programming",
            },
            {
              name: "Java",
              icon: <Coffee className="w-6 h-6" />,
              color: "from-orange-500 to-red-600",
              description: "Enterprise Development",
            },
            {
              name: "Rust",
              icon: <Shield className="w-6 h-6" />,
              color: "from-orange-600 to-red-700",
              description: "Systems Programming",
            },
            {
              name: "Python",
              icon: <Terminal className="w-6 h-6" />,
              color: "from-yellow-500 to-green-600",
              description: "Backend Language",
            },
          ]}
        />

        {/* Development Tools */}
        <TechSection
          title="Development Tools & Environment"
          icon={<Wrench className="w-8 h-8 text-blue-400" />}
          delay={0.8}
          isInView={isTechSkillsInView}
          technologies={[
            {
              name: "VS Code",
              icon: <Code className="w-6 h-6" />,
              color: "from-blue-500 to-blue-700",
              description: "Code Editor",
            },
            {
              name: "IntelliJ IDEA",
              icon: <Lightbulb className="w-6 h-6" />,
              color: "from-red-500 to-pink-600",
              description: "IDE",
            },
            {
              name: "Git",
              icon: <Github className="w-6 h-6" />,
              color: "from-orange-500 to-red-600",
              description: "Version Control",
            },
            {
              name: "GitLab",
              icon: <Gitlab className="w-6 h-6" />,
              color: "from-orange-600 to-orange-800",
              description: "DevOps Platform",
            },
            {
              name: "Figma",
              icon: <Palette className="w-6 h-6" />,
              color: "from-purple-500 to-pink-500",
              description: "Design Tool",
            },
            {
              name: "Kali Linux",
              icon: <Terminal className="w-6 h-6" />,
              color: "from-blue-600 to-purple-700",
              description: "Security Testing",
            },
          ]}
        />
      </motion.div>

      {/* Projects Showcase Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 px-8 md:px-16 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-[Batangas] bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore some of my latest work and creative projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <ProjectCarousel />
      </motion.div>

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
          className="text-center text-7xl font-[Batangas] bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent h-[20rem] flex items-center justify-center"
        >
          I&apos;m a Passionate
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2 mb-20">
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
            icon={<Bitcoin className="h-5 w-5 text-purple-400" />}
            title="Web3 Enthusiast"
            description="I love building decentralized applications and exploring blockchain technology."
            delay={0.2}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<BrainCircuit className="h-5 w-5 text-pink-400" />}
            title="AI Enthusiast"
            description="I enjoy working with AI technologies and integrating them into my projects."
            delay={0.3}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<GitPullRequest className="h-5 w-5 text-yellow-400" />}
            title="Open Source Contributor"
            description="I am a beginner open source contributor, always looking to learn and grow."
            delay={0.4}
            isInView={isInView}
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Pen className="h-5 w-5 text-blue-400" />}
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
          className="flex flex-col items-center text-white/60 cursor-pointer group"
          onClick={() => smoothScrollTo("about")}
        >
          <span className="text-sm mb-2 group-hover:text-white/80 transition-colors">Scroll Down</span>
          <motion.div
            whileHover={{ scale: 1.2, y: -2 }}
            className="p-3 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 bg-black/20 backdrop-blur-sm group-hover:bg-purple-500/10"
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
          <div className="relative flex h-full flex-col justify-between gap-4">
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

interface TechSectionProps {
  title: string
  icon: React.ReactNode
  delay: number
  isInView: boolean
  technologies: Array<{
    name: string
    icon: React.ReactNode
    color: string
    description: string
  }>
}

const TechSection = ({ title, icon, delay, isInView, technologies }: TechSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6 }}
      className="mb-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <EnhancedTechCard key={tech.name} {...tech} delay={delay + 0.3 + index * 0.1} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

interface EnhancedTechCardProps {
  name: string
  icon: React.ReactNode
  color: string
  description: string
  delay: number
  isInView: boolean
}

const EnhancedTechCard = ({ name, icon, color, description, delay, isInView }: EnhancedTechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <div className="text-white">{icon}</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Hover effect line */}
          <div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
          />
        </div>

        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 -z-10`}
        />
      </div>
    </motion.div>
  )
}

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  category: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Victory-Verse",
    description:
      "A blockchain-based system that replaces cash prizes with tradable fan tokens, creating a dynamic reward economy where winners' value grows as fans engage.",
    technologies: ["Next.js", "React", "Ether.js", "Solidity", "Tailwind CSS", "OpenZeppelin", "IPFS"],
    image: "/images/VictoryVerse.png",
    liveUrl: "https://victory-verse.vercel.app/",
    githubUrl: "https://github.com/mrunalichiban111/Victory-Verse",
    category: "Web3",
    featured: true,
  },
  {
    id: 2,
    title: "OrganizeU",
    description:
      "OrganizeU is a smart personal productivity website designed to simplify life and keep you organized. It helps you manage tasks set goals and track progress effortlessly.It is a one stop solution to create your schedule manage your time and stay productive.",
    technologies: ["Bootstrap", "Spring Boot", "MySQL", "HTML", "CSS", "Javascript"],
    image: "/images/OrganizeU2.png",
    liveUrl: "https://organizeu-app.onrender.com/",
    githubUrl: "https://github.com/mrunalichiban111/OraganizeU.repo",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Kernel",
    description:
      "A versatile and production-ready smart contract development environment that redefines the experience of blockchain developers on Polkadot AssetHub. Kernel AI combines exceptional speed, security, and intelligence to provide a seamless experience to develop, audit, and deploy smart contracts.",
    technologies: ["Polkadot", "Solidity", "OpenAI", "React", "Tailwind CSS", "Next.js", "Wagmi"],
    image: "/images/Kernel.png",
    liveUrl: "https://kernel-two.vercel.app/",
    githubUrl: "https://github.com/datmedevil17/Kernel",
    category: "Web3 and AI",
    featured: true,
  },
  {
    id: 4,
    title: "MrunalVerse",
    description:
      "A personal portfolio website showcasing creative design and development skills with interactive 3D elements and smooth animations.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Spline"],
    image: "/images/MrunalVerse.png",
    liveUrl: "#",
    githubUrl: "https://github.com/example",
    category: "Web Development",
    featured: true,
  },
  {
    id: 5,
    title: "CineVault",
    description:
      "A revolutionary blockchain-based platform for content creators and film industry, featuring IP protection and decentralized content distribution.",
    technologies: [
      "Work in Progress",
      "Solidity",
      "React",
      "Web3.js",
      "IPFS",
      "Ethereum",
      "Story IP",
      "Wagmi",
      "Typescript",
    ],
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "https://github.com/Kaustubh-1-7/CineVault",
    category: "Web3",
    featured: true,
  },
]

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isCarouselInView = useInView(carouselRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <motion.div
      ref={carouselRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isCarouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-7xl mx-auto"
    >
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 z-30 hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevProject}
          className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/25"
        >
          <ArrowDown className="w-6 h-6 rotate-90" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-30 hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextProject}
          className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/25"
        >
          <ArrowDown className="w-6 h-6 -rotate-90" />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center gap-4 mb-8 lg:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevProject}
          className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowDown className="w-5 h-5 rotate-90" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextProject}
          className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowDown className="w-5 h-5 -rotate-90" />
        </motion.button>
      </div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-3xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <motion.div
          className="flex transition-transform duration-700 ease-out"
          animate={{ x: `-${currentIndex * 100}%` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0 px-2 md:px-4">
              <ProjectCard
                project={project}
                isActive={index === currentIndex}
                index={index}
                isInView={isCarouselInView}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Indicators */}
      <div className="flex justify-center mt-8 gap-4">
        {projects.map((project, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToProject(index)}
            className={`relative transition-all duration-300 ${index === currentIndex ? "w-12 h-3" : "w-3 h-3"}`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-400/50"
                : "bg-white/30 hover:bg-white/50"
                }`}
            />
            {index === currentIndex && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-sm opacity-50"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Project Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isCarouselInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-6"
      >
        <span className="text-sm text-gray-400">
          {currentIndex + 1} of {projects.length} projects
        </span>
      </motion.div>
    </motion.div>
  )
}

interface ProjectCardProps {
  project: Project
  isActive: boolean
  index: number
  isInView: boolean
}

const ProjectCard = ({ project, isActive, index, isInView }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (project.liveUrl && project.liveUrl !== "#") {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithub = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (project.githubUrl && project.githubUrl !== "#") {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={
        isInView
          ? {
            opacity: isActive ? 1 : 0.7,
            y: 0,
            scale: isActive ? 1 : 0.95,
            filter: isActive ? "blur(0px)" : "blur(1px)",
          }
          : { opacity: 0, y: 60, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/90 border border-blue-500/20 backdrop-blur-sm group"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={isHovered ? { opacity: 0.15 } : { opacity: 0.05 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20"
        />



        <div className="relative h-full p-6 md:p-8 flex flex-col md:flex-row">
          {/* Left Side - Project Image */}
          <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative h-48 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4"
              >
                <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white rounded-full backdrop-blur-sm border border-white/20">
                  {project.category}
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Project Info */}
          <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-between">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-full border border-white/20">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3"
            >
              {project.liveUrl && project.liveUrl !== "#" && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLiveDemo}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </motion.button>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGithub}
                  className="flex-1 py-3 px-4 bg-white/10 text-white rounded-xl font-semibold text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 text-sm backdrop-blur-sm cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Glow Effect */}
        <motion.div
          animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl pointer-events-none"
        />

        {/* Border Glow */}
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 pointer-events-none"
        />
      </motion.div>

      {/* Card Shadow */}
      <motion.div
        animate={isHovered ? { opacity: 0.4, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl -z-10 pointer-events-none"
      />
    </motion.div>
  )
}