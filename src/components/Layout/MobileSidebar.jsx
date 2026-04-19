import { X, Home, Shirt, Flame, Tag, Heart, Package, LogIn, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const MobileSidebar = ({ isOpen, onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Shirt, label: "Shop", href: "/products" },
    { icon: Flame, label: "New Arrivals", href: "/products?filter=new" },
    { icon: Tag, label: "Categories", href: "/categories" },
    { divider: true },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: Package, label: "My Orders", href: "/orders" },
    { divider: true },
    { icon: LogIn, label: "Login / Register", href: "/login", isHighlight: true },
  ];

  return (
    <>
      {/* Overlay - dark background jo sidebar ke peeche aayega */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar - 80% width from left */}
      <div 
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-card-bg z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with Close button */}
        <div className="flex justify-between items-center p-5 border-b border-gray-800">
          <h2 className="font-poppins font-bold text-xl bg-gradient-to-r from-accent-neon to-accent-electric bg-clip-text text-transparent">
            Menu
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-4">
          {menuItems.map((item, idx) => {
            if (item.divider) {
              return <div key={idx} className="h-px bg-gray-800 my-3 mx-5" />;
            }
            
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className={`flex items-center gap-4 px-5 py-3 transition-colors hover:bg-white/5 ${
                  item.isHighlight ? 'text-accent-orange font-semibold' : ''
                }`}
                onClick={onClose}
              >
                <Icon size={20} />
                <span className="text-base">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Dark/Light Mode Toggle */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-800">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-4 w-full px-3 py-2 rounded-lg hover:bg-white/10 transition"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;