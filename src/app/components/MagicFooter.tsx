"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const MagicFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-900 to-purple-900 border-t border-white/10">
      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo with magical glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-40 md:w-48 h-auto"
          >
            <Image
              src="/logo.webp"
              alt="Magic Garden Festival"
              width={192}
              height={192}
              className="w-full h-auto drop-shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md -z-10"></div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-center text-sm md:text-base max-w-md"
          >
            Un voyage lumineux au cœur de Casablanca
          </motion.p>

          {/* Copyright with magical accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mt-4"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-4"></div>
            <p className="text-white/50 text-xs md:text-sm">
              © {new Date().getFullYear()} Magic Garden Festival. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default MagicFooter;