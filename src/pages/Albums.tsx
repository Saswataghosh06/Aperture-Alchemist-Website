import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import AlbumCard from '../components/atoms/AlbumCard';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { supabase } from '@/lib/supabaseClient'; // ✅ Supabase client

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      const { data, error } = await supabase.from('albums').select('*');
      if (error) {
        console.error('Error fetching albums:', error.message);
      } else {
        setAlbums(data);
      }
      setLoading(false);
    };
    fetchAlbums();
  }, []);

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <GradientText variant="fade">Photo</GradientText><br />
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
          {loading ? (
            <p className="text-center text-white">Loading albums...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album, index) => (
                <AlbumCard
                  key={album.id || index}
                  title={album.title}
                  subtitle={album.subtitle}
                  images={album.images} // 📷 array of image URLs
                  delay={index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sections Below (unchanged) */}
      {/* Statistics, Services, Testimonials, FAQ, CTA */}
      {/* ... keep everything below as is ... */}
      {/* (You already pasted this, no need to duplicate) */}
    </div>
  );
};

export default Albums;
