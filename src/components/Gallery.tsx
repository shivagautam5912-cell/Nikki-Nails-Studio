import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1595868669641-54738c82a510?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1632804533038-086395e86d0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595868669641-54738c82a510?q=80&w=800&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Our Portfolio</h2>
            <p className="text-muted text-lg">
              Explore our latest creations. From minimalist elegance to bold statement pieces, we bring your vision to life.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-sm uppercase tracking-widest font-semibold text-text hover:text-accent transition-colors mt-6 md:mt-0"
          >
            <Instagram className="w-5 h-5 mr-2" /> Follow Us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer rounded-lg"
            >
              <img
                src={src}
                alt={`Nail Art ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm uppercase tracking-widest font-semibold text-text hover:text-accent transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" /> Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
