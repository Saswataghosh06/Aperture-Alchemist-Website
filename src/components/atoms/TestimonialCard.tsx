import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  avatar,
  rating,
  className
}) => {
  return (
    <motion.div
      className={cn(
        'glass-card rounded-xl p-6 h-full flex flex-col',
        'min-w-[350px] max-w-[400px]',
        className
      )}
      whileHover={{ scale: 1.02 }}
    >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < rating ? 'text-secondary fill-secondary' : 'text-gray-400'
            )}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-white/90 mb-6 flex-grow italic">
        "{content}"
      </blockquote>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-white/70">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;