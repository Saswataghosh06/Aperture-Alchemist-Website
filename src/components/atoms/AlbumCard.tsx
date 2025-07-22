import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
    >
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden">
        <img 
          src={images[0]} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Images Grid */}
        <AnimatePresence>
          {isHovered && images.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 grid grid-cols-2 gap-1 p-2"
            >
              {images.slice(1, 5).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="rounded-lg overflow-hidden"
                >
                  <img 
                    src={img} 
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Overlay */}
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
        <div className="absolute top-3 right-3">
          <span className="glass-card px-3 py-1 text-xs font-medium text-white rounded-full">
            {images.length} photos
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default AlbumCard;