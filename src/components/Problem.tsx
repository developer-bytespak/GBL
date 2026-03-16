import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "No Formal Training System",
    description:
      "The petroleum deal sourcing space has no recognized training program — leaving aspiring professionals without a structured path to learn the trade.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "No Certification Credential",
    description:
      "Without a verifiable credential, deal intermediaries cannot differentiate themselves from unqualified operators in the marketplace.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
      className="py-24 sm:py-32 bg-light-bg"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            The Industry Gap
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6">
            The Oil Industry Has Never Had
            <br />a Clear Entry Path
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            For decades the global petroleum market has been controlled by insiders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-5">{problem.icon}</div>
              <h3 className="font-heading text-xl text-charcoal mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-gray-text text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-gray-text text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Thousands attempt to enter the industry every year.
            <br />
            Very few understand how deals actually happen.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
