import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import AlbumCard from '../components/atoms/AlbumCard';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import AnimatedButton from '../components/atoms/AnimatedButton';

const Albums: React.FC = () => {
  const albums = [
    {
      title: "Corporate Portraits 2024",
      subtitle: "Professional headshots and executive photography",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
        "https://images.unsplash.com/photo-1494790108755-2616b612b55b?w=600&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
      ]
    },
    {
      title: "Fashion Forward",
      subtitle: "Contemporary fashion and lifestyle photography",
      images: [
        "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?w=600&q=80",
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
        "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&q=80"
      ]
    },
    {
      title: "Urban Architecture",
      subtitle: "Modern buildings and architectural details",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
      ]
    },
    {
      title: "Product Showcase",
      subtitle: "Commercial product photography and styling",
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
        "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=600&q=80"
      ]
    },
    {
      title: "Event Memories",
      subtitle: "Corporate events and celebration photography",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
        "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=600&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80"
      ]
    },
    {
      title: "Creative Concepts",
      subtitle: "Artistic and conceptual photography projects",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80",
        "https://images.unsplash.com/photo-1567428485012-4fb9b81b8d98?w=600&q=80",
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80"
      ]
    },
    {
      title: "Behind the Scenes",
      subtitle: "Production process and team at work",
      images: [
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
        "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&q=80"
      ]
    },
    {
      title: "Nature & Landscapes",
      subtitle: "Outdoor photography and natural beauty",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&q=80",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80"
      ]
    },
    {
      title: "Food & Culinary",
      subtitle: "Restaurant and food photography portfolio",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&q=80",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
      ]
    },
    {
      title: "Travel Stories",
      subtitle: "Destination and travel photography collection",
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
        "https://images.unsplash.com/photo-1502780402662-acc01917949e?w=600&q=80",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d4d3c7?w=600&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
      ]
    },
    {
      title: "Industrial Design",
      subtitle: "Manufacturing and industrial photography",
      images: [
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80",
        "https://images.unsplash.com/photo-1565293492595-56de4026d14f?w=600&q=80",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
        "https://images.unsplash.com/photo-1565293585948-81d6ffe12e6d?w=600&q=80",
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&q=80"
      ]
    },
    {
      title: "Lifestyle Portraits",
      subtitle: "Natural and candid portrait photography",
      images: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <GradientText variant="fade">Photo</GradientText>
              <br />
              <span className="text-white">Albums</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-light max-w-4xl">
              Explore our curated collection of photography albums showcasing diverse projects and creative moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <AlbumCard
                key={index}
                {...album}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Photography by Numbers
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our photography portfolio spans across multiple genres and formats
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">50K+</div>
              <p className="text-white font-medium">Photos Captured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">200+</div>
              <p className="text-white font-medium">Photo Albums</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">15+</div>
              <p className="text-white font-medium">Photography Styles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">100+</div>
              <p className="text-white font-medium">Events Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Photography Services
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From corporate headshots to creative conceptual shoots, we capture your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card-hover text-center p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Corporate Photography</h3>
              <p className="text-white/70">Professional headshots, team photos, and corporate event coverage</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card-hover text-center p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Product Photography</h3>
              <p className="text-white/70">High-quality product shots for e-commerce and marketing materials</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card-hover text-center p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Event Photography</h3>
              <p className="text-white/70">Comprehensive event coverage from conferences to celebrations</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <AnimatedButton href="/services">
              View All Services
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client Stories
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              What our clients say about our photography services
            </p>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-white">Ready to Create </span>
                <GradientText variant="primary">Visual</GradientText>
                <span className="text-white"> Stories?</span>
              </h2>
              <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                Let's capture your moments, products, or events with professional photography 
                that tells your unique story.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <AnimatedButton size="lg" href="/contact">
                  Book a Shoot
                </AnimatedButton>
                <AnimatedButton variant="glass" size="lg" href="/services">
                  Photography Services
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Albums;