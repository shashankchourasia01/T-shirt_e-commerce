import { useState } from 'react';
import CategoryProductCard from '../Products/CategoryProductCard';
import { categories, productsByCategory } from '../../data/allSectionsData';

const AllSections = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const currentProducts = productsByCategory[activeCategory] || [];

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', paddingTop: '40px', paddingBottom: '48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>

        {/* Category Pills */}
        <div
          className="categories-scroll"
          style={{
            display: 'flex', gap: '8px',
            overflowX: 'auto', paddingBottom: '4px',
            marginBottom: '24px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              style={{
                padding: '9px 18px',
                backgroundColor: activeCategory === cat.slug ? '#111827' : '#f3f4f6',
                color: activeCategory === cat.slug ? '#fff' : '#4b5563',
                border: activeCategory === cat.slug ? 'none' : '1px solid #e5e7eb',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: activeCategory === cat.slug ? 700 : 500,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.2s',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Section title */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{
            fontSize: 'clamp(18px, 5vw, 24px)',
            fontWeight: 800, color: '#111827',
            margin: 0, letterSpacing: '-0.3px',
          }}>
            {categories.find(c => c.slug === activeCategory)?.name}
            {' '}<span style={{
              background: 'linear-gradient(to right, #16a34a, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>COLLECTION</span>
          </h2>
          <div style={{
            width: '36px', height: '3px',
            background: 'linear-gradient(to right, #16a34a, #2563eb)',
            borderRadius: '9999px', marginTop: '6px',
          }} />
        </div>

        {/* 2-column grid — all products */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}
          className="all-sections-grid"
        >
          {currentProducts.map((product) => (
            <CategoryProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      <style>{`
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