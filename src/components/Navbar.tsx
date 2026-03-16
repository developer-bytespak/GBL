import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#hero">
          <Image
            src="/logo (3).png"
            alt="492 GBL Academy Logo"
            width={68}
            height={68}
            className="object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-white/70 hover:text-gold transition-colors font-body">
            The Problem
          </a>
          <a href="#solution" className="text-sm text-white/70 hover:text-gold transition-colors font-body">
            Solution
          </a>
          <a href="#benefits" className="text-sm text-white/70 hover:text-gold transition-colors font-body">
            Benefits
          </a>
          <a href="#pricing" className="text-sm text-white/70 hover:text-gold transition-colors font-body">
            Tuition
          </a>
          <a href="#founders" className="text-sm text-white/70 hover:text-gold transition-colors font-body">
            Founders
          </a>
        </div>
        <a
          href="#pricing"
          className="bg-gold hover:bg-gold-dark text-deep-black font-body font-semibold text-sm px-6 py-2 rounded transition-colors"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
}
