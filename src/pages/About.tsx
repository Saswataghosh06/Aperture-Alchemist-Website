import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/atoms/GradientText';
import GlassCard from '../components/atoms/GlassCard';
import StatCounter from '../components/atoms/StatCounter';
import TestimonialCarousel from '../components/molecules/TestimonialCarousel';
import FAQ from '../components/molecules/FAQ';
import AnimatedButton from '../components/atoms/AnimatedButton';
import { Award, Heart, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Zap,
      title: "Creativity",
      description: "We push creative boundaries to deliver unique and innovative visual solutions that stand out in the crowded digital landscape."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Excellence is our standard. Every project receives meticulous attention to detail and professional-grade production values."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in true partnership, working closely with our clients to ensure their vision comes to life exactly as imagined."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication, transparent processes, and ethical practices form the foundation of every client relationship."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded as Creative Studio",
      description: "Started as a passionate group of creatives with a vision to revolutionize visual storytelling"
    },
    {
      year: "2024",
      title: "CineMasters Excellence Award",
      description: "Recognized for outstanding cinematography in commercial production"
    },
    {
      year: "2024", 
      title: "ReelGenius Award",
      description: "Honored for innovative approach to brand storytelling"
    },
    {
      year: "2024",
      title: "Visionary Creations Award", 
      description: "Celebrated for pushing creative boundaries in video production"
    }
  ];

  const teamImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80"
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <GradientText variant="fade">About</GradientText>
              <br />
              <span className="text-white">Us</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-light max-w-4xl">
              Crafting cinematic experiences that transform brands and captivate audiences through the power of visual storytelling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Story
            </h2>
            <div className="text-lg md:text-xl text-white/80 leading-relaxed space-y-6">
              <p>
                Aperture Alchemist was born from a simple belief: that every brand has a unique story 
                waiting to be told through the magic of cinema. What started as a passionate group of 
                creatives in 2023 has evolved into a full-service production house dedicated to 
                transforming ideas into visual masterpieces.
              </p>
              <p>
                We don't just create videos – we craft experiences. Each project is an opportunity 
                to push creative boundaries, explore new storytelling techniques, and deliver content 
                that not only looks stunning but drives real business results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <StatCounter 
              value={2}
              suffix="+"
              label="Years of Experience"
              delay={0}
            />
            <StatCounter 
              value={10}
              suffix="+"
              label="Repeated Clients"
              delay={0.2}
            />
            <StatCounter 
              value={25}
              suffix="+"
              label="Completed Projects"
              delay={0.4}
            />
            <StatCounter 
              value={11}
              suffix="+"
              label="Happy Clients"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Mission & Team Card */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-white/90 leading-relaxed italic">
                  "We're the storytellers, visionaries, and creative dreamers who turn your ideas 
                  into cinematic adventures. With us, work feels like play, and every project is 
                  a chance to make magic happen."
                </p>
              </div>

              {/* Sliding Images */}
              <motion.div
                className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex gap-4 h-full animate-[slide-in-right_20s_linear_infinite]">
                  {[...teamImages, ...teamImages].map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-64 h-full">
                      <img 
                        src={image}
                        alt={`Team member ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-glass-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-glass-background to-transparent z-10" />
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Core Values
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our relationships with clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-full flex items-center justify-center text-primary">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              How We Work
            </h2>
          </motion.div>

          <GlassCard className="max-w-4xl mx-auto text-center p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Making Work Feel Like Magic
            </h3>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We're the team that turns 'work' into 'wow,' and we do it with smiles, laughter, 
              and a touch of video wizardry. Our collaborative approach ensures that every project 
              is not just a task to complete, but an adventure to embark upon together.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              From the initial brainstorm to the final cut, we maintain an atmosphere of creativity, 
              professionalism, and fun that makes the entire process as enjoyable as the end result.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Why Choose Us
            </h2>
          </motion.div>

          <GlassCard className="max-w-4xl mx-auto text-center p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The "Wow" and "Wow Again" Factor
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              People hire us not just because we're good at what we do (spoiler: we are!), 
              but because we bring the 'wow' and 'wow again' to every project. Our commitment 
              to excellence, combined with our passion for storytelling, ensures that your 
              investment delivers not just beautiful visuals, but measurable results that 
              drive your business forward.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Journey
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Key milestones and achievements that mark our growth and recognition in the industry
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary h-full opacity-30"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <GlassCard>
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </GlassCard>
                  </div>
                  
                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client Stories
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Hear from our clients about their experience working with us
            </p>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="max-w-4xl mx-auto text-center p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-white">Ready to </span>
                <GradientText variant="primary">Start</GradientText>
                <span className="text-white"> Your Story?</span>
              </h2>
              <p className="text-white/80 text-xl mb-8">
                Let's collaborate and create something extraordinary together
              </p>
              <AnimatedButton size="lg" href="/contact">
                Let's Collaborate
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;