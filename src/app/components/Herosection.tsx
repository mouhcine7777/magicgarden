'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MagicGardenHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background image without parallax */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.webp"
          alt="Magic Garden Festival background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-indigo-900/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        <motion.div
          className="flex h-full flex-col items-center justify-center px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Main title with glow effect */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-2 sm:mb-4 tracking-wide"
            variants={itemVariants}
          >
            <span className="font-[StrangeDreams] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300">
              Magic Garden
            </span>
            <motion.span
              className="font-[StrangeDreams] block text-3xl sm:text-5xl md:text-6xl mt-2 text-pink-200 font-light"
              variants={itemVariants}
            >
              Light Festival
            </motion.span>
          </motion.h1>

          {/* Date and location */}
          <motion.div
            className="font-montserrat text-lg sm:text-xl md:text-2xl text-white font-light mb-6 sm:mb-8 tracking-wider"
            variants={itemVariants}
          >
            <p>Du 3 mai au 1er juin – Vélodrome de Casablanca</p>
          </motion.div>

          {/* Description text */}
          <motion.div
            className="max-w-2xl mx-auto text-white text-sm sm:text-base md:text-lg font-montserrat font-light leading-relaxed mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <p>Entre dans un monde enchanté quand la nuit tombe et que la lumière prend vie.</p>
            <p>Un parcours féerique où chaque pas vous plonge dans un univers de rêve et d'émerveillement.</p>
          </motion.div>

          {/* CTA button */}
          <motion.button
            className="relative px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-montserrat font-medium text-lg tracking-wide hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Tickets bientôt disponibles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MagicGardenHero;