import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-brand-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Info - Asymmetrical Sidebar */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-xs mb-6 block">
                Connect With Us
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-primary leading-tight mb-12">
                Let's Start a <br />
                <span className="italic">Conversation.</span>
              </h2>
              
              <div className="space-y-12 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Call Us</p>
                    <p className="text-xl font-serif text-brand-primary">9620059933</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Email Us</p>
                    <p className="text-xl font-serif text-brand-primary">gruhaconstruction1@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Added Image for Contact Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[3rem] overflow-hidden aspect-video shadow-xl border-4 border-white/20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                  alt="Office Interior"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/10" />
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form - Embedded Google Form */}
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-primary p-0 rounded-[4rem] shadow-2xl relative overflow-hidden min-h-[700px] flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none" />
              
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc5xN7QqZLnRwjtjSoze5DD7/viewform?embedded=true"
                width="100%"
                height={700}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Gruha Constructions Contact Form"
                className="rounded-[4rem] relative z-10"
                style={{ backgroundColor: 'transparent' }}
              >
                Loading…
              </iframe>
            </motion.div>

            {/* Background Decoration */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="absolute -top-12 -right-12 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}