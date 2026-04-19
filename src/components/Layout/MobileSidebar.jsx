import { useState } from 'react';
import { 
  X, User, ChevronRight, ChevronDown, 
  Tag, Shirt, Flame, Heart, Package, 
  LogIn, Sun, Moon, TrendingUp, Star
} from 'lucide-react';

const MobileSidebar = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({
    summerHome: true,
    categories: true
  });
  const [isDarkMode, setIsDarkMode] = useState(false); // False = light mode

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

      {/* Sidebar - White background for light theme */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex justify-between items-center p-5">
            <div>
              <h2 className="font-poppins font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                TSHIRT STORE
              </h2>
              <p className="text-[10px] text-gray-400 mt-0.5">Pop Culture Apparel</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X size={22} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* User Profile Section - Light Theme */}
        <div className="mx-4 mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm">Shashank Chouradia</h3>
              <button className="text-green-600 text-xs font-medium mt-1 flex items-center gap-1">
                BECOME A MEMBER <ChevronRight size={12} />
              </button>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-3">Get Lowest Prices on All Products & More</p>
        </div>

        {/* MEN | WOMEN Buttons */}
        <div className="flex gap-2 mx-4 mb-6">
          <button className="flex-1 py-2.5 bg-gray-100 rounded-xl text-gray-800 font-semibold text-sm hover:bg-gray-200 transition">
            MEN
          </button>
          <button className="flex-1 py-2.5 bg-gray-100 rounded-xl text-gray-800 font-semibold text-sm hover:bg-gray-200 transition">
            WOMEN
          </button>
        </div>

        {/* Summer Home Section */}
        <div className="mx-4 border-b border-gray-100">
          <button 
            onClick={() => toggleSection('summerHome')}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="text-gray-900 font-semibold text-base">Summer Home</span>
            {openSections.summerHome ? <ChevronDown size={18} className="text-gray-500" /> : <ChevronRight size={18} className="text-gray-500" />}
          </button>
          
          {openSections.summerHome && (
            <div className="pb-3 space-y-2">
              {['New', 'Hot Wheels', 'Hot Merch', 'Slide'].map((item, idx) => (
                <a key={idx} href="#" className="block py-2 text-gray-600 text-sm hover:text-green-600 transition">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Categories Section */}
        <div className="mx-4 border-b border-gray-100">
          <button 
            onClick={() => toggleSection('categories')}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="text-gray-900 font-semibold text-base">Categories</span>
            {openSections.categories ? <ChevronDown size={18} className="text-gray-500" /> : <ChevronRight size={18} className="text-gray-500" />}
          </button>
          
          {openSections.categories && (
            <div className="pb-3 space-y-2">
              {[
                { name: "Graphic Tees", icon: <Tag size={14} /> },
                { name: "Oversized T-Shirts", icon: <Shirt size={14} /> },
                { name: "Premium Cotton", icon: <Star size={14} /> },
                { name: "Limited Edition", icon: <Flame size={14} /> }
              ].map((item, idx) => (
                <a key={idx} href="#" className="flex items-center gap-2 py-2 text-gray-600 text-sm hover:text-green-600 transition">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="mx-4 mt-4 space-y-1">
          <a href="#" className="flex items-center gap-3 py-3 text-gray-600 text-sm hover:text-gray-900 transition">
            <TrendingUp size={18} /> New Arrivals
          </a>
          <a href="#" className="flex items-center gap-3 py-3 text-gray-600 text-sm hover:text-gray-900 transition">
            <Heart size={18} /> Wishlist
          </a>
          <a href="#" className="flex items-center gap-3 py-3 text-gray-600 text-sm hover:text-gray-900 transition">
            <Package size={18} /> My Orders
          </a>
        </div>

        {/* Login Button */}
        <div className="mx-4 mt-6">
          <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2">
            <LogIn size={18} /> Login / Register
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mx-4 my-6 pt-4 border-t border-gray-100">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-3 w-full py-2 text-gray-500 text-sm"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;