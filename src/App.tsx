import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import Offers from './components/Offers';
import Booking from './components/Booking';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Features />
        <Testimonials />
        <SocialProof />
        <Offers />
        <Booking />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
