import { useState } from 'react';
import type { FormEvent } from 'react';

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#F4F4F5',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.875rem',
  padding: '12px 14px',
  outline: 'none',
  transition: 'border-color 300ms ease',
};

const labelStyle: React.CSSProperties = {
  fontSize: '9px',
  letterSpacing: '0.3em',
  textTransform: 'uppercase' as const,
  color: '#8E8E93',
  display: 'block',
  marginBottom: '8px',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
};

const AboutContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const getStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === field ? '#e0b629' : 'rgba(255,255,255,0.1)',
  });

  return (
    <section
      id="about"
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#0A0A0B',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      {/* Left — About */}
      <div style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(3rem, 6vw, 6rem)',
        position: 'relative',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Gold accent line */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          height: '60%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(224,182,41,0.5), transparent)',
        }} />

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
          Our Story
        </span>

        <h2 className="display-serif" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '2rem',
        }}>
          Crafted<br />Dreams
        </h2>

        <p style={{
          color: '#8E8E93',
          fontSize: '0.875rem',
          lineHeight: 1.8,
          marginBottom: '1.5rem',
          maxWidth: '420px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
        }}>
          Crafted Dreams was founded on the belief that jewelry should transcend
          decoration — that each piece should carry a story, a feeling, a memory
          worn on skin. We work only with ethically sourced gold and precious
          stones, shaped by artisans who understand silence as much as craft.
        </p>

        <p style={{
          color: '#8E8E93',
          fontSize: '0.875rem',
          lineHeight: 1.8,
          maxWidth: '420px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
        }}>
          Every artifact is made to order. Every curve deliberate. We do not
          believe in abundance — we believe in the singular, enduring object that
          outlasts fashion and becomes legend.
        </p>

        <div style={{
          width: '40px',
          height: '1px',
          backgroundColor: '#e0b629',
          marginTop: '2.5rem',
          opacity: 0.6,
        }} />

        <p style={{
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '1.25rem',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.8,
        }}>
          Elevating the darkness through<br />the timeless allure of gold.
        </p>
      </div>

      {/* Right — Contact */}
      <div style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(3rem, 6vw, 6rem)',
        backgroundColor: '#141415',
      }}>
        <span style={{
          fontSize: '10px',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: '#e0b629',
          marginBottom: '1.5rem',
          display: 'block',
          opacity: 0.8,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
        }}>
          Get in Touch
        </span>

        <h3 className="display-serif" style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '0.75rem',
        }}>
          Commission a Piece
        </h3>

        <p style={{
          color: '#8E8E93',
          fontSize: '0.875rem',
          lineHeight: 1.7,
          marginBottom: '2rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
          maxWidth: '400px',
        }}>
          Tell us about the piece you envision. We respond within 48 hours to
          begin the conversation.
        </p>

        {sent ? (
          <div style={{
            padding: '2rem',
            border: '1px solid rgba(224,182,41,0.3)',
            backgroundColor: 'rgba(224,182,41,0.04)',
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#e0b629',
              letterSpacing: '0.05em',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7,
            }}>
              Your message has been received.<br />
              <span style={{ color: '#8E8E93' }}>We will be in touch shortly.</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder="Your full name"
                required
                style={getStyle('name')}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="your@email.com"
                required
                style={getStyle('email')}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder="Describe the piece you have in mind..."
                required
                rows={4}
                style={{ ...getStyle('message'), resize: 'vertical', minHeight: '110px' }}
              />
            </div>
            <button
              type="submit"
              style={{
                alignSelf: 'flex-start',
                background: '#e0b629',
                border: 'none',
                color: '#0A0A0B',
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 500,
                padding: '14px 36px',
                cursor: 'pointer',
                transition: 'background 300ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#c49a14')}
              onMouseLeave={e => (e.currentTarget.style.background = '#e0b629')}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about {
            flex-direction: column !important;
            height: auto !important;
          }
          #about > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutContact;
