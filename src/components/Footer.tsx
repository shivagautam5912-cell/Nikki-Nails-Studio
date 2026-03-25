import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-primary/20 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif mb-6">NIKKI NAILS</h3>
            <p className="text-primary/70 max-w-sm mb-8 leading-relaxed">
              Where nails meet art. We believe in providing a luxurious, relaxing experience while delivering flawless, long-lasting results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary/70 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-primary/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-primary/70 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#reviews" className="text-primary/70 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-primary/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6 text-accent">Newsletter</h4>
            <p className="text-primary/70 text-sm mb-4">Subscribe for exclusive offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-primary/10 border border-primary/20 px-4 py-2 w-full focus:outline-none focus:border-accent text-sm"
              />
              <button
                type="submit"
                className="bg-accent text-text px-4 py-2 text-sm uppercase tracking-wider font-semibold hover:bg-white transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-primary/50">
          <p>&copy; {new Date().getFullYear()} Nikki Nails Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
