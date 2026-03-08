import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Tools from '@/components/Tools';
import Results from '@/components/Results';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Results />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
