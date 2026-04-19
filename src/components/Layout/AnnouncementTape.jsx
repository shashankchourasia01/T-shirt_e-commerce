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

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-2.5 px-4 border-b border-gray-200">
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon size={14} className="text-green-600" />}
        <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
          {current.text}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementTape;