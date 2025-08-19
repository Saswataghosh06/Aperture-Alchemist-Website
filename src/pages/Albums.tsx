import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../components/atoms/GradientText";
import FilterTab from "../components/atoms/FilterTab";
import AnimatedButton from "../components/atoms/AnimatedButton";
import AlbumCard from "../components/atoms/AlbumCard";
import supabase from "../lib/supabaseClient"; // ✅ default export

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  // 🔹 Filters (update to your categories if needed)
  const filters = ["All", "Wedding", "Event", "Travel", "Portrait", "Others"];

  // 🔹 Helper to ensure thumbnails work
  const getThumbnail = (images?: string[] | null, drivelinks?: string[] | null) => {
    if (images && images.length > 0) return images[0];
    if (drivelinks && drivelinks.length > 0) {
      const firstLink = drivelinks[0];
      const match = firstLink.match(/\/d\/([^/]+)/);
      if (match?.[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}`;
      }
      return firstLink;
    }
    return "/placeholder-image.jpg";
  };

  // 🔹 Fetch albums
  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("albums")
        .select("id, title, subtitle, images, drivelinks, categories")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching albums:", error);
        setAlbums([]);
      } else if (data) {
        const processed = data.map((album) => ({
          ...album,
          thumbnail: getThumbnail(album.images, album.drivelinks),
        }));
        setAlbums(processed);
      }

      setLoading(false);
    };

    fetchAlbums();
  }, []);

  // 🔹 Filter albums by category
  const filteredAlbums = useMemo(() => {
    if (activeFilter === "All") return albums;
    return albums.filter((album) => {
      const categories = Array.isArray(album.categories)
        ? album.categories
        : typeof album.category === "string"
        ? album.category.split(",").map((c: string) => c.trim())
        : [];
      return categories.some(
        (cat: string) => cat.toLowerCase() === activeFilter.toLowerCase()
      );
    });
  }, [albums, activeFilter]);

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
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
              <span className="text-white">Albums</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-light max-w-4xl">
              Explore our curated photo albums — capturing weddings, travels,
              events, and timeless memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center overflow-x-auto"
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

      {/* Grid of Albums */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-white">Loading albums...</p>
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
                  {filteredAlbums.map((album, index) => (
                    <AlbumCard
                      key={`${album.id}-${activeFilter}`}
                      title={album.title}
                      subtitle={album.subtitle}
                      images={album.images || []}
                      driveLinks={album.drivelinks || []}
                      thumbnail={album.thumbnail}
                      delay={index * 0.1}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* No Results */}
              {filteredAlbums.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    No albums found for "{activeFilter}"
                  </h3>
                  <p className="text-white/70 mb-8">
                    Try selecting a different category or view all albums.
                  </p>
                  <AnimatedButton onClick={() => setActiveFilter("All")}>
                    View All Albums
                  </AnimatedButton>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Albums;
