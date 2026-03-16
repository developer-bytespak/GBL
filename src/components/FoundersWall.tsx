"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

interface FoundersWallProps {
  onViewCertificate: (
    imageSrc: string,
    name: string
  ) => void;
}

const founders = [
  { name: "Neal Fane", agent: "7", date: "2/2026", cert: "/certifacte-1.jpg" },
  { name: "Winford Straub", agent: "88", date: "2/2026", cert: "/certifacte-2.jpg" },
  { name: "Blair Garner", agent: "99", date: "2/2026", cert: "/certifacte-3.jpg" },
  { name: "Nicole Davis", agent: "114", date: "2/2026", cert: "/certifacte-4.jpg" },
];

export default function FoundersWall({ onViewCertificate }: FoundersWallProps) {
  return (
    <AnimatedSection
      id="founders"
      className="py-24 sm:py-32 bg-light-bg"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Inaugural Class
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6">
            The First Certified Buyer Liaisons in History
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Intro text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed mb-4">
            Every institution that changes an industry begins with a small group of pioneers.
          </p>
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed mb-4">
            The individuals below represent the Founding Graduates of the 492 GBL Academy — the first professionals ever to complete the training and earn the designation of Certified Buyer Liaison (CBL).
          </p>
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed">
            Their names are permanently recorded in the history of the Academy as the first generation of certified participants in the global petroleum deal-sourcing ecosystem.
          </p>
        </div>

        {/* Founders grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 0 25px rgba(201,162,74,0.15), 0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover-gold-glow"
              style={{ perspective: 1000 }}
            >
              {/* Certificate thumbnail preview */}
              <div className="p-3 border-b border-gray-100 bg-gray-50">
                <Image
                  src={founder.cert}
                  alt={`Certificate for ${founder.name}`}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Card info */}
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg text-charcoal mb-1">
                  {founder.name}
                </h3>
                <p className="font-body text-gold text-sm font-medium mb-1">
                  Agent #{founder.agent}
                </p>
                <p className="font-body text-gray-text text-xs mb-4">
                  Founding CBL Graduate {founder.date}
                </p>
                <button
                  onClick={() =>
                    onViewCertificate(
                      founder.cert,
                      founder.name
                    )
                  }
                  className="w-full bg-charcoal hover:bg-deep-black text-white font-body text-sm py-2.5 rounded transition-colors cursor-pointer"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The First Cohort — after cards */}
        {/* <div className="max-w-3xl mx-auto text-center mt-20">
          <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mb-6">
            The First Cohort
          </h3>
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed mb-4">
            These four individuals represent the first graduating class of the 492 GBL Academy.
          </p>
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed mb-4">
            As the academy expands globally, many more professionals will follow in their footsteps — but these names will always stand as the founding members who helped launch the Certified Buyer Liaison program.
          </p>
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed">
            Their participation marks the beginning of what is designed to become a recognized professional certification for petroleum deal intermediaries worldwide.
          </p>
        </div> */}

        {/* Founders CTA */}
        <div className="max-w-3xl mx-auto text-center mt-20 pt-16 border-t border-gray-200">
          <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mb-4">
            Become Part of the Next Class
          </h3>
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed mb-8">
            The next group of Certified Buyer Liaisons is forming now. Position yourself inside the growing global network of trained petroleum deal facilitators.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-base sm:text-lg px-10 py-4 rounded transition-colors shadow-lg shadow-gold/20"
          >
            ENROLL IN 492 GBL ACADEMY TODAY
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
