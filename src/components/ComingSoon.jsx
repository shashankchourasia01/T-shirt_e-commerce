import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import smokeVideo from "../assets/smoke.mp4";
import storeName from "../assets/store-name.jpeg";

export default function App() {
  const title = "COMING SOON";

  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // 🔤 word swap
  const words = ["With Some!", "Creative 👌", "Designs 😎", "Stay Tuned!", "🤍🤍"];
  const [wordIndex, setWordIndex] = useState(0);

  // ⛔ control when section 2 starts
  const [startWords, setStartWords] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    // 🔥 letter animation (one-time)
    let i = 0;
    const letterInterval = setInterval(() => {
      setActiveIndex(i);
      i++;

      if (i >= title.length) {
        clearInterval(letterInterval);

        // ✅ start section 2 AFTER text finishes
        setTimeout(() => {
          setStartWords(true);
        }, 500);
      }
    }, 600);

    return () => clearInterval(letterInterval);
  }, []);

  // 🔁 word animation (starts only after smoke finishes)
  useEffect(() => {
    if (!startWords) return;

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, [startWords]);

  // Instagram link
  const instagramUrl = "https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"; 
  const handleInstagramClick = () => {
    window.open(instagramUrl, "_blank");
  };

  // ========== INLINE STYLES (Tailwind v4 ke liye) ==========
  
  const containerStyle = {
    backgroundColor: '#000000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    paddingLeft: '16px',
    paddingRight: '16px'
  };

  const logoStyle = {
    width: '200px',
    objectFit: 'contain',
    marginTop: '32px'
  };

  // Media query ke liye - desktop pe width zyada
  const logoDesktopStyle = {
    '@media (min-width: 768px)': {
      width: '320px'
    }
  };

  const videoContainerStyle = {
    position: 'relative',
    width: '90%',
    maxWidth: '700px',
    height: '200px',
    overflow: 'hidden'
  };

  const videoStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'left'
  };

  const headingContainerStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '0.3rem'
  };

  const headingDesktopStyle = {
    '@media (min-width: 768px)': {
      fontSize: '60px'
    }
  };

  const animatedTextContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '24px'
  };

  const animatedTextDesktopStyle = {
    '@media (min-width: 768px)': {
      fontSize: '36px'
    }
  };

  const wordContainerStyle = {
    overflow: 'hidden',
    height: '1.2em'
  };

  const instagramButtonStyle = {
    marginTop: '32px'
  };

  const buttonStyle = {
    position: 'relative',
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #9333ea, #db2777)',
    border: 'none',
    borderRadius: '9999px',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };

  const handleButtonHover = (e, isEnter) => {
    if (isEnter) {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 0 15px rgba(147, 51, 234, 0.5)';
    } else {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }
  };

  const iconStyle = {
    fontSize: '24px'
  };

  const handleTextStyle = {
    color: '#6b7280',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '24px'
  };

  const footerStyle = {
    color: '#4b5563',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '24px'
  };

  return (
    <div style={containerStyle}>
      
      {/* Store Logo */}
      <img
        src={storeName}
        alt="Store Name"
        style={{ ...logoStyle, ...logoDesktopStyle }}
      />

      {/* 🔥 SECTION 1 - Smoke Video */}
      <div style={videoContainerStyle}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={videoStyle}
        >
          <source src={smokeVideo} type="video/mp4" />
        </video>

        <div style={{ ...headingContainerStyle, ...headingDesktopStyle }}>
          {title.split("").map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                marginLeft: char === " " ? '16px' : '0',
                marginRight: char === " " ? '16px' : '0'
              }}
              className={i === activeIndex ? "animate-letter" : ""}
            >
              {char !== " " && char}
            </span>
          ))}
        </div>
      </div>

      {/* ✨ SECTION 2 - Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={startWords ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ ...animatedTextContainerStyle, ...animatedTextDesktopStyle }}
      >
        <span>This Summer</span>

        <div style={wordContainerStyle}>
          <AnimatePresence mode="wait">
            {startWords && (
              <motion.span
                key={words[wordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                style={{
                  display: 'inline-block',
                  color: '#a855f7',
                  fontWeight: 600
                }}
              >
                {words[wordIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 🟣 INSTAGRAM CONNECT SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={startWords ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={instagramButtonStyle}
      >
        <button
          onClick={handleInstagramClick}
          style={buttonStyle}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
        >
          <span style={iconStyle}>📸</span>
          <span>Connect on Instagram</span>
        </button>
        
        {/* Show handle */}
        <p style={handleTextStyle}>
          @thebobstore_
        </p>
      </motion.div>

      {/* Footer Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={startWords ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={footerStyle}
      >
        Be the first to know when we launch! ✨
      </motion.p>
    </div>
  );
}