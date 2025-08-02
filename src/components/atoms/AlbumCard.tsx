import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface AlbumCardProps {
  title: string;
  subtitle: string;
  images: string[];
  className?: string;
  delay?: number;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  subtitle,
  images,
  className,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fallbackImage = 'https://via.placeholder.com/600x400.png?text=No+Image';
  const validImages = images?.filter(Boolean) ?? [];

  return (
    <>
      {/* Album Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className={cn(
          'glass-card-hover rounded-xl overflow-hidden cursor-pointer group',
          'aspect-[4/3] relative',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Main Image */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={validImages[0] || fallbackImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Grid Preview */}
          <AnimatePresence>
            {isHovered && validImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 grid grid-cols-2 gap-1 p-2"
              >
                {validImages.slice(1, 5).map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <img
                      src={img || fallbackImage}
                      alt={`${title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

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

          {/* Image Count */}
          {validImages.length > 0 && (
            <div className="absolute top-3 right-3">
              <span className="glass-card px-3 py-1 text-xs font-medium text-white rounded-full">
                {validImages.length} photo{validImages.length > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {validImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Album Image ${index + 1}`}
                    className="rounded-lg object-cover w-full h-64"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlbumCard;
