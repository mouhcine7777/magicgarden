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
      {/* Background image */}
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
          {/* Logo */}
          <motion.div
            className="w-64 md:w-80 lg:w-96 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <Image
              src="/logo.webp"
              alt="Magic Garden Light Festival"
              width={384}
              height={192}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Date and location - Styled like original title */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 tracking-wider"
            variants={itemVariants}
          >
            <p className="font-[StrangeDreams]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Du 3 mai au 1er juin
              </span>
              <span className="text-white mx-2">|</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Vélodrome de Casablanca
              </span>
            </p>
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