import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../atoms/TestimonialCard';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "Aperture Alchemist transformed our brand story into a compelling visual narrative. Their attention to detail and creative vision exceeded all expectations. The final commercial boosted our engagement by 300%.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b55b?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "InnovateLab",
      content: "Working with this team was an absolute game-changer. They didn't just create a video; they crafted an experience that resonated with our audience on an emotional level. Pure magic!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Bright Studios",
      content: "The level of professionalism and creativity is unmatched. From pre-production to final delivery, every step was seamless. They truly understand how to bring stories to life through the lens.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Brand Manager",
      company: "Urban Collective",
      content: "Outstanding work! They captured the essence of our brand perfectly and delivered content that not only looks amazing but drives real business results. Couldn't be happier with the partnership.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "NextGen Solutions",
      content: "The team's ability to understand our vision and translate it into stunning visuals is remarkable. Every frame tells a story, and every story drives impact. Truly exceptional work.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;