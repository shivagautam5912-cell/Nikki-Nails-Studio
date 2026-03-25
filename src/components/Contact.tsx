import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Visit Our Studio</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Located in the heart of the city, our studio offers a serene escape for your beauty needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mr-6 shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text mb-2">Location</h4>
                <p className="text-muted leading-relaxed">
                  123 Luxury Avenue, Suite 4B<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mr-6 shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text mb-2">Phone</h4>
                <p className="text-muted leading-relaxed">
                  (555) 123-4567<br />
                  Mon-Sat, 10am - 8pm
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mr-6 shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-text mb-2">Email</h4>
                <p className="text-muted leading-relaxed">
                  hello@nikkinails.com<br />
                  For press & collaborations
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-[#128C7E] transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-secondary/20"
          >
            {/* Placeholder for Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.305600642152!2d-118.4024766847843!3d34.08726998059632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d3d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nikki Nails Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
