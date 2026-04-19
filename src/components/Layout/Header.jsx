import { useState } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
      }}>
        <div style={{ paddingLeft: '16px', paddingRight: '16px', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', position: 'relative' }}>

            {/* Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              style={{
                padding: '8px',
                marginLeft: '-8px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Menu size={22} color="#1f2937" />
            </button>

            {/* Logo - centered absolutely */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              pointerEvents: 'none',
            }}>
              <a href="/" style={{ display: 'block', textDecoration: 'none', pointerEvents: 'auto' }}>
                <h1 style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(15px, 4vw, 20px)',
                  letterSpacing: '-0.5px',
                  margin: 0,
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ color: '#111827' }}>THE </span>
                  <span style={{
                    background: 'linear-gradient(to right, #16a34a, #2563eb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>SHOE</span>
                  <span style={{ color: '#111827' }}> LEX</span>
                </h1>
                <p style={{
                  fontSize: '8px',
                  color: '#9ca3af',
                  letterSpacing: '2px',
                  marginTop: '-2px',
                  margin: 0,
                  fontFamily: '"Inter", sans-serif',
                }}>
                  POP CULTURE APPAREL
                </p>
              </a>
            </div>

            {/* Right Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <button style={{
                padding: '8px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Search size={20} color="#374151" />
              </button>

              <button style={{
                padding: '8px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <ShoppingBag size={20} color="#374151" />
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  backgroundColor: '#f97316',
                  color: 'white',
                  fontSize: '9px',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  height: '16px',
                  width: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}>
                  0
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;