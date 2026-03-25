import { motion } from 'motion/react';
import { Gift, Sparkles } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-24 bg-text text-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Exclusive Offers <br />
              <span className="italic text-accent">Just For You</span>
            </h2>
            <p className="text-primary/80 text-lg mb-8 max-w-lg">
              Treat yourself to luxury without compromise. Take advantage of our limited-time packages and discover the Nikki Nails difference.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-accent/20 p-3 rounded-full">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">First Visit Discount</h3>
                  <p className="text-primary/70 text-sm">Get 15% off your first set of nail extensions or gel polish.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-accent/20 p-3 rounded-full">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Bridal Package</h3>
                  <p className="text-primary/70 text-sm">Book for you and 3 bridesmaids, and the bride gets her nails done absolutely free.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4 animate-pulse">
                Limited Slots Available This Week
              </p>
              <a
                href="#booking"
                className="inline-block bg-accent text-text px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-white transition-all duration-300 shadow-lg"
              >
                Claim Offer Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-t-full border-4 border-accent/20 p-2">
              <img
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1000&auto=format&fit=crop"
                alt="Nail Offer"
                className="w-full h-full object-cover rounded-t-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-text p-6 shadow-xl rounded-lg max-w-[200px]">
              <p className="font-serif text-2xl text-accent mb-1">15% OFF</p>
              <p className="text-xs uppercase tracking-wider font-semibold">New Clients Only</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
