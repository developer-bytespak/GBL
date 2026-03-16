import AnimatedSection from "./AnimatedSection";

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
        <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
          Investment
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-12">
          Program Tuition
        </h2>

        {/* Pricing Card */}
        <div className="bg-charcoal border border-gold/20 rounded-xl p-10 sm:p-12 shadow-2xl">
          <div className="mb-8">
            <p className="font-body text-white/50 text-sm mb-2">One-Time Investment</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-heading text-6xl sm:text-7xl text-gold font-bold">
                $497
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
              <li key={index} className="flex items-start gap-3">
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
              </li>
            ))}
          </ul>

          <a
            href="#enroll"
            className="block w-full bg-gold hover:bg-gold-dark text-deep-black font-body font-bold text-lg py-4 rounded transition-colors shadow-lg shadow-gold/20 text-center"
          >
            Enroll Now
          </a>

          <p className="font-body text-white/30 text-xs mt-4">
            A one-time investment to gain certification and entry into the 492
            Global network.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
