import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Nail Extensions',
    description: 'Acrylic and gel extensions for length, strength, and flawless shape.',
    price: 'From $65',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Gel Polish',
    description: 'Long-lasting, chip-resistant gel polish with a high-gloss finish.',
    price: 'From $40',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Custom Nail Art',
    description: 'Intricate designs, 3D art, chrome, ombre, and hand-painted details.',
    price: 'From $15',
    image: 'https://images.unsplash.com/photo-1595868669641-54738c82a510?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Manicure & Pedicure',
    description: 'Luxury spa treatments for healthy, glowing hands and feet.',
    price: 'From $50',
    image: 'https://images.unsplash.com/photo-1632804533038-086395e86d0b?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Our Services</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Elevate your look with our premium nail services. We use only the highest quality products for lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-full aspect-[3/4] mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif text-text mb-2">{service.title}</h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between border-t border-secondary pt-4">
                  <span className="font-medium text-accent">{service.price}</span>
                  <a
                    href="#booking"
                    className="flex items-center text-xs uppercase tracking-wider font-semibold text-text hover:text-accent transition-colors"
                  >
                    Book Now <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
