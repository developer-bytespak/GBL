import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo (3).png"
              alt="492 GBL Academy Logo"
              width={72}
              height={72}
              className="object-contain mb-3"
            />
            <p className="font-heading text-gold text-xl mb-3">
              492 GBL Academy
            </p>
            <p className="font-body text-white/40 text-sm leading-relaxed">
              The first professional certification institution for petroleum deal sourcing. Training the next generation of Certified Buyer Liaisons worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {[
                { label: "The Problem", href: "#problem" },
                { label: "Solution", href: "#solution" },
                { label: "Benefits", href: "#benefits" },
                { label: "Tuition", href: "#pricing" },
                { label: "Founders Wall", href: "#founders" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/40 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="font-body text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
              About the Academy
            </p>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-3">
              492 GBL Academy is designed to support a global ecosystem connecting participants in the petroleum trading industry. Our mission is to establish the recognized training and certification standard for petroleum deal sourcing.
            </p>
            <a
              href="#pricing"
              className="font-body text-gold text-sm hover:text-gold-light transition-colors"
            >
              Enroll Today &rarr;
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/5 pt-6 text-center">
          <p className="font-body text-white/25 text-xs">
            &copy; {new Date().getFullYear()} 492 Global Buyer Liaison Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
