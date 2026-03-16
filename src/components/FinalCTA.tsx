"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="enroll"
      className="py-24 sm:py-32 bg-deep-black relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-deep-black via-charcoal/30 to-deep-black animate-gradient" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Future Starts Here
        </motion.p>
        <motion.h2
          className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The Next Generation of Energy Dealmakers{" "}
          <motion.span
            className="text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, textShadow: "0 0 30px rgba(201,162,74,0.4)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Is Being Trained Now
          </motion.span>
        </motion.h2>
        <motion.p
          className="font-body text-white/50 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Those who understand how deals are sourced position themselves closest to opportunity.
        </motion.p>
        <motion.p
          className="font-body text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the 492 GBL Academy and earn your Certified Buyer Liaison
          credential. Position yourself at the forefront of petroleum deal
          sourcing.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <a
            href="#pricing"
            className="inline-block bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-lg px-12 py-4 rounded transition-colors shadow-lg shadow-gold/20 gold-glow-pulse"
          >
            Enroll Now — $497
          </a>
        </motion.div>
        <motion.p
          className="font-body text-white/30 text-xs mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          One-time investment · Lifetime certification
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
