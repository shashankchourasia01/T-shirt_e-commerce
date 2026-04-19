import { useState } from 'react';
import { 
  X, User, ChevronRight, ChevronDown, 
  Tag, Shirt, Flame, Heart, Package, 
  LogIn, Sun, Moon, TrendingUp, Star, 
  Zap, Layers, Truck, Shield
} from 'lucide-react';

const MobileSidebar = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({
    summerHome: true,
    categories: true
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar - White background with proper padding */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with more padding */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex justify-between items-center px-5 py-5">
            <div>
              <h2 className="font-poppins font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                TSHIRT STORE
              </h2>
              <p className="text-[10px] text-gray-400 mt-1 tracking-wide">POP CULTURE APPAREL</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2.5 hover:bg-gray-100 rounded-full transition"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Content with proper gaps */}
        <div className="pb-8">
          
          {/* User Profile Section - More padding and better design */}
          <div className="mx-5 mt-5 mb-6 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center shadow-md">
                <User size={26} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">Shashank Chouradia</h3>
                <button className="text-green-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                  BECOME A MEMBER <ChevronRight size={12} />
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">Get Lowest Prices on All Products & More</p>
          </div>

          {/* MEN | WOMEN Buttons - Better spacing */}
          <div className="flex gap-3 mx-5 mb-8">
            <button className="flex-1 py-3 bg-gray-100 rounded-xl text-gray-800 font-semibold text-sm hover:bg-gray-200 transition">
              👕 MEN
            </button>
            <button className="flex-1 py-3 bg-gray-100 rounded-xl text-gray-800 font-semibold text-sm hover:bg-gray-200 transition">
              👚 WOMEN
            </button>
          </div>

          {/* Summer Home Section - Proper indentation */}
          <div className="mx-5 border-b border-gray-100">
            <button 
              onClick={() => toggleSection('summerHome')}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-gray-900 font-semibold text-base">Summer Home</span>
              {openSections.summerHome ? 
                <ChevronDown size={18} className="text-gray-500" /> : 
                <ChevronRight size={18} className="text-gray-500" />
              }
            </button>
            
            {openSections.summerHome && (
              <div className="pb-4 space-y-3 ml-2">
                {[
                  { name: "New", icon: <Zap size={14} /> },
                  { name: "Hot Wheels", icon: <Flame size={14} /> },
                  { name: "Hot Merch", icon: <Star size={14} /> },
                  { name: "Slide", icon: <Layers size={14} /> }
                ].map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-3 py-2 text-gray-600 text-sm hover:text-green-600 transition">
                    <span className="text-gray-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Categories Section - Main T-Shirt Categories */}
          <div className="mx-5 border-b border-gray-100">
            <button 
              onClick={() => toggleSection('categories')}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-gray-900 font-semibold text-base">Categories</span>
              {openSections.categories ? 
                <ChevronDown size={18} className="text-gray-500" /> : 
                <ChevronRight size={18} className="text-gray-500" />
              }
            </button>
            
            {openSections.categories && (
              <div className="pb-4 space-y-3 ml-2">
                {[
                  { name: "Graphic Tees", icon: <Tag size={14} />, count: "128" },
                  { name: "Oversized T-Shirts", icon: <Shirt size={14} />, count: "64" },
                  { name: "Premium Cotton", icon: <Star size={14} />, count: "42" },
                  { name: "Limited Edition", icon: <Flame size={14} />, count: "18" }
                ].map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center justify-between py-2 text-gray-600 text-sm hover:text-green-600 transition group">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 group-hover:text-green-600">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.count}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links with icons */}
          <div className="mx-5 mt-6 space-y-2">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Quick Links</p>
            <a href="#" className="flex items-center gap-3 py-3 text-gray-700 text-sm hover:text-green-600 transition group">
              <TrendingUp size={18} className="text-gray-400 group-hover:text-green-600" /> 
              New Arrivals
            </a>
            <a href="#" className="flex items-center gap-3 py-3 text-gray-700 text-sm hover:text-green-600 transition group">
              <Heart size={18} className="text-gray-400 group-hover:text-green-600" /> 
              Wishlist
            </a>
            <a href="#" className="flex items-center gap-3 py-3 text-gray-700 text-sm hover:text-green-600 transition group">
              <Package size={18} className="text-gray-400 group-hover:text-green-600" /> 
              My Orders
            </a>
            <a href="#" className="flex items-center gap-3 py-3 text-gray-700 text-sm hover:text-green-600 transition group">
              <Truck size={18} className="text-gray-400 group-hover:text-green-600" /> 
              Track Order
            </a>
            <a href="#" className="flex items-center gap-3 py-3 text-gray-700 text-sm hover:text-green-600 transition group">
              <Shield size={18} className="text-gray-400 group-hover:text-green-600" /> 
              Help & Support
            </a>
          </div>

          {/* Login Button with more margin */}
          <div className="mx-5 mt-8">
            <button className="w-full py-3.5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition">
              <LogIn size={18} /> Login / Register
            </button>
          </div>

          {/* Dark Mode Toggle with proper spacing */}
          <div className="mx-5 mt-6 pt-4 border-t border-gray-100">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center justify-between w-full py-2 text-gray-500 text-sm"
            >
              <div className="flex items-center gap-3">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition ${isDarkMode ? 'bg-green-600' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white mt-0.5 transition ${isDarkMode ? 'ml-5' : 'ml-1'}`} />
              </div>
            </button>
          </div>

          {/* Footer Text */}
          <div className="mx-5 mt-8 mb-4">
            <p className="text-[10px] text-gray-400 text-center">
              © 2024 TShirt Store | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;