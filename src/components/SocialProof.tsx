import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=600&auto=format&fit=crop', likes: 342, comments: 12 },
  { id: 2, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop', likes: 512, comments: 28 },
  { id: 3, image: 'https://images.unsplash.com/photo-1595868669641-54738c82a510?q=80&w=600&auto=format&fit=crop', likes: 289, comments: 8 },
  { id: 4, image: 'https://images.unsplash.com/photo-1632804533038-086395e86d0b?q=80&w=600&auto=format&fit=crop', likes: 421, comments: 19 },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-secondary/30 rounded-full mb-6 text-accent">
            <Instagram className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Join Our Community</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg mb-6">
            Follow us on Instagram for daily inspiration, behind-the-scenes, and exclusive offers.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-accent font-semibold text-lg hover:text-text transition-colors"
          >
            #NikkiNailsStudio
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-primary rounded-xl cursor-pointer"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                <div className="flex items-center text-white font-semibold">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  {post.likes}
                </div>
                <div className="flex items-center text-white font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2 fill-current" />
                  {post.comments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-text text-text px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-text hover:text-primary transition-colors duration-300"
          >
            Follow @NikkiNails
          </a>
        </div>
      </div>
    </section>
  );
}
