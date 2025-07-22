import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'fade' | 'default';
  className?: string;
  animated?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  variant = 'default',
  className,
  animated = true
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'primary':
        return 'gradient-primary-text';
      case 'fade':
        return 'gradient-text-fade';
      default:
        return 'gradient-text';
    }
  };

  const Component = animated ? motion.span : 'span';

  return (
    <Component
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
      })}
      className={cn(getGradientClass(), className)}
    >
      {children}
    </Component>
  );
};

export default GradientText;