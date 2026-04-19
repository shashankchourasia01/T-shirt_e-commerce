import { useState } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            
            {/* Hamburger */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition active:scale-95"
            >
              <Menu size={22} className="text-gray-800" />
            </button>

            {/* Logo - Souled Store Style */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="block text-center">
                <h1 className="font-poppins font-black text-lg tracking-tight">
                  <span className="text-gray-900">THE</span>
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> SHOE</span>
                  <span className="text-gray-900"> LEX</span>
                </h1>
                <p className="text-[9px] text-gray-500 tracking-wider -mt-0.5">POP CULTURE APPAREL</p>
              </a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Search size={20} className="text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <ShoppingBag size={20} className="text-gray-700" />
                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
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