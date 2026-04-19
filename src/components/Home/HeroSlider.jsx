import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  // Apni images ka array - public/images folder se
  const slides = [
    {
      id: 1,
      image: "/images/banner1.avif",
      title: "ICONIC SNEAKERS",
      subtitle: "EXPLORE THE COLLECTION",
      offer: "10% Cashback"
    },
    {
      id: 2,
      image: "/images/banner2.avif",
      title: "SUMMER COLLECTION",
      subtitle: "UP TO 40% OFF",
      offer: "Limited Time"
    },
    {
      id: 3,
      image: "/images/banner3.avif",
      title: "POP CULTURE TEES",
      subtitle: "NEW ARRIVALS",
      offer: "Shop Now"
    },
    {
      id: 4,
      image: "/images/banner2.avif",
      title: "PREMIUM COTTON",
      subtitle: "COMFORT & STYLE",
      offer: "Free Shipping"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* Slider Container */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            {/* Image Container */}
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[950px]">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/1200x600/1a1a1a/FFFFFF/png?text=${slide.title}`;
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white">{slide.title}</h2>
                    <p className="text-gray-300 mt-2">{slide.subtitle}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay Text - Optional, tere image pe text hai toh hata sakta hai */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-wide">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-lg md:text-xl mt-2 font-medium">
                    {slide.subtitle}
                  </p>
                  <span className="inline-block mt-3 sm:mt-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                    {slide.offer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-white'
                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;