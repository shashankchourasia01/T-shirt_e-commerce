import { FaInstagram } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";

import img1 from "../assets/1.png";
import bgImg from "../assets/bg.jpeg";

export default function App() {
  // ========== RESPONSIVE STYLES (Mobile First - Media Queries) ==========
  
  // Card style - mobile default
  const cardBaseStyle = {
    position: 'relative',
    zIndex: 10,
    width: '95vw',
    minHeight: '85vh',
    backdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '20px',
    color: '#ffffff'
  };

  // Card style - desktop (media query)
  const cardDesktopStyle = {
    '@media (minWidth: 768px)': {
      width: '90vw',
      height: '80vh',
      padding: '24px'
    }
  };

  // Mobile hide - desktop show
  const mobileHideStyle = {
    '@media (minWidth: 768px)': {
      display: 'none'
    }
  };

  // Desktop show (hidden on mobile)
  const desktopShowStyle = {
    display: 'none',
    '@media (minWidth: 768px)': {
      display: 'block'
    }
  };

  // Desktop container
  const desktopContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
  };

  // ========== COMMON STYLES ==========
  
  const mainContainerStyle = {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const gradientBgStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom right, #000000, #111827, #000000)'
  };

  const imageBgStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: 0.2
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  };

  // ========== MOBILE STYLES ==========
  const mobileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px'
  };

  const saveMySpotStyle = {
    fontSize: '12px',
    textTransform: 'uppercase',
    opacity: 0.7
  };

  const lightTextStyle = {
    fontSize: '14px',
    fontWeight: 300,
    textTransform: 'uppercase',
    paddingLeft: '16px',
    paddingRight: '16px'
  };

  const boldHeadingStyle = {
    fontSize: '30px',
    fontWeight: 800,
    textTransform: 'uppercase',
    lineHeight: 1.2
  };

  const imageContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };

  const imageStyle = {
    width: '85%',
    maxWidth: '320px'
  };

  const followTextStyle = {
    fontSize: '14px',
    fontWeight: 300,
    textTransform: 'uppercase'
  };

  const instagramHeadingStyle = {
    fontSize: '30px',
    fontWeight: 800,
    textTransform: 'uppercase'
  };

  const instagramButtonStyle = {
    marginTop: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '12px 24px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'background-color 0.3s'
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '20px',
    marginTop: '8px'
  };

  // ========== DESKTOP STYLES ==========
  const leftTextStyle = {
    position: 'absolute',
    top: '15%'
  };

  const leftLightStyle = {
    fontSize: '24px',
    fontWeight: 300,
    textTransform: 'uppercase',
    '@media (minWidth: 1024px)': {
      fontSize: '28px'
    }
  };

  const leftBoldStyle = {
    fontSize: '48px',
    fontWeight: 800,
    textTransform: 'uppercase',
    lineHeight: 1,
    '@media (minWidth: 1024px)': {
      fontSize: '60px'
    }
  };

  const desktopImageStyle = {
    position: 'absolute',
    top: '10%',
    left: '15%'
  };

  const desktopImageInnerStyle = {
    width: '70%',
    '@media (minWidth: 1024px)': {
      width: '90%'
    }
  };

  const rightTextStyle = {
    position: 'absolute',
    bottom: '20%',
    right: 0,
    textAlign: 'right'
  };

  const rightLightStyle = {
    fontSize: '16px',
    fontWeight: 300,
    textTransform: 'uppercase',
    '@media (minWidth: 1024px)': {
      fontSize: '20px'
    }
  };

  const rightBoldStyle = {
    fontSize: '36px',
    fontWeight: 800,
    textTransform: 'uppercase',
    lineHeight: 1,
    '@media (minWidth: 1024px)': {
      fontSize: '60px'
    }
  };

  const topLabelStyle = {
    position: 'absolute',
    top: '5%',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '12px',
    '@media (minWidth: 768px)': {
      fontSize: '14px'
    }
  };

  const bottomLabelStyle = {
    position: 'absolute',
    top: '56%',
    right: 0,
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '10px',
    '@media (minWidth: 768px)': {
      fontSize: '12px'
    }
  };

  const socialIconsStyle = {
    position: 'absolute',
    top: '40%',
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    '@media (minWidth: 768px)': {
      gap: '20px'
    }
  };

  const socialIconStyle = {
    fontSize: '24px',
    cursor: 'pointer',
    '@media (minWidth: 768px)': {
      fontSize: '30px'
    }
  };

  const desktopButtonStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '12px 24px',
    borderBottomRightRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'background-color 0.3s',
    '@media (minWidth: 768px)': {
      padding: '16px 32px'
    }
  };

  const handleButtonHover = (e, isEnter) => {
    if (isEnter) {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
  };

  // Combine styles
  const combinedCardStyle = { ...cardBaseStyle, ...cardDesktopStyle };

  return (
    <div style={mainContainerStyle}>
      {/* BACKGROUND */}
      <div style={gradientBgStyle}></div>
      <div style={imageBgStyle}></div>
      <div style={overlayStyle}></div>

      {/* MAIN CONTAINER */}
      <div style={combinedCardStyle}>
        
        {/* ================= MOBILE ================= */}
        <div style={{ ...mobileContainerStyle, ...mobileHideStyle }}>
          <h2 style={saveMySpotStyle}>Save My Spot</h2>
          <h2 style={lightTextStyle}>The best fit to improve your personality</h2>
          <h1 style={boldHeadingStyle}>It's Coming</h1>

          {/* IMAGE */}
          <div style={{
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  animation: 'float 2s ease-in-out infinite'
}}>
  <img src={img1} alt="product" style={imageStyle} />
</div>
          
          <h2 style={followTextStyle}>Follow us</h2>
          <h1 style={instagramHeadingStyle}>Instagram</h1>

          {/* BUTTON */}
          <a
            href="https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramButtonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            <FaInstagram />
          </a>

          {/* SOCIAL */}
          <div style={socialContainerStyle}>
            <TiThLarge />
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div style={{ ...desktopContainerStyle, ...desktopShowStyle }}>
          {/* LEFT TEXT */}
          <div style={leftTextStyle}>
            <h2 style={leftLightStyle}>The Best fit to improve your personality</h2>
            <h1 style={leftBoldStyle}>It's Coming</h1>
          </div>

          {/* IMAGE */}
          {/* IMAGE - Inline animation style */}
<div style={{
  position: 'absolute',
  top: '10%',
  left: '15%',
  animation: 'float 2s ease-in-out infinite'
}}>
  <img src={img1} alt="product" style={desktopImageInnerStyle} />
</div>

          {/* RIGHT TEXT */}
          <div style={rightTextStyle}>
            <h2 style={rightLightStyle}>Make Sure You are following us</h2>
            <h1 style={rightBoldStyle}>on Instagram</h1>
          </div>

          {/* LABELS */}
          <div style={topLabelStyle}>This summer</div>
          <div style={bottomLabelStyle}>We're almost ready. Are you?</div>

          {/* SOCIAL ICONS */}
          <div style={socialIconsStyle}>
            <TiThLarge style={socialIconStyle} />
            <TiThLarge style={socialIconStyle} />
          </div>

          {/* INSTAGRAM BUTTON */}
          <a
            href="https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"
            target="_blank"
            rel="noopener noreferrer"
            style={desktopButtonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            <FaInstagram style={{ fontSize: '24px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}




// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import smokeVideo from "../assets/smoke.mp4";
// import storeName from "../assets/store-name.jpeg";

// export default function App() {
//   const title = "COMING SOON";

//   const videoRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(-1);

//   // 🔤 word swap
//   const words = ["With Some!", "Creative 👌", "Designs 😎", "Stay Tuned!", "🤍🤍"];
//   const [wordIndex, setWordIndex] = useState(0);

//   // ⛔ control when section 2 starts
//   const [startWords, setStartWords] = useState(false);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.5;
//     }

//     // 🔥 letter animation (one-time)
//     let i = 0;
//     const letterInterval = setInterval(() => {
//       setActiveIndex(i);
//       i++;

//       if (i >= title.length) {
//         clearInterval(letterInterval);

//         // ✅ start section 2 AFTER text finishes
//         setTimeout(() => {
//           setStartWords(true);
//         }, 500);
//       }
//     }, 600);

//     return () => clearInterval(letterInterval);
//   }, []);

//   // 🔁 word animation (starts only after smoke finishes)
//   useEffect(() => {
//     if (!startWords) return;

//     const wordInterval = setInterval(() => {
//       setWordIndex((prev) => (prev + 1) % words.length);
//     }, 3000);

//     return () => clearInterval(wordInterval);
//   }, [startWords]);

//   // Instagram link
//   const instagramUrl = "https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"; 
//   const handleInstagramClick = () => {
//     window.open(instagramUrl, "_blank");
//   };

//   // ========== INLINE STYLES (Tailwind v4 ke liye) ==========
  
//   const containerStyle = {
//     backgroundColor: '#000000',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '20px',
//     paddingLeft: '16px',
//     paddingRight: '16px'
//   };

//   const logoStyle = {
//     width: '200px',
//     objectFit: 'contain',
//     marginTop: '32px'
//   };

//   // Media query ke liye - desktop pe width zyada
//   const logoDesktopStyle = {
//     '@media (min-width: 768px)': {
//       width: '320px'
//     }
//   };

//   const videoContainerStyle = {
//     position: 'relative',
//     width: '90%',
//     maxWidth: '700px',
//     height: '200px',
//     overflow: 'hidden'
//   };

//   const videoStyle = {
//     position: 'absolute',
//     inset: 0,
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     objectPosition: 'left'
//   };

//   const headingContainerStyle = {
//     position: 'absolute',
//     inset: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#ffffff',
//     fontSize: '28px',
//     fontWeight: 'bold',
//     letterSpacing: '0.3rem'
//   };

//   const headingDesktopStyle = {
//     '@media (min-width: 768px)': {
//       fontSize: '60px'
//     }
//   };

//   const animatedTextContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     color: '#ffffff',
//     fontSize: '24px'
//   };

//   const animatedTextDesktopStyle = {
//     '@media (min-width: 768px)': {
//       fontSize: '36px'
//     }
//   };

//   const wordContainerStyle = {
//     overflow: 'hidden',
//     height: '1.2em'
//   };

//   const instagramButtonStyle = {
//     marginTop: '32px'
//   };

//   const buttonStyle = {
//     position: 'relative',
//     padding: '12px 32px',
//     background: 'linear-gradient(135deg, #9333ea, #db2777)',
//     border: 'none',
//     borderRadius: '9999px',
//     color: '#ffffff',
//     fontWeight: 600,
//     fontSize: '18px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   };

//   const handleButtonHover = (e, isEnter) => {
//     if (isEnter) {
//       e.currentTarget.style.transform = 'scale(1.05)';
//       e.currentTarget.style.boxShadow = '0 0 15px rgba(147, 51, 234, 0.5)';
//     } else {
//       e.currentTarget.style.transform = 'scale(1)';
//       e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
//     }
//   };

//   const iconStyle = {
//     fontSize: '24px'
//   };

//   const handleTextStyle = {
//     color: '#6b7280',
//     fontSize: '12px',
//     textAlign: 'center',
//     marginTop: '24px'
//   };

//   const footerStyle = {
//     color: '#4b5563',
//     fontSize: '12px',
//     textAlign: 'center',
//     marginTop: '24px'
//   };

//   return (
//     <div style={containerStyle}>
      
//       {/* Store Logo */}
//       <img
//         src={storeName}
//         alt="Store Name"
//         style={{ ...logoStyle, ...logoDesktopStyle }}
//       />

//       {/* 🔥 SECTION 1 - Smoke Video */}
//       <div style={videoContainerStyle}>
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           playsInline
//           style={videoStyle}
//         >
//           <source src={smokeVideo} type="video/mp4" />
//         </video>

//         <div style={{ ...headingContainerStyle, ...headingDesktopStyle }}>
//           {title.split("").map((char, i) => (
//             <span
//               key={i}
//               style={{
//                 display: 'inline-block',
//                 marginLeft: char === " " ? '16px' : '0',
//                 marginRight: char === " " ? '16px' : '0'
//               }}
//               className={i === activeIndex ? "animate-letter" : ""}
//             >
//               {char !== " " && char}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* ✨ SECTION 2 - Animated Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={startWords ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         style={{ ...animatedTextContainerStyle, ...animatedTextDesktopStyle }}
//       >
//         <span>This Summer</span>

//         <div style={wordContainerStyle}>
//           <AnimatePresence mode="wait">
//             {startWords && (
//               <motion.span
//                 key={words[wordIndex]}
//                 initial={{ y: "100%", opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: "-120%", opacity: 0 }}
//                 transition={{
//                   type: "spring",
//                   damping: 30,
//                   stiffness: 400,
//                 }}
//                 style={{
//                   display: 'inline-block',
//                   color: '#a855f7',
//                   fontWeight: 600
//                 }}
//               >
//                 {words[wordIndex]}
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>

//       {/* 🟣 INSTAGRAM CONNECT SECTION */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={startWords ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         style={instagramButtonStyle}
//       >
//         <button
//           onClick={handleInstagramClick}
//           style={buttonStyle}
//           onMouseEnter={(e) => handleButtonHover(e, true)}
//           onMouseLeave={(e) => handleButtonHover(e, false)}
//         >
//           <span style={iconStyle}>📸</span>
//           <span>Connect on Instagram</span>
//         </button>
        
//         {/* Show handle */}
//         <p style={handleTextStyle}>
//           @thebobstore_
//         </p>
//       </motion.div>

//       {/* Footer Message */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={startWords ? { opacity: 1 } : {}}
//         transition={{ duration: 0.6, delay: 0.5 }}
//         style={footerStyle}
//       >
//         Be the first to know when we launch! ✨
//       </motion.p>
//     </div>
//   );
// }