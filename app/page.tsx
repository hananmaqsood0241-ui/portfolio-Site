import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyHireMe from '@/components/WhyHireMe';
import Tools from '@/components/Tools';
import Results from '@/components/Results';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AvailabilityBadge from '@/components/AvailabilityBadge';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyHireMe />
      <Tools />
      <Results />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <AvailabilityBadge />
    </main>
  );
}
