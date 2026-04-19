//new arrivals code
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../Products/ProductCard';
import { newArrivalsData } from '../../data/newArrivalsData';

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>

        {/* Heading Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(18px, 5vw, 26px)',
              fontWeight: 800,
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.3px',
            }}>
              NEW <span style={{
                background: 'linear-gradient(to right, #16a34a, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>ARRIVALS</span>
            </h2>
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #16a34a, #2563eb)',
              borderRadius: '9999px',
              marginTop: '6px',
            }} />
          </div>

          {/* Scroll Arrows — desktop */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { dir: 'left', Icon: ChevronLeft },
              { dir: 'right', Icon: ChevronRight },
            ].map(({ dir, Icon }) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '9999px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
              >
                <Icon size={18} color="#374151" />
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateRows: '1fr',
            gridAutoColumns: 'calc(50% - 6px)',   // 2 cards mobile
            gap: '12px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '12px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          className="hide-scrollbar"
        >
          {newArrivalsData.map((product) => (
            <div
              key={product.id}
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Scroll hint mobile */}
        <p style={{
          textAlign: 'center',
          fontSize: '11px',
          color: '#d1d5db',
          marginTop: '12px',
          letterSpacing: '0.5px',
        }}>
          ← swipe to see more →
        </p>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }

        @media (min-width: 640px) {
          .new-arrivals-grid {
            grid-auto-columns: calc(33.33% - 9px) !important;
          }
        }
        @media (min-width: 1024px) {
          .new-arrivals-grid {
            grid-auto-columns: calc(25% - 9px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NewArrivals;







// import { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import ProductCard from '../Products/ProductCard';
// import { newArrivalsData } from '../../data/newArrivalsData';

// const NewArrivals = () => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div style={{
//       width: '100%',
//       backgroundColor: '#ffffff',
//       paddingTop: '4px',
//       paddingBottom: '28px'
//     }}>
//       <div style={{
//         maxWidth: '1280px',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         paddingLeft: '16px',
//         paddingRight: '16px'
//       }}>
        
//         {/* Heading Section */}
//         <div style={{ textAlign: 'center', marginBottom: '32px' }}>
//           <h2 style={{
//             fontSize: '18px',
//             fontWeight: '700',
//             color: '#1a1a1a',
//             letterSpacing: '-0.5px'
//           }}>
//             NEW <span style={{ color: '#00C853' }}>ARRIVALS</span>
//           </h2>
//           <div style={{
//             width: '60px',
//             height: '3px',
//             background: 'linear-gradient(90deg, #00C853, #2196F3)',
//             marginTop: '4px',
//             marginLeft: 'auto',
//             marginRight: 'auto'
//           }} />
//         </div>

//         {/* Scroll Buttons - Desktop only */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'flex-end',
//           gap: '12px',
//           marginBottom: '20px'
//         }}>
//           <button
//             onClick={() => scroll('left')}
//             style={{
//               padding: '10px',
//               backgroundColor: '#f5f5f5',
//               border: 'none',
//               borderRadius: '50%',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s ease',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e5'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
//           >
//             <ChevronLeft size={20} color="#333" />
//           </button>
//           <button
//             onClick={() => scroll('right')}
//             style={{
//               padding: '10px',
//               backgroundColor: '#f5f5f5',
//               border: 'none',
//               borderRadius: '50%',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s ease',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e5'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
//           >
//             <ChevronRight size={20} color="#333" />
//           </button>
//         </div>

//         {/* Horizontal Scroll Container */}
//         <div
//           ref={scrollContainerRef}
//           style={{
//             display: 'flex',
//             overflowX: 'auto',
//             gap: '16px',
//             scrollBehavior: 'smooth',
//             paddingBottom: '16px',
//             msOverflowStyle: 'none',
//             scrollbarWidth: 'thin'
//           }}
//           className="scrollbar-custom"
//         >
//           {newArrivalsData.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Scroll Hint - Mobile only */}
//         <div style={{
//           textAlign: 'center',
//           marginTop: '20px',
//           display: 'block'
//         }}>
//           <p style={{
//             fontSize: '12px',
//             color: '#999',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '8px'
//           }}>
//             <span>←</span> Scroll to see more <span>→</span>
//           </p>
//         </div>
//       </div>

//       {/* Custom Scrollbar Styles - Add to index.css */}
//       <style>{`
//         .scrollbar-custom::-webkit-scrollbar {
//           height: 4px;
//         }
//         .scrollbar-custom::-webkit-scrollbar-track {
//           background: #f0f0f0;
//           border-radius: 10px;
//         }
//         .scrollbar-custom::-webkit-scrollbar-thumb {
//           background: #ccc;
//           border-radius: 10px;
//         }
//         .scrollbar-custom::-webkit-scrollbar-thumb:hover {
//           background: #aaa;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NewArrivals;