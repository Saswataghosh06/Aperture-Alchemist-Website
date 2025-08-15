import React, { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient"; // ✅ default export
import AlbumCard from "../components/atoms/AlbumCard";

const Albums = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("albums")
        .select("id, title, subtitle, images, drivelinks")
        .order("created_at", { ascending: false });

      console.log("📦 Raw data from Supabase:", data, "error:", error);

      if (error) {
        console.error("Error fetching albums:", error);
        setAlbums([]);
      } else if (data) {
        const processed = data.map((album) => {
          const imgArray = album.images || [];
          const driveArray = album.drivelinks || [];

          console.log(`🎯 Album: ${album.title}`);
          console.log("   images:", imgArray);
          console.log("   drivelinks (raw):", album.drivelinks);
          console.log("   chosen thumbnail:", 
            imgArray[0] || driveArray[0] || "/placeholder-image.jpg"
          );

          return {
            ...album,
            thumbnail: imgArray[0] || driveArray[0] || "/placeholder-image.jpg",
          };
        });

        setAlbums(processed);
      }

      setLoading(false);
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <p className="text-white">Loading albums...</p>;
  }

  if (albums.length === 0) {
    return <p className="text-white">No albums found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Albums;
