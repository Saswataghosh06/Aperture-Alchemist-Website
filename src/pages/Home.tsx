import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/organisms/HeroSection';
import ShowreelSection from '../components/organisms/ShowreelSection';
import LogoTicker from '../components/molecules/LogoTicker';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import ProjectCard from '../components/atoms/ProjectCard';
import GradientText from '../components/atoms/GradientText';
import GlassCard from '../components/atoms/GlassCard';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { Camera, Film, Edit3, Palette, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  const portfolioProjects = [
    {
      title: "Brand Revolution",
      brand: "TechFlow",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=600&q=80"
    },
    {
      title: "Urban Stories",
      brand: "CityScape",
      category: "Documentary",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80"
    },
    {
      title: "Future Vision",
      brand: "InnovateLab",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80"
    },
    {
      title: "Creative Minds",
      brand: "ArtStudio",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?w=600&q=80"
    }
  ];

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Stunning visual storytelling through the lens"
    },
    {
      icon: Film,
      title: "Cinematography", 
      description: "Cinematic excellence in every frame"
    },
    {
      icon: Edit3,
      title: "Post-Production",
      description: "Polished perfection in editing and effects"
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Vision and concept development"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Showreel Section */}
      <ShowreelSection />

      {/* Logo Ticker */}
      <LogoTicker />

      {/* Portfolio Section - Train Animation from Right */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText variant="fade">Featured</GradientText>
              <br />
              <span className="text-white">Portfolio</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl">
              Discover our latest creative works that showcase the power of visual storytelling
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex-shrink-0 w-80"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <AnimatedButton href="/projects">
              View All Projects
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">From Concept To</span>
                <br />
                <span className="text-white">Completion:</span>
                <br />
                <GradientText variant="primary">We've Got You Covered!</GradientText>
              </h2>
            </motion.div>

            {/* Right Content - Service Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Pre-Production Card */}
              <GlassCard className="p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Pre-Production</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Pre-production serves as the pivotal phase in any creative endeavor, encompassing 
                  planning, idea refinement, budgeting, schedule creation, and the meticulous organization of 
                  logistical details.
                </p>
                <AnimatedButton variant="glass" size="sm">
                  LEARN MORE
                </AnimatedButton>
              </GlassCard>

              {/* Production Card */}
              <GlassCard className="p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Production</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Production represents the dynamic phase of a creative project, where the plans from pre-production 
                  spring to life, with cameras rolling, actors delivering their performances, and the 
                  realization of the creative vision.
                </p>
                <AnimatedButton variant="glass" size="sm">
                  LEARN MORE
                </AnimatedButton>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Agency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-white">About Our Agency</span>
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed mb-12">
                <p>
                  <span className="text-white">Established in 2015, we have dedicated ourselves to</span> the 
                  art of visual storytelling. Our journey has been fueled by creativity, innovation, and an unwavering commitment 
                  to <span className="text-white font-semibold">excellence in video production.</span>
                </p>
                <p>
                  Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an 
                  opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event 
                  coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to 
                  exceeding our clients' expectations.
                </p>
              </div>

              <div className="mt-8">
                <AnimatedButton variant="primary" size="lg">
                  Know More About Us
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Right Content - Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-white/20 mb-2">15+</div>
                <p className="text-white font-semibold text-lg">YEARS OF EXPERIENCE</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-white/20 mb-2">200+</div>
                <p className="text-white font-semibold text-lg">REPEATED CLIENTS</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-white/20 mb-2">470+</div>
                <p className="text-white font-semibold text-lg">COMPLETED PROJECTS</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-white/20 mb-2">330+</div>
                <p className="text-white font-semibold text-lg">HAPPY CLIENTS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText variant="fade">Client</GradientText>{" "}
              <span className="text-white">Stories</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Hear what our clients say about their experience working with us
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <GlassCard className="max-w-4xl mx-auto text-center p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-white">Ready to </span>
                <GradientText variant="primary">Create</GradientText>
                <span className="text-white"> Something Amazing?</span>
              </h2>
              <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life. 
                Every great story starts with a single conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <AnimatedButton size="lg" href="/contact">
                  Let's Collaborate
                </AnimatedButton>
                <AnimatedButton variant="glass" size="lg" href="/projects">
                  View Our Work
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;