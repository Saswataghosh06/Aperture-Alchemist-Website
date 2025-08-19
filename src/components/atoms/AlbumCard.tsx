import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface AlbumCardProps {
  title: string;
  subtitle: string;
  images: string[];
  driveLinks: string[];
  delay?: number;
  className?: string;
  thumbnail: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  subtitle,
  images = [],
  driveLinks = [],
  className,
  delay = 0,
  thumbnail,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fallbackImage = "/placeholder-image.jpg";
  const previewImages = [...(images || []), ...(driveLinks || [])];
  const thumbSrc = thumbnail || previewImages[0] || fallbackImage;

  // Auto-cycle images on hover
  useEffect(() => {
    if (isHovered && previewImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % previewImages.length);
      }, 1500); // change every 1.5s
      return () => clearInterval(interval);
    }
  }, [isHovered, previewImages.length]);

  return (
    <>
      {/* Album Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className={cn(
          "glass-card-hover rounded-2xl overflow-hidden cursor-pointer group",
          "relative aspect-[4/3]",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentIndex(0);
        }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Slideshow Images */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={previewImages[currentIndex] || thumbSrc}
              alt={`${title} preview`}
              onError={(e) =>
                ((e.currentTarget as HTMLImageElement).src = fallbackImage)
              }
              className="w-full h-64 md:h-full object-cover rounded-2xl absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <motion.div
            initial={false}
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{subtitle}</p>
          </motion.div>
        </div>

        {/* Image Count Badge */}
        {previewImages.length > 0 && (
          <div className="absolute top-3 right-3">
            <span className="glass-card px-3 py-1 text-xs font-medium text-white rounded-full">
              {previewImages.length} photo
              {previewImages.length > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </motion.div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="max-w-6xl w-full text-center">
              <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
              <p className="text-white/80 mb-6">{subtitle}</p>

              {previewImages.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {previewImages.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Album Image ${index + 1}`}
                      onError={(e) =>
                        ((e.currentTarget as HTMLImageElement).src =
                          fallbackImage)
                      }
                      className="rounded-lg object-cover w-full h-64"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlbumCard;
