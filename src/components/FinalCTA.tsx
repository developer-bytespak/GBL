"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="enroll"
      className="py-24 sm:py-32 bg-deep-black relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-6">
          Your Future Starts Here
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
          The Next Generation of Energy Dealmakers{" "}
          <span className="text-gold">Is Being Trained Now</span>
        </h2>
        <p className="font-body text-white/50 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          Those who understand how deals are sourced position themselves closest to opportunity.
        </p>
        <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join the 492 GBL Academy and earn your Certified Buyer Liaison
          credential. Position yourself at the forefront of petroleum deal
          sourcing.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-lg px-12 py-4 rounded transition-colors shadow-lg shadow-gold/20"
        >
          Enroll Now — $497
        </a>
        <p className="font-body text-white/30 text-xs mt-4">
          One-time investment · Lifetime certification
        </p>
      </div>
    </AnimatedSection>
  );
}
