'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const FestivalAboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-purple-900 to-indigo-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Creative image collage - left side */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            {/* Main center image (largest) */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/festival-1.webp"
                alt="Main festival installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
            </motion.div>

            {/* Top-left image */}
            <motion.div 
              className="absolute top-0 left-0 w-2/5 h-1/3 rounded-lg overflow-hidden shadow-lg z-20 border border-white/20"
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/festival-2.webp"
                alt="Festival performance"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom-right image */}
            <motion.div 
              className="absolute bottom-0 right-0 w-2/5 h-1/3 rounded-lg overflow-hidden shadow-lg z-20 border border-white/20"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/festival-3.webp"
                alt="Festival details"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text content - right side */}
          <div className="w-full lg:w-1/2 space-y-6 text-white">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-[StrangeDreams]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Un Royaume Enchanté
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Pour la première fois au Maroc, le Magic Garden Festival transforme le Vélodrome de Casablanca en un royaume enchanté.
              </p>
              <p>
                Du 30 avril au 1er juin, voyagez à travers un jardin lumineux où sculptures féeriques, performances hypnotiques et décors oniriques éveilleront vos sens.
              </p>
              <p>
                Une expérience immersive unique, conçue pour émerveiller les petits et inspirer les grands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/30">
                Découvrir l'expérience
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl"></div>
    </section>
  );
};

export default FestivalAboutSection;