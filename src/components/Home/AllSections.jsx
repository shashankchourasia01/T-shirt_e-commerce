import { useState } from 'react';
import CategoryProductCard from '../Products/CategoryProductCard';
import { categories, productsByCategory } from '../../data/allSectionsData';

const AllSections = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const currentProducts = productsByCategory[activeCategory] || [];

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', paddingTop: '30px', paddingBottom: '48px' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
        // KEY FIX: overflow hidden so nothing bleeds out
        overflow: 'hidden',
      }}>

        {/* Category Pills */}
        <div
          className="categories-scroll"
          style={{
            display: 'flex', gap: '8px',
            overflowX: 'auto', paddingBottom: '6px',
            marginBottom: '24px',
            // prevent pills from stretching container
            width: '100%',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              style={{
                padding: '9px 16px',
                backgroundColor: activeCategory === cat.slug ? '#111827' : '#f3f4f6',
                color: activeCategory === cat.slug ? '#fff' : '#4b5563',
                border: activeCategory === cat.slug ? 'none' : '1px solid #e5e7eb',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: activeCategory === cat.slug ? 700 : 500,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Section Title */}
        {/* Section Title */}
<div style={{ marginBottom: '16px' }}>
  <h2 style={{
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 'clamp(20px, 5.5vw, 30px)',
    fontWeight: 800,
    color: '#111827',
    margin: 0,
    letterSpacing: '-0.5px',
    lineHeight: 1.15,
  }}>
    {categories.find(c => c.slug === activeCategory)?.name}
    {' '}
    <span style={{
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 300,
      letterSpacing: '4px',
      fontSize: 'clamp(20px, 5.5vw, 30px)',
      background: 'linear-gradient(to right, #16a34a, #2563eb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      COLLECTION
    </span>
  </h2>
  <div style={{
    width: '40px',
    height: '2px',
    background: 'linear-gradient(to right, #16a34a, #2563eb)',
    borderRadius: '9999px',
    marginTop: '8px',
  }} />
</div>

        {/* Grid — KEY FIX: width 100%, no overflow */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          width: '100%',
          boxSizing: 'border-box',
        }}
          className="all-sections-grid"
        >
          {currentProducts.map((product) => (
            <div key={product.id} style={{ minWidth: 0, boxSizing: 'border-box' }}>
              <CategoryProductCard product={product} />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .categories-scroll::-webkit-scrollbar { display: none; }
        .categories-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        @media (min-width: 640px) {
          .all-sections-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .all-sections-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (min-width: 1280px) {
          .all-sections-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AllSections;