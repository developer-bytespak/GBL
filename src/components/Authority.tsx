"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Authority() {
  return (
    <AnimatedSection
      id="authority"
      className="py-20 sm:py-24 bg-charcoal border-y border-gold/10"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          className="w-12 h-12 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </motion.div>
        <motion.h2
          className="font-heading text-2xl sm:text-3xl text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Built for the Global Energy Market
        </motion.h2>
        <motion.div
          className="w-16 h-0.5 bg-gold mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.p
          className="font-body text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          492 GBL Academy is designed to support a global ecosystem connecting participants in the petroleum trading industry.
        </motion.p>
        <motion.p
          className="font-body text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Our mission is to establish the recognized training and certification standard for petroleum deal sourcing worldwide.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
