import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const LatestDrops = () => {
  // Product data - Tu apni images aur text daal sakta hai
  const drops = [
    {
      id: 1,
      image: "/images/latest-drop1.avif",
      title: "INDIA'S FIRST OFFICIAL",
      subtitle: "HE-MAN",
      description: "A TRIBUTE TO THE MOST POWERFUL MAN IN THE UNIVERSE",
      footer: "©2026 Mattel",
      buttonText: "SHOP NOW"
    },
    {
      id: 2,
      image: "/images/latest-drop2.avif",
      title: "LIMITED EDITION",
      subtitle: "MASTERS OF THE UNIVERSE",
      description: "COLLECTOR'S ITEM - LIMITED STOCK",
      footer: "©2026 Mattel",
      buttonText: "SHOP NOW"
    },
    {
      id: 3,
      image: "/images/latest-drop3.avif",
      title: "RETRO COLLECTION",
      subtitle: "80s ICONIC SERIES",
      description: "RELIVE THE GOLDEN ERA",
      footer: "©2026 Mattel",
      buttonText: "SHOP NOW"
    },
    {
      id: 4,
      image: "/images/latest-drop1.avif",
      title: "EXCLUSIVE DROP",
      subtitle: "BATTLE CAT",
      description: "PREMIUM QUALITY GRAPHIC TEE",
      footer: "©2026 Mattel",
      buttonText: "SHOP NOW"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % drops.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [drops.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + drops.length) % drops.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % drops.length);
  };

  const currentDrop = drops[currentIndex];

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        
        {/* Heading */}
        <div className="text-center mt-10 mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            LATEST <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">DROPS</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-2 sm:mt-3"></div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Image Card */}
          <div className="relative overflow-hidden  bg-gray-900">
            {/* Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              {currentDrop.image ? (
                <img
                  src={currentDrop.image}
                  alt={currentDrop.subtitle}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/800x600/1a1a1a/00FF87/png?text=${currentDrop.subtitle}`;
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-gray-400">{currentDrop.subtitle}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay Content - Jaisa reference image mein hai */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
                  <p className="text-xs sm:text-sm text-green-400 font-semibold tracking-wider mb-1 sm:mb-2">
                    {currentDrop.title}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-2 sm:mb-3">
                    {currentDrop.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-md mb-3 sm:mb-4">
                    {currentDrop.description}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mb-3 sm:mb-4">
                    {currentDrop.footer}
                  </p>
                  <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-gray-900 font-semibold rounded-full text-xs sm:text-sm hover:bg-gray-100 transition flex items-center gap-2">
                    <Eye size={16} /> {currentDrop.buttonText}
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Left Arrow */}
          {/* <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

       
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition backdrop-blur-sm"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button> */}

          {/* Dots Indicator - Manual slide ke liye */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-6">
            {drops.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-6 sm:w-8 h-2 bg-green-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation - Extra feature for better UX */}
        {/* <div className="hidden sm:flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
          {drops.map((drop, index) => (
            <button
              key={drop.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 transition-all duration-300 ${
                currentIndex === index
                  ? 'ring-2 ring-green-600 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-200">
                {drop.image ? (
                  <img
                    src={drop.image}
                    alt={drop.subtitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/80x80/1a1a1a/FFFFFF/png?text=Tee';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-[10px]">
                    Tee
                  </div>
                )}
              </div>
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default LatestDrops;