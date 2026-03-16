"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Scarcity from "@/components/Scarcity";
import FoundersWall from "@/components/FoundersWall";
import Leadership from "@/components/Leadership";
import Authority from "@/components/Authority";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CertificateModal, {
  useCertificateModal,
} from "@/components/CertificateModal";

export default function Home() {
  const { modalData, openModal, closeModal } = useCertificateModal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Pricing />
        <Scarcity />
        <FoundersWall onViewCertificate={openModal} />
        <Leadership onViewCertificate={openModal} />
        <Authority />
        <FinalCTA />
      </main>
      <Footer />
      <CertificateModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        imageSrc={modalData.imageSrc}
        name={modalData.name}
      />
    </>
  );
}
