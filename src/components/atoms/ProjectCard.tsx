import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  brand: string;
  category: string;
  image: string;
  video?: string;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  brand,
  category,
  image,
  video,
  className,
  onClick,
  delay = 0,
}) => {
  const fallback = 'https://via.placeholder.com/600x600.png?text=No+Preview';
  const previewSrc = image || fallback;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'glass-card-hover rounded-xl overflow-hidden cursor-pointer group',
        'aspect-square relative',
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      {/* Media Preview */}
      <div className="relative w-full h-3/4 overflow-hidden rounded-t-xl">
        <img
          src={previewSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Video Overlay */}
        {video && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-2">
              <Play className="w-5 h-5 text-black" />
            </div>
          </div>
        )}

        {/* Category Tag */}
        <div className="absolute top-3 right-3">
          <span className="glass-card px-3 py-1 text-xs font-medium text-white rounded-full">
            {category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details */}
      <div className="p-4 space-y-1">
        <p className="text-sm text-muted-foreground font-light">{brand}</p>
        <h3 className="font-semibold text-white text-base">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
