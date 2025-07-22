import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


const greetings = [
  "Hello", "Hola", "Bonjour", "नमस्ते", "Ciao", "こんにちは", "안녕하세요", "Olá", "مرحبا", "Hallo"
];

const PageLoader = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentGreeting = greetings[index % greetings.length];
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentGreeting.slice(0, prev.length - 1)
          : currentGreeting.slice(0, prev.length + 1)
      );

      if (!isDeleting && text === currentGreeting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div
      className={cn(
        "h-screen w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden",
        "bg-gradient-to-br from-orange-500 via-black to-orange-900"
      )}
    >
      {/* Background noise overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-noise opacity-[0.03]" />
      </div>

      {/* Logo */}
  <motion.img
  src="/logo.webp" // ✅ access from public folder
  alt="logo"
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10"
/>

      {/* Typewriter Animated Text */}
      <motion.h1
        key={text}
        className="font-bold text-3xl md:text-4xl text-white mt-8 relative z-10 font-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default PageLoader;
