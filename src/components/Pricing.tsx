"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>${count}</span>;
}

export default function Pricing() {
  return (
    <AnimatedSection
      id="pricing"
      className="py-24 sm:py-32 bg-deep-black relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-[80px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6 sm:px-8 text-center">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Investment
        </motion.p>
        <motion.h2
          className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Program Tuition
        </motion.h2>

        {/* Pricing Card — floating */}
        <motion.div
          className="bg-charcoal border border-gold/20 rounded-xl p-10 sm:p-12 shadow-2xl animate-float"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-8">
            <p className="font-body text-white/50 text-sm mb-2">One-Time Investment</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-heading text-6xl sm:text-7xl text-gold font-bold">
                <AnimatedCounter target={497} />
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-8" />

          <ul className="text-left space-y-4 mb-10">
            {[
              "Certified Buyer Liaison (CBL) Credential",
              "492 GBL Academy Full Training Program",
              "Global Buyer Liaison Network Access",
              "Official Certificate of Completion",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <svg
                  className="w-5 h-5 text-gold mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-body text-white/80 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>

          <a
            href="#enroll"
            className="block w-full bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-lg py-4 rounded transition-colors shadow-lg shadow-gold/20 gold-glow-pulse text-center"
          >
            Enroll Now
          </a>

          <p className="font-body text-white/30 text-xs mt-4">
            A one-time investment to gain certification and entry into the 492
            Global network.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
