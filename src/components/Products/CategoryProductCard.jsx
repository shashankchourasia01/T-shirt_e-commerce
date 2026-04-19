import { Heart } from 'lucide-react';

const CategoryProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/400x500/1a1a1a/FFFFFF/png?text=${product.name.substring(0, 8)}`;
  };

  return (
    <div style={{ backgroundColor: '#fff', cursor: 'pointer', width: '100%' }}>

      {/* Image */}
      <div style={{
        position: 'relative',
        aspectRatio: '3 / 4',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        borderRadius: '8px',
      }}>
        {/* Discount badge */}
        {product.discount && (
          <span style={{
            position: 'absolute', top: '8px', left: '8px',
            backgroundColor: '#e53935', color: '#fff',
            fontSize: '10px', fontWeight: 700,
            padding: '2px 7px', borderRadius: '20px', zIndex: 10,
          }}>
            -{product.discount}%
          </span>
        )}

        {/* Fit tag on image bottom */}
        {product.tag && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            backgroundColor: 'rgba(0,0,0,0.72)',
            color: '#fff', fontSize: '9px', fontWeight: 700,
            letterSpacing: '1px', padding: '5px 8px',
            textAlign: 'center',
          }}>
            {product.tag}
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '8px 2px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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

        {/* Heart */}
        <button
          style={{
            padding: '4px', border: 'none', background: 'none',
            cursor: 'pointer', flexShrink: 0, marginTop: '2px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={16} color="#9ca3af" />
        </button>
      </div>
    </div>
  );
};

export default CategoryProductCard;