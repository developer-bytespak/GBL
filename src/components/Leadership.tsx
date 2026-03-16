"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface LeadershipProps {
  onViewCertificate: (
    imageSrc: string,
    name: string
  ) => void;
}

const instructors = [
  {
    name: "F A Koffi Hallman",
    agent: "4",
    cert: "/certifacte-1.jpg",
  },
  {
    name: "Clarone Garner",
    agent: "8",
    cert: "/certifacte-2.jpg",
  },
  {
    name: "Brian Le Dieu",
    agent: "20",
    cert: "/certifacte-3.jpg",
  },
];

// Each instructor slides in from a different direction
const slideDirections = [
  { x: -80, y: 0 },   // left
  { x: 0, y: 80 },    // bottom
  { x: 80, y: 0 },    // right
];

export default function Leadership({ onViewCertificate }: LeadershipProps) {
  return (
    <AnimatedSection
      id="leadership"
      className="py-24 sm:py-32 bg-deep-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/3 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <motion.p
            className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Academy Leadership
          </motion.p>
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Led by Certified Expertise
          </motion.h2>
          <motion.div
            className="w-16 h-0.5 bg-gold mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: slideDirections[index].x,
                y: slideDirections[index].y,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 0 30px rgba(201,162,74,0.12)" }}
              className="bg-charcoal rounded-xl border border-gold/20 overflow-hidden"
            >
              {/* Styled certificate preview */}
              <div className="bg-linear-to-b from-[#FFFDF5] to-[#F9F6ED] p-6 border-b border-gold/20">
                <div className="border-2 border-gold/20 p-5 text-center">
                  <p className="text-gold/60 text-[10px] tracking-[0.2em] uppercase font-body mb-1">
                    492 GBL Academy
                  </p>
                  <div className="w-8 h-px bg-gold/30 mx-auto mb-2" />
                  <p className="font-heading text-xs text-charcoal/60 mb-1">
                    Instructor Certificate
                  </p>
                  <p className="font-heading text-base text-charcoal font-semibold">
                    {instructor.name}
                  </p>
                  <p className="text-gold/50 text-[10px] font-body mt-1">
                    Agent #{instructor.agent} · Certified Instructor
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl text-white mb-2">
                  {instructor.name}
                </h3>
                <p className="font-body text-gold text-sm font-medium mb-1">
                  Agent #{instructor.agent}
                </p>
                <p className="font-body text-white/60 text-sm mb-5">
                  Certified Instructor
                </p>
                {/* <button
                  onClick={() =>
                    onViewCertificate(
                      instructor.cert,
                      instructor.name
                    )
                  }
                  className="w-full bg-gold hover:bg-gold-dark text-deep-black font-body font-semibold text-sm py-3 rounded transition-colors cursor-pointer"
                >
                  View Certificate
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
