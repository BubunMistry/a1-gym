"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({})

  const images = [
    "/images/about-gym.jpg",
    "/images/gallary.jpg",
    "/images/gallary2.jpg",
    "/images/gallary3.jpg",
    "/images/gallary4.jpg",
    "/images/gallary (5).jpg",
    "/images/main.jpg",
    "/images/banner.jpg",
  ]

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
    setImageLoading((prev) => ({ ...prev, [index]: false }))
  }

  const handleImageLoad = (index: number) => {
    setImageLoading((prev) => ({ ...prev, [index]: false }))
  }

  const handleImageStart = (index: number) => {
    setImageLoading((prev) => ({ ...prev, [index]: true }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-[#2f7df9]/5 to-white dark:from-gray-900 dark:via-[#2f7df9]/10 dark:to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#2f7df9]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#5ba0ff]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-bold text-[#2f7df9] bg-[#2f7df9]/10 px-4 py-2 rounded-full border border-[#2f7df9]/20">
              FACILITY GALLERY
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Facility <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art gym facilities and training environment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 1 }}
              onClick={() => !imageErrors[index] && setSelectedImage(image)}
              className="relative h-48 rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl hover:shadow-[#2f7df9]/40 transition-all duration-500 border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 bg-gray-100 dark:bg-gray-800"
            >
              {imageErrors[index] ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2f7df9]/10 to-[#5ba0ff]/10">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm text-muted-foreground">Image {index + 1}</p>
                    <p className="text-xs text-muted-foreground mt-1">Not Available</p>
                  </div>
                </div>
              ) : (
                <>
                  {imageLoading[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <div className="w-8 h-8 border-4 border-[#2f7df9] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                    onLoadStart={() => handleImageStart(index)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#2f7df9]/60 transition-all duration-300 flex items-center justify-center rounded-2xl pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white font-semibold bg-[#2f7df9] px-4 py-2 rounded-xl">View</div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Fullscreen"
                className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
                onError={() => setSelectedImage(null)}
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-transparent text-white rounded-full p-2 hover:bg-[#2f7df9] transition-all shadow-lg border-2 border-white/30 hover:border-[#2f7df9]"
            >
              <X size={24} className="text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
