import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import VideoModal from '@/components/ui/VideoModal';

interface ProjectCardProps {
  title: string;
  brand: string;
  category: string | string[];
  image?: string;
  video?: string;
  className?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  brand,
  category,
  image,
  video,
  className,
  delay = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const fallback = 'https://via.placeholder.com/600x600.png?text=No+Preview';

  const categories =
    typeof category === 'string'
      ? category.split(',').map(c => c.trim()).filter(Boolean)
      : Array.isArray(category)
      ? category.filter(c => typeof c === 'string' && c.trim().length > 0)
      : [];

  const getPreviewImage = () => {
    if (image) return image;

    if (video) {
      if (/youtu\.?be/.test(video)) {
        const match = video.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([^&?/]+)/i);
        if (match?.[1]) {
          return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
        }
      }

      if (video.includes('drive.google.com')) {
        const match = video.match(/\/d\/([^/]+)/);
        if (match?.[1]) {
          return `https://drive.google.com/thumbnail?id=${match[1]}`;
        }
      }

      if (video.includes('instagram.com')) {
        return 'https://via.placeholder.com/600x600.png?text=Instagram+Preview';
      }
    }

    return fallback;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className={cn(
          'glass-card-hover rounded-xl overflow-hidden group cursor-pointer',
          'aspect-square relative',
          className
        )}
        onClick={() => video && setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Image Preview */}
        <div className="relative w-full h-3/4 overflow-hidden rounded-t-xl">
          <img
            src={getPreviewImage()}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {video && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-2">
                <Play className="w-5 h-5 text-black" />
              </div>
            </div>
          )}

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

        {/* Project Text */}
        <div className="p-4 space-y-1">
          <p className="text-sm text-muted-foreground font-light">{brand}</p>
          <h3 className="font-semibold text-white text-base">{title}</h3>
        </div>
      </motion.div>

      {isOpen && video && (
        <VideoModal videoUrl={video} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;
