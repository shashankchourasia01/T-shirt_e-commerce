import { useState } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-dark-bg/95 backdrop-blur-md border-b border-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Left Side - Hamburger Icon */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 hover:bg-white/10 rounded-full transition active:scale-95"
              aria-label="Menu"
            >
              <Menu size={22} />
            </button>

            {/* Center - Logo (Replaceable - baad mein apna dal sakte ho) */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="block">
                <h1 className="font-poppins font-extrabold text-lg sm:text-xl tracking-tight">
                  <span className="bg-gradient-to-r from-accent-neon to-accent-electric bg-clip-text text-transparent">
                    TSHIRT
                  </span>
                  <span className="text-primary-white">STORE</span>
                </h1>
                {/* Small text - Souled Store style */}
                <p className="text-[10px] text-secondary-gray text-center hidden sm:block">
                  Pop Culture Apparel
                </p>
              </a>
            </div>

            {/* Right Side - Search + Cart Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search Icon */}
              <button className="p-2 hover:bg-white/10 rounded-full transition active:scale-95">
                <Search size={20} />
              </button>
              
              {/* Cart Icon with Badge */}
              <button className="p-2 hover:bg-white/10 rounded-full transition active:scale-95 relative">
                <ShoppingBag size={20} />
                {/* Cart Badge - 0 items initially, baad mein dynamic hoga */}
                <span className="absolute -top-1 -right-1 bg-accent-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
};

export default Header;