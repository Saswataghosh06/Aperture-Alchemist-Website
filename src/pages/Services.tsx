import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import GlassCard from '../components/atoms/GlassCard';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { Camera, Film, Edit3, Palette, Users, Zap, Play, Image, Smartphone, Monitor } from 'lucide-react';

const Services: React.FC = () => {
  const videoCategories = [
    { title: "Corporate Video", number: "01" },
    { title: "Commercial Video", number: "02" },
    { title: "Documentary Film", number: "03" },
    { title: "Product Video", number: "04" },
    { title: "Animation", number: "05" },
    { title: "Event Video", number: "06" },
    { title: "Educational Video", number: "07" },
    { title: "Entertainment Video", number: "08" },
    { title: "Fashion Video", number: "09" },
    { title: "Lifestyle", number: "10" },
    { title: "Interview Video", number: "11" },
    { title: "Social Media Video", number: "12" }
  ];

  const marketingServices = [
    {
      icon: Zap,
      title: "Strategic Planning",
      description: "Marketing strategy development, market research, and brand strategy with analytics & reporting."
    },
    {
      icon: Palette,
      title: "Creative Services", 
      description: "Content creation, web design & development, graphic design, and full-service video production."
    },
    {
      icon: Monitor,
      title: "Digital & Traditional Marketing",
      description: "Social media management, email marketing, public relations, and event planning & management."
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-left max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <GradientText variant="fade">Services</GradientText>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-light max-w-3xl">
              Comprehensive creative and marketing solutions to bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="text-center max-w-5xl mx-auto p-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Rent, Shoot, Wow: Our Studio Awaits!
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                We've got the coolest tech and all the resources to bring your ideas to life. 
                Book a tour and come be a part of the excitement – we're eager to show you around with a smile!
              </p>
              <AnimatedButton to="/contact" size="lg">
                Book a Tour
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              We Are Your Experts In These Categories
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Our creative toolbox overflows with video possibilities! From captivating stories to informative animations, 
              we craft videos that fit every need.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videoCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <GlassCard hover className="text-center p-6 group h-full">
                  <div className="text-2xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform">
                    {category.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Core Marketing Services</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              From strategic planning to creative execution, we provide comprehensive marketing solutions 
              that drive results and amplify your brand's impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard hover className="p-8 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center text-primary">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed">{service.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <FAQ />
    </div>
  );
};

export default Services;
