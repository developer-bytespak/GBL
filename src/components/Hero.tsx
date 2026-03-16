"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.85]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden"
    >
      {/* Background video with parallax zoom */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/0_Oil_Rig_Offshore_Platform_1920x1080.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-deep-black"
        style={{ opacity: overlayOpacity }}
      />

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
              <motion.span
                className="w-8 h-px bg-gold/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              Est. 2025
              <motion.span
                className="w-8 h-px bg-gold/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          The First Certification for{" "}
          <motion.span
            className="text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, textShadow: "0 0 30px rgba(201,162,74,0.4)" }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Petroleum Deal Sourcing
          </motion.span>
        </motion.h1>

        <motion.p
          className="font-body text-xl sm:text-2xl text-white/80 mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Become a Certified Buyer Liaison (CBL) through the 492 GBL Academy.
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          The training institution created to establish the professional
          standard for petroleum deal intermediaries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#pricing"
            className="inline-block bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-lg px-10 py-4 rounded transition-colors shadow-lg shadow-gold/20 gold-glow-pulse"
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
