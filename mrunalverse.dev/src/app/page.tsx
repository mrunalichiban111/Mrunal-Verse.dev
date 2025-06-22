'use client'

import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";

import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    // Hide scrollbar but keep functionality
    document.body.style.scrollbarWidth = "none" // Firefox
    
    // Webkit browsers
    const style = document.createElement("style")
    style.textContent = `
      ::-webkit-scrollbar {
        display: none;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        overflow-x: hidden;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])
  return (

    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
        <Preloader />
        <FloatingNavbar/>
        <Hero />
        <Footer />
    </div>
  );
}
