import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import GradientText from '../atoms/GradientText';

const ShowreelSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            <GradientText variant="fade">Showreel</GradientText>
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="aspect-video rounded-3xl overflow-hidden glass-card group cursor-pointer relative"
          >
            {/* Video Thumbnail */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80"
                alt="Showreel thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card-hover w-24 h-24 rounded-full flex items-center justify-center text-white group-hover:shadow-glow transition-all duration-300"
              >
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </motion.div>
            </div>

            {/* Video Overlay Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-80 mb-1">Our Latest Work</p>
              <h3 className="text-xl font-semibold">2024 Showreel</h3>
            </div>

            {/* Duration Badge */}
            <div className="absolute top-6 right-6">
              <span className="glass-card px-3 py-1 text-sm font-medium text-white rounded-full">
                2:30
              </span>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            See how we bring stories to life through cinematic excellence and creative vision. 
            Every frame is crafted with passion and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Watch Full Showreel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glass"
            >
              Browse Projects
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ShowreelSection;