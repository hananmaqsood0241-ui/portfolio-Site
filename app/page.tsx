import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIOffer from '@/components/WhatIOffer';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyHireMe from '@/components/WhyHireMe';
import Tools from '@/components/Tools';
import Results from '@/components/Results';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AvailabilityBadge from '@/components/AvailabilityBadge';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhatIOffer />
      <Services />
      <Process />
      <WhyHireMe />
      <Tools />
      <Results />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <AvailabilityBadge />
    </main>
  );
}
