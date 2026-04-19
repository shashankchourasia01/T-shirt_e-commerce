import { useState } from 'react';
import {
  X, User, ChevronRight, ChevronDown,
  Tag, Shirt, Flame, Heart, Package,
  LogIn, TrendingUp, Star, Truck, Shield, Zap
} from 'lucide-react';

const MobileSidebar = ({ isOpen, onClose }) => {
  const [openCategories, setOpenCategories] = useState(true);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
        />
      )}

      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        height: '100%',
        width: '82%',
        maxWidth: '340px',
        backgroundColor: 'white',
        zIndex: 50,
        overflowY: 'auto',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-out',
      }}>

        {/* Header */}
        <div style={{
          position: 'sticky', top: 0,
          backgroundColor: 'white',
          zIndex: 10,
          borderBottom: '1px solid #f3f4f6',
          padding: '18px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <h2 style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 900,
              fontSize: '17px',
              margin: 0,
              background: 'linear-gradient(to right, #16a34a, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              THE SHOE LEX
            </h2>
            <p style={{ fontSize: '8px', color: '#9ca3af', letterSpacing: '2px', margin: '2px 0 0' }}>
              POP CULTURE APPAREL
            </p>
          </div>
          <button onClick={onClose} style={{
            padding: '8px', borderRadius: '9999px',
            border: 'none', backgroundColor: '#f3f4f6',
            cursor: 'pointer', display: 'flex',
          }}>
            <X size={18} color="#4b5563" />
          </button>
        </div>

        <div style={{ padding: '0 20px 40px' }}>

          {/* User Profile */}
          <div style={{
            marginTop: '20px',
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <div style={{
              width: '48px', height: '48px',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #16a34a, #2563eb)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <User size={22} color="white" />
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#111827', margin: 0 }}>
                Hey, Guest!
              </p>
              <button style={{
                fontSize: '11px', color: '#16a34a',
                fontWeight: 600, background: 'none',
                border: 'none', cursor: 'pointer',
                padding: 0, marginTop: '4px',
                display: 'flex', alignItems: 'center', gap: '3px',
              }}>
                Login / Register <ChevronRight size={11} />
              </button>
            </div>
          </div>

          {/* Men | Women */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {['👕 MEN', '👚 WOMEN'].map((label) => (
              <button key={label} style={{
                flex: 1, padding: '11px',
                backgroundColor: '#f3f4f6',
                borderRadius: '12px',
                border: 'none', cursor: 'pointer',
                fontWeight: 600, fontSize: '13px',
                color: '#1f2937',
              }}>
                {label}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div style={{ marginTop: '24px', borderTop: '1px solid #f3f4f6', paddingTop: '8px' }}>
            <button
              onClick={() => setOpenCategories(!openCategories)}
              style={{
                width: '100%', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 0',
                background: 'none', border: 'none', cursor: 'pointer',
              }}
            >
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#111827' }}>
                Categories
              </span>
              {openCategories
                ? <ChevronDown size={17} color="#6b7280" />
                : <ChevronRight size={17} color="#6b7280" />
              }
            </button>

            {openCategories && (
              <div style={{ paddingBottom: '8px' }}>
                {[
                  { name: 'Graphic Tees', icon: <Tag size={15} />, count: '128' },
                  { name: 'Oversized T-Shirts', icon: <Shirt size={15} />, count: '64' },
                  { name: 'Limited Edition', icon: <Flame size={15} />, count: '18' },
                  { name: 'New Arrivals', icon: <Zap size={15} />, count: '34' },
                  { name: 'Best Sellers', icon: <Star size={15} />, count: '52' },
                ].map((item, idx) => (
                  <a key={idx} href="#" style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '13px 4px',
                    borderBottom: '1px solid #f9fafb',
                    textDecoration: 'none',
                    color: '#374151',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#9ca3af' }}>{item.icon}</span>
                      <span style={{ fontSize: '14px' }}>{item.name}</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>{item.count}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div style={{ marginTop: '24px', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
            <p style={{ fontSize: '10px', color: '#9ca3af', letterSpacing: '1.5px', marginBottom: '8px' }}>
              QUICK LINKS
            </p>
            {[
              { name: 'Wishlist', icon: <Heart size={17} /> },
              { name: 'My Orders', icon: <Package size={17} /> },
              { name: 'Track Order', icon: <Truck size={17} /> },
              { name: 'Help & Support', icon: <Shield size={17} /> },
            ].map((item, idx) => (
              <a key={idx} href="#" style={{
                display: 'flex', alignItems: 'center',
                gap: '14px', padding: '13px 0',
                borderBottom: '1px solid #f9fafb',
                textDecoration: 'none', color: '#374151', fontSize: '14px',
              }}>
                <span style={{ color: '#9ca3af' }}>{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Login Button */}
          <button style={{
            width: '100%',
            marginTop: '28px',
            padding: '14px',
            background: 'linear-gradient(to right, #16a34a, #2563eb)',
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <LogIn size={17} /> Login / Register
          </button>

          {/* Footer */}
          <p style={{ fontSize: '10px', color: '#d1d5db', textAlign: 'center', marginTop: '32px' }}>
            © 2026 The Shoe Lex · All Rights Reserved
          </p>

        </div>
      </div>
    </>
  );
};

export default MobileSidebar;