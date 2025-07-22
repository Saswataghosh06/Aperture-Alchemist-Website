import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  delay?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  className,
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const increment = value / (duration / 16);
        
        const counter = setInterval(() => {
          setCount((prev) => {
            if (prev + increment >= value) {
              clearInterval(counter);
              return value;
            }
            return prev + increment;
          });
        }, 16);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn('text-center', className)}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-fade mb-2">
        {prefix}{Math.floor(count)}{suffix}
      </div>
      <p className="text-white font-medium text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

export default StatCounter;