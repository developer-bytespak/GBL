import AnimatedSection from "./AnimatedSection";

export default function Scarcity() {
  return (
    <AnimatedSection
      id="scarcity"
      className="py-20 sm:py-24 bg-charcoal border-y border-gold/10"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-block bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-6">
          <p className="font-body text-gold text-sm font-semibold tracking-wider">
            FOUNDING CLASS — LIMITED ENROLLMENT
          </p>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
          The Founding Class Is Now Forming
        </h2>
        <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          As a founding member, your name will be permanently recorded in the
          492 GBL Academy&apos;s inaugural class. This is a one-time opportunity to
          be among the first certified professionals in the petroleum deal
          sourcing industry.
        </p>
        <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Future cohorts may see increased tuition and admission requirements.
        </p>
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="font-heading text-3xl text-gold font-bold">4</p>
            <p className="font-body text-white/40 text-xs uppercase tracking-wider mt-1">
              Certified
            </p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="font-heading text-3xl text-white font-bold">2025</p>
            <p className="font-body text-white/40 text-xs uppercase tracking-wider mt-1">
              Founding Year
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
