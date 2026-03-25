import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Diamond } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Nail Salon"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Luxury Nails That <br className="hidden md:block" />
            <span className="italic text-secondary">Speak Your Style</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide max-w-2xl mx-auto"
        >
          Premium nail extensions, gel polish & custom designs tailored to perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#booking"
            className="inline-block bg-secondary text-text px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-accent transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book Appointment
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-white/80"
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm tracking-wider uppercase font-medium">Certified Artist</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="text-sm tracking-wider uppercase font-medium">Hygienic Tools</span>
          </div>
          <div className="flex items-center space-x-2">
            <Diamond className="w-5 h-5 text-accent" />
            <span className="text-sm tracking-wider uppercase font-medium">Premium Products</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
