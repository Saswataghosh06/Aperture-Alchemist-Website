import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import GlassCard from '../components/atoms/GlassCard';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-left max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <GradientText variant="fade">Let's</GradientText>
              <br />
              <span className="text-white">Collaborate</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-light max-w-3xl">
              Ready to bring your vision to life? Get in touch and let's create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors" 
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors" 
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors" 
                  />
                  <select className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white focus:border-primary focus:outline-none transition-colors">
                    <option value="" className="bg-background text-white">Select Service</option>
                    <option value="video" className="bg-background text-white">Video Production</option>
                    <option value="photo" className="bg-background text-white">Photography</option>
                    <option value="marketing" className="bg-background text-white">Marketing</option>
                    <option value="other" className="bg-background text-white">Other</option>
                  </select>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none resize-none transition-colors"
                  ></textarea>
                  <AnimatedButton size="lg" className="w-full">
                    Send Message
                  </AnimatedButton>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <GlassCard className="p-6" hover delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-white/80">hello@aperturealchemist.com</p>
                    <p className="text-white/80">projects@aperturealchemist.com</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6" hover delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                    <p className="text-white/80">+1 (555) 987-6543</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6" hover delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-white/80">47 Adarsha Nagar<br />Kolkata-700105</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6" hover delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-white/80">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
