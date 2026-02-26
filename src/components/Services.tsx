import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="services" ref={containerRef} className="py-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-accent leading-tight"
          >
            Crafting the <span className="italic text-brand-secondary">Future</span> of Living.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={`/services#${service.id}`}
                className="group block bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary mb-6 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-accent/40 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-brand-secondary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Learn More <ArrowUpRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-3 text-brand-accent/40 uppercase tracking-[0.3em] text-[10px] font-bold border-b border-white/10 pb-2 hover:text-brand-secondary hover:border-brand-secondary transition-all"
          >
            View All Services Detailed
          </Link>
        </div>
      </div>
    </section>
  );
}
