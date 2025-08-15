import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DesignCardProps {
  title: string;
  category: string | string[];
  image?: string;
  drivelinks?: string[]; // array of Google Drive links
  className?: string;
  delay?: number;
}

const DesignCard: React.FC<DesignCardProps> = ({
  title,
  category,
  image,
  drivelinks,
  className,
  delay = 0,
}) => {
  const fallback = 'https://via.placeholder.com/600x600.png?text=No+Preview';

  const categories =
    typeof category === 'string'
      ? category.split(',').map(c => c.trim()).filter(Boolean)
      : Array.isArray(category)
      ? category.filter(c => typeof c === 'string' && c.trim().length > 0)
      : [];

  const getPreviewImage = () => {
    // 1. Use direct image if available
    if (image) return image;

    // 2. If drive links exist, use the first one to make a thumbnail URL
    if (drivelinks && drivelinks.length > 0) {
      const firstLink = drivelinks[0];
      if (firstLink.includes('drive.google.com')) {
        const match = firstLink.match(/\/d\/([^/]+)/);
        if (match?.[1]) {
          return `https://drive.google.com/thumbnail?id=${match[1]}`;
        }
      }
    }

    // 3. Fallback placeholder
    return fallback;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'glass-card-hover rounded-xl overflow-hidden group cursor-pointer',
        'aspect-square relative',
        className
      )}
    >
      {/* Image Preview */}
      <div className="relative w-full h-3/4 overflow-hidden rounded-t-xl">
        <img
          src={getPreviewImage()}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Category Pills */}
        {categories.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-orange-500 to bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Design Text */}
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-white text-base">{title}</h3>
      </div>
    </motion.div>
  );
};

export default DesignCard;
