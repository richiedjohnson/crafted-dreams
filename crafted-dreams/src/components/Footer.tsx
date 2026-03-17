const Footer = () => (
  <footer
    className="snap-section"
    style={{
      backgroundColor: '#0A0A0B',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 5rem) 2rem',
      overflowY: 'auto',
    }}
  >
    {/* Main grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '3rem',
      marginBottom: '4rem',
    }}
      className="footer-grid"
    >
      {/* Brand */}
      <div>
        <h2 className="display-serif" style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '1.25rem',
        }}>
          Crafted<br />Dreams
        </h2>
        <p style={{
          fontSize: '9px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          lineHeight: 1.9,
          maxWidth: '300px',
          fontFamily: 'Inter, sans-serif',
        }}>
          Baubles for the modern muse
        </p>
      </div>

      {/* Explore */}
      {[
        { heading: 'Explore', links: ['Collections', 'Bespoke', 'Journal'] },
        { heading: 'Social', links: ['Instagram', 'Pinterest'] },
        { heading: 'Legal', links: ['Privacy', 'Terms'] },
      ].map(col => (
        <div key={col.heading}>
          <p style={{
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#e0b629',
            marginBottom: '1.75rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}>
            {col.heading}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {col.links.map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  transition: 'color 300ms',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e0b629')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      paddingTop: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
    }}>
      {['© 2024 Crafted Dreams Artifacts', 'Handcrafted With Intent'].map(text => (
        <span
          key={text}
          style={{
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {text}
        </span>
      ))}
    </div>

    <style>{`
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 500px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
