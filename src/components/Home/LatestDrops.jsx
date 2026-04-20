import { useState, useEffect } from 'react';

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
        <div style={{ width: '100%', backgroundColor: '#fff', paddingTop: '10px', paddingBottom: '20px' }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                paddingLeft: '16px',
                paddingRight: '16px',
                boxSizing: 'border-box',
            }}>

                {/* Heading */}
                <div style={{ marginBottom: '20px' }}>
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
                <div style={{ position: 'relative' }}>

                    {/* Image — borderRadius se left/right white gap */}
                    <div style={{
                        overflow: 'hidden',
                        backgroundColor: '#111827',
                        borderRadius: '12px',
                    }}>
                        <div className="latest-drop-img" style={{ position: 'relative' }}>
                            {currentDrop.image ? (
                                <img
                                    src={currentDrop.image}
                                    alt={currentDrop.subtitle}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'opacity 0.5s',
                                        display: 'block',
                                    }}
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/800x600/1a1a1a/00FF87/png?text=${currentDrop.subtitle}`;
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '100%', height: '100%',
                                    backgroundColor: '#1f2937',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <p style={{ color: '#9ca3af' }}>{currentDrop.subtitle}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Dots */}
                    <div style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center', gap: '10px', marginTop: '16px',
                    }}>
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

            <style>{`
                .latest-drop-img { height: 260px; }
                @media (min-width: 640px) { .latest-drop-img { height: 380px; } }
                @media (min-width: 768px) { .latest-drop-img { height: 480px; } }
                @media (min-width: 1024px) { .latest-drop-img { height: 560px; } }
            `}</style>
        </div>
    );
};

export default LatestDrops;