import { useRef } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const el = containerRef.current;
    if (!el) return;
    // Scroll to the first collection card (section index 1)
    const sections = el.querySelectorAll('.snap-section');
    sections[1]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed navbar overlays the scroll container */}
      <Navbar scrollContainerRef={containerRef} />

      {/* Scroll-snap container */}
      <div
        ref={containerRef}
        className="snap-container"
        style={{ position: 'relative' }}
      >
        <Hero onExplore={scrollToNext} />
        <Collections />
        <AboutContact />
        <Footer />
      </div>
    </>
  );
}

export default App;
