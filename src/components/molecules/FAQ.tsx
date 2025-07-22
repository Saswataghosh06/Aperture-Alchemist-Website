import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlassCard from '../atoms/GlassCard';
import GradientText from '../atoms/GradientText';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of video production services do you offer?",
      answer: "We specialize in corporate videos, commercials, documentaries, product videos, event coverage, social media content, and animation. Our team brings cinematic quality to every project, whether it's a brand story or a full-scale commercial campaign."
    },
    {
      question: "How long does a typical video project take to complete?",
      answer: "Project timelines vary based on complexity. Simple corporate videos typically take 2-3 weeks, while comprehensive commercial campaigns can take 6-8 weeks. We'll provide a detailed timeline during our initial consultation based on your specific needs."
    },
    {
      question: "Do you provide equipment and crew for shoots?",
      answer: "Absolutely! We have state-of-the-art cameras, lighting equipment, and a professional crew including directors, cinematographers, and sound engineers. Our studio is fully equipped for both indoor shoots and location-based productions."
    },
    {
      question: "Can you help with concept development and scripting?",
      answer: "Yes, we offer full creative services from concept to completion. Our team includes creative directors and writers who can develop compelling narratives, write scripts, create storyboards, and ensure your message resonates with your target audience."
    },
    {
      question: "What's included in your video production packages?",
      answer: "Our packages typically include pre-production planning, filming, post-production editing, color grading, sound design, and multiple format deliverables. We also provide revisions and can create additional cuts for different platforms like social media."
    },
    {
      question: "Do you offer photography services as well?",
      answer: "Yes! Our photography services include corporate headshots, product photography, event coverage, and brand lifestyle shoots. We apply the same cinematic approach to our photography, creating visually stunning images that complement your video content."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText variant="fade">Frequently Asked</GradientText>
            <br />
            <span className="text-white">Questions</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            our clients ask about our video production and photography services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard 
              key={index} 
              hover 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="cursor-pointer"
              delay={index * 0.1}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10 mt-4">
                      <p className="text-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;