import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const FilterTab: React.FC<FilterTabProps> = ({
  label,
  isActive,
  onClick,
  className
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden',
        'border border-white/20 backdrop-blur-md whitespace-nowrap',
        isActive
          ? 'bg-gradient-to-r from-orange-500 text-white shadow-lg'
          : 'bg-white/5 text-white hover:bg-white/10 hover:border-white/30',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
};

export default FilterTab;
