import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import AnimatedButton from '../atoms/AnimatedButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/aperturealchemistofficial?igsh=MWdvdzRkMWN0ZTBseA== ', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/ApertureAlchem', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/aperture-alchemist-snu/posts/?feedView=all', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/albums', label: 'Albums' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-background border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}logo.webp`}
                alt="Aperture Alchemist"
                className="h-24 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              We're your creative storytellers, transforming ideas into cinematic experiences 
              that captivate audiences and drive results.
            </p>
            
            {/* CTA Section */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Ready to create something amazing?
              </h3>
              <AnimatedButton to="/contact" className="w-full sm:w-auto">
                Let's Collaborate
              </AnimatedButton>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5" />
                <span>aperturealchemistofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+91 9123332011</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-white/80">
              <li>Corporate Video</li>
              <li>Commercial Production</li>
              <li>Documentary Film</li>
              <li>Product Photography</li>
              <li>Event Coverage</li>
              <li>Social Media Content</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 py-8 border-y border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="glass-card-hover p-3 rounded-full text-white/80 hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-white/60">
            © {currentYear} Aperture Alchemist. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
