import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Bride-to-be',
    text: 'Nikki did my bridal nails and they were absolutely perfect. The attention to detail and the luxurious experience made me feel so special.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Regular Client',
    text: 'I’ve been coming here for 6 months and my natural nails have never been healthier. The gel polish lasts a full 3 weeks without chipping!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Alba',
    role: 'Influencer',
    text: 'The most Instagram-worthy nail studio in the city. Every design is a masterpiece. Highly recommend the 3D nail art!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Client Love</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Don't just take our word for it. See what our beautiful clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-text font-serif text-xl mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-text font-medium">{review.name}</h4>
                  <p className="text-xs text-muted uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
