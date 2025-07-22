import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AnimatedButton from "../atoms/AnimatedButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/albums", label: "Albums" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        <div className="mx-auto w-[95%] max-w-6xl">
          <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between relative shadow-2xl backdrop-blur-xl border border-white/20 w-full">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}logo.webp`}
                alt="Aperture Alchemist Logo"
                className="h-20 w-auto"
                loading="lazy"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block flex-shrink-0">
              <AnimatedButton to="/contact" size="sm">
                Let's Talk
              </AnimatedButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-2xl font-medium transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-white hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-8"
              >
                <AnimatedButton to="/contact" size="lg">
                  Let's Talk
                </AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
