import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import ProjectCard from '../components/atoms/ProjectCard';
import FilterTab from '../components/atoms/FilterTab';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import AnimatedButton from '../components/atoms/AnimatedButton';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Animation',
    'Commercials', 
    'Corporate',
    'Documentary',
    'Educational',
    'Entertainment',
    'Event',
    'Fashion',
    'Interview',
    'Lifestyle',
    'Product Video',
    'Real Estate',
    'Social Media'
  ];

  const projects = [
    {
      title: "Brand Evolution",
      brand: "TechCorp",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=600&q=80"
    },
    {
      title: "Summer Collection",
      brand: "FashionHub",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?w=600&q=80"
    },
    {
      title: "Product Launch",
      brand: "InnovateInc", 
      category: "Commercials",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80"
    },
    {
      title: "City Stories",
      brand: "UrbanLife",
      category: "Documentary",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80"
    },
    {
      title: "Social Impact",
      brand: "NonProfitOrg",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
    },
    {
      title: "Dream Home Tour",
      brand: "RealtyPro",
      category: "Real Estate", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
    },
    {
      title: "Tech Tutorial Series",
      brand: "EduTech",
      category: "Educational",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
    },
    {
      title: "Music Festival Recap",
      brand: "SoundWave",
      category: "Event",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80"
    },
    {
      title: "CEO Interview",
      brand: "StartupHub",
      category: "Interview",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
    },
    {
      title: "Wellness Journey",
      brand: "LifeStyle Co",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
    },
    {
      title: "Smartphone Review",
      brand: "TechGadget",
      category: "Product Video",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
    },
    {
      title: "Animated Explainer",
      brand: "SoftwareCo",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1626387346567-8e9a43ea56b1?w=600&q=80"
    },
    {
      title: "Concert Experience",
      brand: "MusicLabel",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80"
    },
    {
      title: "Holiday Campaign",
      brand: "RetailBrand",
      category: "Commercials",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
    },
    {
      title: "Startup Story",
      brand: "NewVenture",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
    },
    {
      title: "Fashion Week Highlights",
      brand: "DesignerBrand",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              <GradientText variant="fade">Our</GradientText>
              <br />
              <span className="text-white">Projects</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-light max-w-4xl">
              Explore our diverse portfolio of creative projects across multiple industries and formats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {filters.map((filter) => (
              <FilterTab
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${activeFilter}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                No projects found for "{activeFilter}"
              </h3>
              <p className="text-white/70 mb-8">
                Try selecting a different category or view all projects.
              </p>
              <AnimatedButton onClick={() => setActiveFilter('All')}>
                View All Projects
              </AnimatedButton>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Project Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">478</div>
              <p className="text-white font-medium">Completed Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">50M+</div>
              <p className="text-white font-medium">Total Views</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">25+</div>
              <p className="text-white font-medium">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-fade mb-2">98%</div>
              <p className="text-white font-medium">Client Satisfaction</p>
            </div>
          </div>
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
              What our clients say about working with us on their projects
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
                <span className="text-white">Have a </span>
                <GradientText variant="primary">Project</GradientText>
                <span className="text-white"> in Mind?</span>
              </h2>
              <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create something extraordinary together. 
                Every great project starts with a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <AnimatedButton size="lg" href="/contact">
                  Start Your Project
                </AnimatedButton>
                <AnimatedButton variant="glass" size="lg" href="/services">
                  Our Services
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;