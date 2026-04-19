// new arriavls claude code
const ProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/400x500/1a1a1a/FFFFFF/png?text=${product.name.substring(0, 10)}`;
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        aspectRatio: '3 / 4',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        borderRadius: '12px',
      }}>
        {product.discount && (
          <span style={{
            position: 'absolute',
            top: '8px', left: '8px',
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700,
            padding: '3px 7px',
            borderRadius: '20px',
            zIndex: 10,
            letterSpacing: '0.5px',
          }}>
            -{product.discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Fit badge bottom */}
        {product.type && (
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#fff',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            padding: '6px 8px',
            textAlign: 'center',
          }}>
            {product.type}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '10px 2px 4px' }}>
        <p style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#111827',
          margin: '0 0 3px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 1.3,
        }}>
          {product.name}
        </p>
        <p style={{
          fontSize: '10px',
          color: '#9ca3af',
          margin: '0 0 6px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {product.fit}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>
            ₹{product.price}
          </span>
          <span style={{ fontSize: '11px', color: '#9ca3af', textDecoration: 'line-through' }}>
            ₹{product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;







// import { Eye, ShoppingBag } from 'lucide-react';

// const ProductCard = ({ product }) => {
//   // Inline styles for conditional elements
//   const cardStyle = {
//     width: '280px',
//     flexShrink: 0,
//     backgroundColor: '#ffffff',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     cursor: 'pointer'
//   };

//   const imageContainerStyle = {
//     position: 'relative',
//     aspectRatio: '1 / 1',
//     backgroundColor: '#f5f5f5',
//     overflow: 'hidden'
//   };

//   const discountBadgeStyle = {
//     position: 'absolute',
//     top: '12px',
//     right: '12px',
//     backgroundColor: '#000000',
//     color: '#ffffff',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     padding: '4px 8px',
//     borderRadius: '20px',
//     zIndex: 10
//   };

//   const contentStyle = {
//     padding: '16px'
//   };

//   const productTypeStyle = {
//     fontSize: '11px',
//     fontWeight: '600',
//     color: '#00C853',
//     letterSpacing: '1px',
//     marginBottom: '8px'
//   };

//   const productNameStyle = {
//     fontSize: '15px',
//     fontWeight: '700',
//     color: '#1a1a1a',
//     marginBottom: '6px',
//     lineHeight: '1.3'
//   };

//   const fitStyle = {
//     fontSize: '12px',
//     color: '#666666',
//     marginBottom: '4px'
//   };

//   const detailStyle = {
//     fontSize: '11px',
//     color: '#999999',
//     marginBottom: '12px'
//   };

//   const priceContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     marginBottom: '12px'
//   };

//   const currentPriceStyle = {
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#1a1a1a'
//   };

//   const originalPriceStyle = {
//     fontSize: '13px',
//     color: '#999999',
//     textDecoration: 'line-through'
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#000000',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '30px',
//     fontSize: '13px',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease'
//   };

//   const handleImageError = (e) => {
//     e.target.src = `https://placehold.co/400x400/1a1a1a/FFFFFF/png?text=${product.name.substring(0, 10)}`;
//   };

//   return (
//     <div 
//       style={cardStyle}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'translateY(-4px)';
//         e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'translateY(0)';
//         e.currentTarget.style.boxShadow = 'none';
//       }}
//     >
//       {/* Image Section */}
//       <div style={imageContainerStyle}>
//         {product.discount && (
//           <span style={discountBadgeStyle}>-{product.discount}%</span>
//         )}
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             transition: 'transform 0.5s ease'
//           }}
//           onError={handleImageError}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)';
//           }}
//         />
//       </div>

//       {/* Content Section */}
//       <div style={contentStyle}>
//         <div style={productTypeStyle}>{product.type}</div>
//         <div style={productNameStyle}>{product.name}</div>
//         <div style={fitStyle}>{product.fit}</div>
//         <div style={detailStyle}>{product.detail}</div>
        
//         <div style={priceContainerStyle}>
//           <span style={currentPriceStyle}>₹{product.price}</span>
//           <span style={originalPriceStyle}>₹{product.originalPrice}</span>
//         </div>

//         <button 
//           style={buttonStyle}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = '#333333';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#000000';
//           }}
//         >
//           <ShoppingBag size={16} /> ADD TO CART
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;