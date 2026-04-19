import { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';

const announcements = [
  { id: 1, text: "10% Cashback on All Orders as TSS Points", icon: Gift },
  { id: 2, text: "FREE Shipping on Orders Above ₹999", icon: null },
  { id: 3, text: "Use Code: FIRST10 for 10% OFF", icon: null }
];

const AnnouncementTape = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = announcements[currentIndex];
  const Icon = current.icon;

  // Inline styles for gradient background
  const tapeStyle = {
    background: 'linear-gradient(135deg, #86efac 0%, #93c5fd 100%)',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderBottom: '1px solid #e5e7eb'
  };

  return (
    <div style={tapeStyle}>
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon size={18} className="text-green-700" />}
        <p className="text-gray-800 text-sm sm:text-base font-semibold text-center">
          {current.text}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementTape;