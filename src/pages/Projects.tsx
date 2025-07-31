import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import ProjectCard from '../components/atoms/ProjectCard';
import FilterTab from '../components/atoms/FilterTab';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { supabase } from '@/lib/supabaseClient'; // ✅ Supabase client

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) {
        console.error('Error fetching projects:', error.message);
      } else {
        setProjects(data);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <GradientText variant="fade">Our</GradientText><br />
              <span className="text-white">Projects</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-light max-w-4xl">
              Explore our diverse portfolio of creative projects across multiple industries and formats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
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

      {/* Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-white">Loading projects...</p>
          ) : (
            <>
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
                      key={`${project.id}-${activeFilter}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProjectCard
                        title={project.title}
                        brand={project.brand}
                        category={project.category}
                        image={project.image}
                        video={project.video}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
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
            </>
          )}
        </div>
      </section>

      {/* Sections Below (unchanged) */}
      {/* Stats, Testimonials, FAQ, CTA */}
    </div>
  );
};

export default Projects;
