import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-text mb-8 leading-tight">
            Because Your Nails <br />
            <span className="italic text-accent">Deserve Perfection</span>
          </h2>
          <p className="text-muted text-xl mb-12 max-w-2xl mx-auto font-light">
            Step into our studio and let us transform your nails into a work of art.
          </p>
          <a
            href="#booking"
            className="inline-block bg-text text-primary px-12 py-5 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book Your Slot Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
