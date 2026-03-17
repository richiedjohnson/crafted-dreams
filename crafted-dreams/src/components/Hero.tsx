interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section
      id="hero"
      className="snap-section"
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background: hero.png with chiaroscuro treatment */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Dark gradient overlay — matches inspiration: from-black/80 via-black/20 to-background-dark */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 45%, #0A0A0B 100%)',
          zIndex: 1,
        }} />
        <img
          src="/hero_image.png"
          alt="Dramatic dark gold jewelry photography"
          className="chiaroscuro-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.1)',
            filter: 'contrast(1.2) brightness(0.8) saturate(0.8) drop-shadow(0 0 15px rgba(224,182,41,0.3))',
          }}
        />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <span style={{
          fontSize: '10px',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: '#e0b629',
          marginBottom: '2rem',
          display: 'block',
          opacity: 0.8,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
        }}>
          The Nocturne Collection
        </span>

        <h1
          className="display-serif"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            marginBottom: '3rem',
            mixBlendMode: 'difference',
          }}
        >
          Eclipse <br />In Gold
        </h1>

        <button
          onClick={onExplore}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2.5rem',
            border: '1px solid rgba(224,182,41,0.3)',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'border-color 500ms ease',
            overflow: 'hidden',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#e0b629')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(224,182,41,0.3)')}
        >
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: '#e0b629',
            fontFamily: 'Inter, sans-serif',
          }}>
            Explore Collection
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        opacity: 0.4,
        animation: 'bounce 2s ease-in-out infinite',
        cursor: 'pointer',
      }} onClick={onExplore}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
