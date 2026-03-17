import { useEffect, useState } from 'react';

interface NavbarProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar = ({ scrollContainerRef }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const handleScroll = () => setScrolled(el.scrollTop > 60);
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  const scrollToSection = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const sections = el.querySelectorAll('.snap-section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinkStyle: React.CSSProperties = {
    fontSize: '10px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'rgba(244,244,245,0.7)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    transition: 'color 300ms',
    padding: 0,
  };

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 500ms ease, border-color 500ms ease',
          backgroundColor: scrolled ? 'rgba(10,10,11,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        {/* Desktop layout: single row — links | logo | spacer */}
        <div className="nav-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 3rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flex: 1, paddingRight: '2rem' }}>
            {[{ label: 'COLLECTIONS', idx: 1 }, { label: 'ABOUT', idx: 8 }].map(({ label, idx }) => (
              <button
                key={label}
                onClick={() => scrollToSection(idx)}
                style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#e0b629')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,244,245,0.7)')}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection(0)}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#F4F4F5',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            Crafted Dreams
          </button>

          <div style={{ flex: 1 }} />
        </div>

        {/* Mobile layout: logo on top row, links below */}
        <div className="nav-mobile" style={{ padding: '1rem 1.5rem 0.75rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '0.625rem' }}>
            <button
              onClick={() => scrollToSection(0)}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#F4F4F5',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Crafted Dreams
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            {[{ label: 'COLLECTIONS', idx: 1 }, { label: 'ABOUT', idx: 8 }].map(({ label, idx }) => (
              <button
                key={label}
                onClick={() => scrollToSection(idx)}
                style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#e0b629')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,244,245,0.7)')}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 600px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
