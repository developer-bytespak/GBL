"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Solution() {
  return (
    <AnimatedSection
      id="solution"
      className="py-24 sm:py-32 bg-deep-black relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Solution
        </motion.p>
        <motion.h2
          className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Introducing{" "}
          <span className="text-gold">492 GBL Academy</span>
        </motion.h2>
        <motion.div
          className="w-16 h-0.5 bg-gold mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.p
          className="font-body text-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          The first training institution specifically designed for petroleum deal
          sourcing. We are establishing the professional standard for energy
          market intermediaries through rigorous, structured certification.
        </motion.p>

        {/* Certification badge */}
        <motion.div
          className="inline-block bg-charcoal border border-gold/30 rounded-lg px-10 py-8"
          initial={{ opacity: 0, scale: 0.7, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(201,162,74,0.15)" }}
        >
          <p className="font-body text-gold/70 text-sm tracking-[0.15em] uppercase mb-2">
            Official Credential
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl text-white mb-2">
            Certified Buyer Liaison
          </h3>
          <motion.p
            className="font-heading text-4xl sm:text-5xl text-gold font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
          >
            CBL
          </motion.p>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4 mb-3" />
          <p className="font-body text-white/50 text-xs tracking-wider uppercase">
            492 Global Buyer Liaison Academy
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
