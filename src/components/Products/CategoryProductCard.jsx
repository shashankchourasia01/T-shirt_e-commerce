import { Heart } from 'lucide-react';

const CategoryProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/400x500/1a1a1a/FFFFFF/png?text=${product.name.substring(0, 8)}`;
  };

  return (
    <div style={{ backgroundColor: '#fff', cursor: 'pointer', width: '100%', boxSizing: 'border-box' }}>

      {/* Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '125%', // fixed 4:5 ratio — har card same height
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        borderRadius: '8px',
      }}>
        {product.discount && (
          <span style={{
            position: 'absolute', top: '8px', left: '8px',
            backgroundColor: '#e53935', color: '#fff',
            fontSize: '10px', fontWeight: 700,
            padding: '3px 8px', borderRadius: '20px', zIndex: 10,
          }}>
            -{product.discount}%
          </span>
        )}

        {product.tag && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#fff', fontSize: '9px', fontWeight: 700,
            letterSpacing: '1.5px', padding: '6px 8px',
            textAlign: 'center', zIndex: 10,
          }}>
            {product.tag}
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Info */}
      <div style={{
        padding: '8px 2px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <div style={{ flex: 1, minWidth: 0, paddingRight: '4px' }}>
          <p style={{
            fontSize: '13px', fontWeight: 600, color: '#111827',
            margin: '0 0 2px', lineHeight: 1.3,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {product.name}
          </p>
          <p style={{
            fontSize: '10px', color: '#9ca3af', margin: '0 0 5px',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {product.type}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '11px', color: '#9ca3af', textDecoration: 'line-through' }}>
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <button
          style={{
            padding: '4px', border: 'none', background: 'none',
            cursor: 'pointer', flexShrink: 0, marginTop: '2px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={15} color="#9ca3af" />
        </button>
      </div>
    </div>
  );
};

export default CategoryProductCard;