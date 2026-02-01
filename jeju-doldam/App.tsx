
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Overview } from './components/Overview';
import { Principles } from './components/Principles';
import { Procedure } from './components/Procedure';
import { Solution } from './components/Solution';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-mint selection:text-black">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Overview />
        <Solution />
        <Principles />
        <Procedure />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
