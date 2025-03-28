'use client';

import { motion } from 'framer-motion';
import { Envelope, MapPin, Calendar, InstagramLogo, FacebookLogo, TwitterLogo } from 'phosphor-react';

const ContactSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-purple-900 to-indigo-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute bottom-1/3 left-20 w-40 h-40 rounded-full bg-pink-500 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Map - Left Side - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.606445074074!2d-7.6480697245042055!3d33.589566173334596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f76df51bf3%3A0x5f9dfdc4ca65a5a6!2sParc%20du%20V%C3%A9lodrome!5e0!3m2!1sfr!2sma!4v1738774075758!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info - Right Side - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 h-full flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[StrangeDreams] text-white mb-6">
                Infos Pratiques
              </h2>

              {/* Contact information cards - Stack on mobile, grid on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Address Card */}
                <motion.div
                  className="bg-white/5 rounded-lg p-4 md:p-5 border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md">
                      <MapPin size={20} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white/80 text-xs md:text-sm mb-1">Adresse</h3>
                      <p className="text-white text-sm md:text-base">Parc du Vélodrome</p>
                      <p className="text-white text-sm md:text-base">Casablanca, Maroc</p>
                    </div>
                  </div>
                </motion.div>

                {/* Dates Card */}
                <motion.div
                  className="bg-white/5 rounded-lg p-4 md:p-5 border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-md">
                      <Calendar size={20} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white/80 text-xs md:text-sm mb-1">Dates & Horaires</h3>
                      <p className="text-white text-sm md:text-base">30 avril - 1 juin 2024</p>
                      <p className="text-white text-sm md:text-base">18h - Minuit</p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                  className="bg-white/5 rounded-lg p-4 md:p-5 border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-md">
                      <Envelope size={20} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white/80 text-xs md:text-sm mb-1">Contact</h3>
                      <p className="text-white text-sm md:text-base">contact@magicgarden.ma</p>
                    </div>
                  </div>
                </motion.div>

                {/* Empty card for grid balance */}
                <div className="hidden md:block opacity-0"></div>
              </div>

              {/* Social Links - Responsive sizing */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-lg mb-3 md:mb-4">Suivez-nous</h3>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors border border-white/10 text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FacebookLogo size={20} weight="fill" />
                    Facebook
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/magicgarden.ma/"
                    className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors border border-white/10 text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <InstagramLogo size={20} weight="fill" />
                    Instagram
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;