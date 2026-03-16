export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <p className="font-heading text-gold text-lg mb-2">
          492 Global Buyer Liaison Academy
        </p>
        <p className="font-body text-white/30 text-sm">
          &copy; {new Date().getFullYear()} 492 GBL Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
