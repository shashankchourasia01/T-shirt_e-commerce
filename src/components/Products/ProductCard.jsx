import { Eye, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  // Inline styles for conditional elements
  const cardStyle = {
    width: '280px',
    flexShrink: 0,
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  };

  const imageContainerStyle = {
    position: 'relative',
    aspectRatio: '1 / 1',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden'
  };

  const discountBadgeStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '20px',
    zIndex: 10
  };

  const contentStyle = {
    padding: '16px'
  };

  const productTypeStyle = {
    fontSize: '11px',
    fontWeight: '600',
    color: '#00C853',
    letterSpacing: '1px',
    marginBottom: '8px'
  };

  const productNameStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '6px',
    lineHeight: '1.3'
  };

  const fitStyle = {
    fontSize: '12px',
    color: '#666666',
    marginBottom: '4px'
  };

  const detailStyle = {
    fontSize: '11px',
    color: '#999999',
    marginBottom: '12px'
  };

  const priceContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px'
  };

  const currentPriceStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a'
  };

  const originalPriceStyle = {
    fontSize: '13px',
    color: '#999999',
    textDecoration: 'line-through'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/400x400/1a1a1a/FFFFFF/png?text=${product.name.substring(0, 10)}`;
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image Section */}
      <div style={imageContainerStyle}>
        {product.discount && (
          <span style={discountBadgeStyle}>-{product.discount}%</span>
        )}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onError={handleImageError}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Content Section */}
      <div style={contentStyle}>
        <div style={productTypeStyle}>{product.type}</div>
        <div style={productNameStyle}>{product.name}</div>
        <div style={fitStyle}>{product.fit}</div>
        <div style={detailStyle}>{product.detail}</div>
        
        <div style={priceContainerStyle}>
          <span style={currentPriceStyle}>₹{product.price}</span>
          <span style={originalPriceStyle}>₹{product.originalPrice}</span>
        </div>

        <button 
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}
        >
          <ShoppingBag size={16} /> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;