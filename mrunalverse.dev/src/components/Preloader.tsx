// components/Preloader.tsx
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundBeams } from './BackgroundBeams';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 10000); // 7 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  const audio = new Audio('/preloader-sound.mp3');
  audio.volume = 1; // Optional: Set volume
  audio.play().catch((err) => {
    console.warn('Autoplay failed:', err);
  });

  const timer = setTimeout(() => setIsVisible(false), 10000);
  return () => {
    clearTimeout(timer);
    audio.pause();
    audio.currentTime = 0;
  };
}, []);

  return (
    
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center"
        >
            {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <BackgroundBeams />
          </div>
         
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center bg-black shadow-lg overflow-hidden text-center ml-40">
              <Image
                src="/images/logo.png" // or "/assets/logo.png" depending on where you stored it
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-5xl font-extrabold text-white tracking-widest font-[Batangas]">MrunalVerse.dev</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
