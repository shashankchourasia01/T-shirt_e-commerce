import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../Products/ProductCard';
import { newArrivalsData } from '../../data/newArrivalsData';

const NewArrivals = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff',
      paddingTop: '4px',
      paddingBottom: '28px'
    }}>
      <div style={{
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}>
        
        {/* Heading Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1a1a1a',
            letterSpacing: '-0.5px'
          }}>
            NEW <span style={{ color: '#00C853' }}>ARRIVALS</span>
          </h2>
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #00C853, #2196F3)',
            marginTop: '4px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }} />
        </div>

        {/* Scroll Buttons - Desktop only */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => scroll('left')}
            style={{
              padding: '10px',
              backgroundColor: '#f5f5f5',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          >
            <ChevronLeft size={20} color="#333" />
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              padding: '10px',
              backgroundColor: '#f5f5f5',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          >
            <ChevronRight size={20} color="#333" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '16px',
            scrollBehavior: 'smooth',
            paddingBottom: '16px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'thin'
          }}
          className="scrollbar-custom"
        >
          {newArrivalsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Scroll Hint - Mobile only */}
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'block'
        }}>
          <p style={{
            fontSize: '12px',
            color: '#999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span>←</span> Scroll to see more <span>→</span>
          </p>
        </div>
      </div>

      {/* Custom Scrollbar Styles - Add to index.css */}
      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
      `}</style>
    </div>
  );
};

export default NewArrivals;