"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperiencesSection = () => {
  const activities = [
    {
      title: "Le Jardin des Lanternes",
      description: "Sculptures géantes inspirées de contes",
      image: "/festival-1.webp",
      color: "from-yellow-300 to-amber-400"
    },
    {
      title: "L'Allée des Merveilles",
      description: "Performances de danseurs lumineux",
      image: "/festival-2.webp",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "L'Espace Aladdin",
      description: "Mascottes et animations pour enfants",
      image: "/festival-3.webp",
      color: "from-blue-400 to-teal-400"
    },
    {
      title: "Photobooth Magique",
      description: "Immortalisez votre visite sous les étoiles",
      image: "/festival-1.webp",
      color: "from-indigo-400 to-violet-500"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-indigo-900 to-purple-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-500 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[StrangeDreams] text-white mb-4">
            Expériences & Activités
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Explorez un jardin peuplé de créatures lumineuses, de décors féeriques et d'installations interactives
          </p>
        </motion.div>

        {/* Activities grid - Creative image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl h-96"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image with gradient overlay */}
              <div className="absolute inset-0">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-80 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className={`w-12 h-1 mb-3 bg-gradient-to-r ${activity.color}`}></div>
                <h3 className="text-2xl font-bold mb-1">{activity.title}</h3>
                <p className="text-white/90">{activity.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-white/40 group-hover:scale-[0.98]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;