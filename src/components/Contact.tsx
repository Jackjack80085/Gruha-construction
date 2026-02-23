import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Call Us</p>
                    <p className="text-xl font-serif text-brand-primary">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Email Us</p>
                    <p className="text-xl font-serif text-brand-primary">hello@gruha.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Visit Us</p>
                    <p className="text-xl font-serif text-brand-primary">Indiranagar, 100 Feet Road <br />Bangalore, KA 560038</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form - Large Overlapping Card */}
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-primary p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">Subject</label>
                      <select className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all appearance-none">
                        <option className="bg-brand-primary">Interior Design Inquiry</option>
                        <option className="bg-brand-primary">Architectural Project</option>
                        <option className="bg-brand-primary">Commercial Space</option>
                        <option className="bg-brand-primary">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your dream project..."
                        className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: '#D4AF37', 
                        color: '#121212',
                        boxShadow: '0 20px 40px -10px rgba(212,175,55,0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-brand-secondary text-brand-secondary py-6 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500"
                    >
                      Send Inquiry
                      <Send size={18} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-secondary/20"
                    >
                      <CheckCircle2 size={48} className="text-brand-primary" />
                    </motion.div>
                    <h3 className="text-4xl font-serif text-white mb-4">Inquiry Received.</h3>
                    <p className="text-brand-accent/60 text-lg max-w-sm mx-auto mb-12">
                      Thank you for reaching out. Our design consultants will contact you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: 1.05, color: '#D4AF37' }}
                      className="text-brand-accent/40 uppercase tracking-widest text-xs font-bold border-b border-white/10 pb-2 hover:border-brand-secondary transition-all"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
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
