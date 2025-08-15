import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/organisms/HeroSection';
import ShowreelSection from '../components/organisms/ShowreelSection';
import LogoTicker from '../components/molecules/LogoTicker';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import ProjectCard from '../components/atoms/ProjectCard';
import DesignCard from '../components/atoms/DesignCard';
import GradientText from '../components/atoms/GradientText';
import GlassCard from '../components/atoms/GlassCard';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { Camera, Film, Edit3, Palette } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const Home: React.FC = () => {
  // 🔹 State to store fetched data from Supabase
  const [projects, setProjects] = useState<any[]>([]);
  const [designs, setDesigns] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);

  // 🔹 Fetch Projects from Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').limit(6);
      setProjects(data || []);
    };
    fetchProjects();
  }, []);

  // 🔹 Fetch Designs from Supabase
  useEffect(() => {
    const fetchDesigns = async () => {
      const { data } = await supabase.from('designs').select('*').limit(6);
      setDesigns(data || []);
    };
    fetchDesigns();
  }, []);

  // 🔹 Fetch Albums from Supabase
  useEffect(() => {
    const fetchAlbums = async () => {
      const { data } = await supabase.from('albums').select('*').limit(6);
      setAlbums(data || []);
    };
    fetchAlbums();
  }, []);

  // 🔹 Services section data (unchanged)
  const services = [
    { icon: Camera, title: "Photography", description: "Stunning visual storytelling through the lens" },
    { icon: Film, title: "Cinematography", description: "Cinematic excellence in every frame" },
    { icon: Edit3, title: "Post-Production", description: "Polished perfection in editing and effects" },
    { icon: Palette, title: "Creative Direction", description: "Vision and concept development" }
  ];

  return (
    <div className="min-h-screen">
      {/* 🔹 Hero Section */}
      <HeroSection />

      {/* 🔹 Showreel Section */}
      <ShowreelSection />

      {/* 🔹 Logo Ticker */}
      <LogoTicker />

      {/* ===================== PROJECTS SECTION ===================== */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText variant="fade">Featured</GradientText>
              <br /><span className="text-white">Projects</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl">
              Discover our latest creative works that showcase the power of visual storytelling
            </p>
          </motion.div>

          {/* Horizontal Scroll Projects */}
          <div className="relative">
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 }} className="flex-shrink-0 w-80">
                  <ProjectCard
                    title={project.title}
                    brand={project.brand}
                    category={project.categories || project.category}
                    image={project.image}
                    video={project.video}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* View All Button */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mt-12">
            <AnimatedButton href="/projects">View All Projects</AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* ===================== DESIGNS SECTION ===================== */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText variant="fade">Creative</GradientText>
              <br /><span className="text-white">Designs</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl">
              From posters to banners, brochures, and more — explore our design work
            </p>
          </motion.div>

          {/* Horizontal Scroll Designs */}
          <div className="relative">
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {designs.map((design, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 }} className="flex-shrink-0 w-80">
                  <DesignCard
                    title={design.title}
                    brand={design.brand}
                    category={design.categories}
                    image={design.image}
                    video={design.video}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* View All Button */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mt-12">
            <AnimatedButton href="/designs">View All Designs</AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* ===================== ALBUMS SECTION ===================== */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText variant="fade">Photo</GradientText>
              <br /><span className="text-white">Albums</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl">
              A glimpse of our photography work, events, and special moments
            </p>
          </motion.div>

          {/* Horizontal Scroll Albums */}
          <div className="relative">
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex gap-6 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {albums.map((album, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 }} className="flex-shrink-0 w-80">
                  <GlassCard className="overflow-hidden">
                    <img
                      src={album.images?.[0] || '/placeholder.jpg'}
                      alt={album.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-white">{album.title}</h3>
                      <p className="text-sm text-white/70">{album.subtitle}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* View All Button */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mt-12">
            <AnimatedButton href="/albums">View All Albums</AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* ===================== Services Section (unchanged) ===================== */}
      {/* ... keep your existing services section here exactly as is ... */}

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
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

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default Home;
