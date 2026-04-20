import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const LatestDrops = () => {
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % drops.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [drops.length]);

    const currentDrop = drops[currentIndex];

    return (
        <div className="w-full bg-white" style={{ paddingBottom: '40px' }}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                {/* Heading */}
<div style={{ marginBottom: '24px' }}>
  <h2 style={{
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 'clamp(20px, 5.5vw, 30px)',
    fontWeight: 800,
    color: '#111827',
    margin: 0,
    letterSpacing: '-0.5px',
    lineHeight: 1.15,
  }}>
    LATEST{' '}
    <span style={{
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 300,
      letterSpacing: '4px',
      fontSize: 'clamp(20px, 5.5vw, 30px)',
      background: 'linear-gradient(to right, #16a34a, #2563eb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      DROPS
    </span>
  </h2>
  <div style={{
    width: '40px',
    height: '2px',
    background: 'linear-gradient(to right, #16a34a, #2563eb)',
    borderRadius: '9999px',
    marginTop: '8px',
  }} />
</div>

                {/* Slider */}
                <div className="relative">

                    {/* Image Card */}
                    <div className="overflow-hidden bg-gray-900">
                        <div className="relative h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px]">
                            {currentDrop.image ? (
                                <img
                                    src={currentDrop.image}
                                    alt={currentDrop.subtitle}
                                    className="w-full h-full object-cover transition-opacity duration-500"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/800x600/1a1a1a/00FF87/png?text=${currentDrop.subtitle}`;
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                                    <p className="text-gray-400">{currentDrop.subtitle}</p>
                                </div>
                            )}

                            {/* Overlay — uncomment karna ho toh ready hai */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
                  <p className="text-xs sm:text-sm text-green-400 font-semibold tracking-wider mb-1 sm:mb-2">
                    {currentDrop.title}
                  </p>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
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

                    {/* Dots */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                        {drops.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    transition: 'all 0.3s',
                                    borderRadius: '9999px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    width: currentIndex === index ? '28px' : '8px',
                                    height: '8px',
                                    backgroundColor: currentIndex === index ? '#16a34a' : '#d1d5db',
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LatestDrops;