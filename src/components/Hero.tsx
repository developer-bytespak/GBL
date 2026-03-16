"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/0_Oil_Rig_Offshore_Platform_1920x1080.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-deep-black/70" />

      {/* Gold gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 text-gold/80 text-sm tracking-[0.25em] uppercase font-body">
              <span className="w-8 h-px bg-gold/50" />
              Est. 2025
              <span className="w-8 h-px bg-gold/50" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The First Certification for{" "}
          <span className="text-gold">Petroleum Deal Sourcing</span>
        </motion.h1>

        <motion.p
          className="font-body text-xl sm:text-2xl text-white/80 mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Become a Certified Buyer Liaison (CBL) through the 492 GBL Academy.
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          The training institution created to establish the professional
          standard for petroleum deal intermediaries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a
            href="#pricing"
            className="inline-block bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-lg px-10 py-4 rounded transition-colors shadow-lg shadow-gold/20"
          >
            Enroll Now
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
