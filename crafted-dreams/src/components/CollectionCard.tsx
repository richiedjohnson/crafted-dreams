export interface CollectionItem {
  id: number;
  label: string;
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  outOfStock?: boolean;
}

interface CollectionCardProps {
  item: CollectionItem;
}

const CollectionCard = ({ item }: CollectionCardProps) => {
  const isReversed = item.reversed ?? false;

  const ImagePanel = (
    <div
      style={{
        width: '50%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
      className="image-panel group"
    >
      <img
        src={item.image}
        alt={item.imageAlt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'contrast(1.2) brightness(0.8) saturate(0.8)',
          transition: 'transform 3s cubic-bezier(0.16, 1, 0.3, 1)',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
        className="card-img"
      />
      {/* Radial smoke overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.4) 100%)',
        mixBlendMode: 'overlay',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      {/* Edge gradient bleed into text panel */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isReversed
          ? 'linear-gradient(to left, rgba(10,10,11,0.6) 0%, transparent 60%)'
          : 'linear-gradient(to right, rgba(10,10,11,0.6) 0%, transparent 60%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      {/* Out of stock pill — bottom right of image */}
      {item.outOfStock && (
        <div style={{
          position: 'absolute',
          bottom: '1.25rem',
          right: '1.25rem',
          backgroundColor: '#991B1B',
          borderRadius: '999px',
          zIndex: 4,
          padding: '6px 16px',
          pointerEvents: 'none',
        }}>
          <span style={{
            fontSize: '9px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}>
            Out of Stock
          </span>
        </div>
      )}
    </div>
  );

  const TextPanel = (
    <div
      style={{
        width: '50%',
        height: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(2rem, 6vw, 6rem)',
        backgroundColor: '#0A0A0B',
        zIndex: 20,
        position: 'relative',
      }}
    >
      <span style={{
        fontSize: '9px',
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        color: '#8E8E93',
        marginBottom: '1rem',
        display: 'block',
        fontFamily: 'Inter, sans-serif',
      }}>
        {item.label}
      </span>

      <h2
        className="display-serif"
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 4rem)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          lineHeight: 1,
          letterSpacing: '-0.01em',
        }}
      >
        {item.title}
      </h2>

      <p style={{
        color: '#8E8E93',
        fontSize: '0.875rem',
        lineHeight: 1.75,
        marginBottom: '2rem',
        maxWidth: '28rem',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 300,
      }}>
        {item.description}
      </p>

      <span style={{
        fontSize: '1.5rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        color: item.outOfStock ? '#8E8E93' : '#e0b629',
        fontFamily: 'Inter, sans-serif',
        textDecoration: item.outOfStock ? 'line-through' : 'none',
        opacity: item.outOfStock ? 0.5 : 1,
      }}>
        {item.price}
      </span>
    </div>
  );

  return (
    <article
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: isReversed ? 'row-reverse' : 'row',
        width: '100%',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
      }}
    >
      {ImagePanel}
      {TextPanel}

      <style>{`
        .image-panel:hover .card-img {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          article.snap-section {
            flex-direction: column !important;
          }
          article.snap-section .image-panel,
          article.snap-section > div {
            width: 100% !important;
            height: 50% !important;
          }
        }
      `}</style>
    </article>
  );
};

export default CollectionCard;
