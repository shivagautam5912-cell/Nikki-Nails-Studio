import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Scissors } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', service: '', date: '', time: '' });
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 bg-secondary/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left Side - Info */}
            <div className="md:col-span-2 bg-text text-primary p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif mb-4">Book Your Appointment</h3>
                <p className="text-primary/80 text-sm mb-8">
                  Reserve your spot for a luxurious nail experience. We recommend booking at least 2 days in advance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-accent mr-4" />
                    <span className="text-sm">Mon - Sat: 10AM - 8PM</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-4" />
                    <span className="text-sm">Sun: Closed</span>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Need Help?</p>
                <p className="text-sm">Call us: (555) 123-4567</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:col-span-3 p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-serif text-text">Booking Confirmed!</h4>
                  <p className="text-muted">We'll contact you shortly to finalize your appointment details.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-accent hover:text-text font-semibold uppercase tracking-wider text-sm transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/50" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label htmlFor="phone" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/50" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Select Service</label>
                    <div className="relative">
                      <Scissors className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/50" />
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none"
                      >
                        <option value="" disabled>Choose a service...</option>
                        <option value="extensions">Nail Extensions ($65+)</option>
                        <option value="gel">Gel Polish ($40+)</option>
                        <option value="art">Custom Nail Art ($15+)</option>
                        <option value="mani-pedi">Manicure & Pedicure ($50+)</option>
                        <option value="bridal">Bridal Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Preferred Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-text text-primary py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-accent hover:text-white transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg mt-8"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
