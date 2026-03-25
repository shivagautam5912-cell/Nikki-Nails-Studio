import { motion } from 'motion/react';
import { Award, Sparkles, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Professional Artists',
    description: 'Our certified nail technicians are masters of their craft, ensuring flawless results every time.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: 'Trending Designs',
    description: 'From classic French tips to the latest 3D art, we stay ahead of the beauty curve.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Hygiene & Safety',
    description: 'We adhere to the highest sanitation standards. All tools are medically sterilized.',
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: 'Long-Lasting Quality',
    description: 'Using premium products guarantees a chip-free, brilliant finish that lasts weeks.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Why Choose Nikki Nails</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Experience the difference of a truly premium nail studio where artistry meets luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-text mb-3">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
