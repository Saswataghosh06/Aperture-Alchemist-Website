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
        'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
        'border border-white/20 backdrop-blur-md',
        isActive 
          ? 'bg-primary text-primary-foreground border-primary shadow-glow' 
          : 'bg-white/5 text-white hover:bg-white/10 hover:border-white/30',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-primary rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default FilterTab;