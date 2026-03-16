"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  name: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageSrc,
  name,
}: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/90 text-white hover:bg-charcoal transition-colors cursor-pointer shadow-lg"
              aria-label="Close certificate"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={`Certificate for ${name}`}
                width={1200}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for managing certificate modal state
export function useCertificateModal() {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    name: string;
  }>({
    isOpen: false,
    imageSrc: "",
    name: "",
  });

  const openModal = useCallback(
    (imageSrc: string, name: string) => {
      setModalData({ isOpen: true, imageSrc, name });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return { modalData, openModal, closeModal };
}
