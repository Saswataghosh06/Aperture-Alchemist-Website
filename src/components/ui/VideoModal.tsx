import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const getEmbedUrl = (url: string): string => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.includes('watch?v=') ? url.split('watch?v=')[1] : url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/(.*?)\//);
    const fileId = match ? match[1] : null;
    return fileId
      ? `https://drive.google.com/file/d/${fileId}/preview`
      : url.replace('/view', '/preview');
  }

  return url; // fallback (e.g., .mp4)
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  const embedUrl = getEmbedUrl(videoUrl);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-5xl rounded-lg overflow-hidden bg-black"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 text-white hover:text-red-500 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Video Preview */}
          {embedUrl.endsWith('.mp4') ? (
            <video
              src={embedUrl}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          ) : (
            <iframe
              src={embedUrl}
              className="w-full aspect-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Project Preview"
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
