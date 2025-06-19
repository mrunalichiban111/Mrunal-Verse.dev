// components/Preloader.tsx
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundBeams } from './BackgroundBeams';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 10000); // 7 seconds
    return () => clearTimeout(timer);
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
            <h1 className="text-5xl font-extrabold text-white tracking-widest font-[Batangas]">MrunalVerse.dev</h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
