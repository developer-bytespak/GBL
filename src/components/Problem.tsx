"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "No Formal Training System",
    description:
      "The petroleum deal sourcing space has no recognized training program — leaving aspiring professionals without a structured path to learn the trade.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "No Certification Credential",
    description:
      "Without a verifiable credential, deal intermediaries cannot differentiate themselves from unqualified operators in the marketplace.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "No Structured Entry Pathway",
    description:
      "New entrants have no clear path to join the petroleum deal ecosystem — resulting in lost opportunities and unstructured attempts.",
  },
];

export default function Problem() {
  return (
    <AnimatedSection
      id="problem"
      className="py-24 sm:py-32 bg-light-bg relative overflow-hidden"
    >


      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <motion.p
            className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Industry Gap
          </motion.p>
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Oil Industry Has Never Had
            <br />a Clear Entry Path
          </motion.h2>
          <motion.div
            className="w-16 h-0.5 bg-gold mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="font-body text-gray-text text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            For decades the global petroleum market has been controlled by insiders.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-gold/40 transition-all duration-500 overflow-hidden shadow-sm"
            >
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/3 transition-colors duration-500 rounded-xl" />

              {/* Step number */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gold/8 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-500">
                  {problem.icon}
                </div>
                <span className="font-heading text-4xl text-charcoal/10 font-bold group-hover:text-gold/20 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>

              <h3 className="relative font-heading text-xl text-charcoal mb-3 group-hover:text-gold-dark transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="relative font-body text-gray-text text-sm leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                {problem.description}
              </p>

              {/* Bottom corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gold/5 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Thousands attempt to enter the industry every year.
            <br />
            Very few understand how deals actually happen.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
