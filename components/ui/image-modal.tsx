'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  alt: string
}

export default function ImageModal({ isOpen, onClose, imageUrl, alt }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-[#001219] border border-[#40E0D0]/20"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#001219]/80 border border-[#40E0D0]/20
                hover:border-[#40E0D0]/40 text-[#40E0D0] transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full pt-[60%]">
              <Image
                src={imageUrl}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 80vw"
                quality={100}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
