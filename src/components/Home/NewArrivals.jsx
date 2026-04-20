import ProductCard from '../Products/ProductCard';
import { newArrivalsData } from '../../data/newArrivalsData';

const NewArrivals = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff', paddingTop: '10px', paddingBottom: '20px' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>

        {/* Heading */}
        {/* Heading */}
<div style={{ marginBottom: '20px' }}>
  <h2 style={{
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 'clamp(20px, 5.5vw, 30px)',
    fontWeight: 800,
    color: '#111827',
    margin: 0,
    letterSpacing: '-0.5px',
    lineHeight: 1.15,
  }}>
    NEW{' '}
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
      ARRIVALS
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

        {/* 2-column vertical grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            width: '100%',
            boxSizing: 'border-box',
          }}
          className="new-arrivals-grid"
        >
          {newArrivalsData.map((product) => (
            <div key={product.id} style={{ minWidth: 0, boxSizing: 'border-box' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 640px) {
          .new-arrivals-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .new-arrivals-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (min-width: 1280px) {
          .new-arrivals-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NewArrivals;