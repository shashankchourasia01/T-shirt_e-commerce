import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import smokeVideo from "../assets/smoke.mp4";
import storeName from "../assets/store-name.jpeg";


export default function App() {
  const title = "COMING SOON";

  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // 🔤 word swap
  const words = ["With Some!", "Creative 👌", "Designs 😎", "Stay Tuned!","🤍🤍"];
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

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-top gap-5 pt-10">

       <img
        src={storeName}
        alt="Store Name"
        className="w-[200px] md:w-[320px] object-contain"
      />

      {/* 🔥 SECTION 1 */}
      <div className="relative w-[90%] max-w-[700px] h-[200px] overflow-hidden">

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-left"
        >
          <source src={smokeVideo} type="video/mp4" />
        </video>

        <h1 className="absolute inset-0 flex items-center justify-center
                       text-white text-4xl md:text-6xl font-bold tracking-[0.3rem]">

          {title.split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block ${
                char === " " ? "mx-4 md:mx-6" : ""
              } ${i === activeIndex ? "animate-letter" : ""}`}
            >
              {char !== " " && char}
            </span>
          ))}
        </h1>
      </div>

      {/* ✨ SECTION 2 (with fade-in) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={startWords ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl md:text-4xl flex items-center gap-3"
      >
        <span>This Summer</span>

        <div className="overflow-hidden h-[1.2em]">
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
                className="inline-block text-violet-400 font-semibold"
              >
                {words[wordIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

    
      </div>


    
    
  );
}














// import { useState, useEffect, useMemo } from 'react';

// const ComingSoon = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Launch date - 15 days from now
//   const launchDate = useMemo(() => {
//     const date = new Date();
//     date.setDate(date.getDate() + 15);
//     return date;
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate.getTime() - now;

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [launchDate]);

//   const handleNotify = () => {
//     const email = document.getElementById('notify-email').value;
//     if (email) {
//       alert(`Thanks! We'll notify you at ${email} when we launch.`);
//       document.getElementById('notify-email').value = '';
//     } else {
//       alert('Please enter your email address.');
//     }
//   };

//   // Styles
//   const containerStyle = {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px'
//   };

//   const cardStyle = {
//     backgroundColor: 'white',
//     borderRadius: '24px',
//     padding: '50px 40px',
//     maxWidth: '550px',
//     width: '100%',
//     textAlign: 'center',
//     boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//   };

//   const logoStyle = {
//     fontSize: '32px',
//     fontWeight: '800',
//     marginBottom: '10px',
//     letterSpacing: '-1px'
//   };

//   const logoFirstStyle = {
//     color: '#333'
//   };

//   const logoSpanStyle = {
//     color: '#667eea'
//   };

//   const taglineStyle = {
//     fontSize: '12px',
//     color: '#999',
//     marginBottom: '30px',
//     letterSpacing: '2px'
//   };

//   const headingStyle = {
//     fontSize: '32px',
//     fontWeight: '700',
//     marginBottom: '12px',
//     color: '#1a1a1a'
//   };

//   const descriptionStyle = {
//     color: '#666',
//     marginBottom: '30px',
//     fontSize: '15px',
//     lineHeight: '1.5'
//   };

//   const timerContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     marginBottom: '35px',
//     flexWrap: 'wrap'
//   };

//   const timerBoxStyle = {
//     backgroundColor: '#f8f9fa',
//     borderRadius: '16px',
//     padding: '18px 15px',
//     minWidth: '80px',
//     textAlign: 'center',
//     border: '1px solid #eee'
//   };

//   const timerNumberStyle = {
//     fontSize: '32px',
//     fontWeight: '800',
//     color: '#333',
//     display: 'block'
//   };

//   const timerLabelStyle = {
//     fontSize: '11px',
//     color: '#888',
//     marginTop: '6px',
//     textTransform: 'uppercase',
//     letterSpacing: '1px'
//   };

//   const emailInputContainerStyle = {
//     display: 'flex',
//     marginBottom: '30px',
//     gap: '12px',
//     flexWrap: 'wrap'
//   };

//   const inputStyle = {
//     flex: 1,
//     padding: '14px 20px',
//     border: '1px solid #e0e0e0',
//     borderRadius: '50px',
//     fontSize: '14px',
//     outline: 'none',
//     fontFamily: 'inherit'
//   };

//   const buttonStyle = {
//     padding: '14px 32px',
//     backgroundColor: '#000',
//     color: 'white',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '14px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s'
//   };

//   const socialStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '25px',
//     marginBottom: '25px'
//   };

//   const socialLinkStyle = {
//     fontSize: '14px',
//     color: '#888',
//     textDecoration: 'none',
//     transition: 'color 0.3s'
//   };

//   const footerStyle = {
//     fontSize: '11px',
//     color: '#bbb',
//     borderTop: '1px solid #f0f0f0',
//     paddingTop: '20px',
//     marginTop: '10px'
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={cardStyle}>
//         {/* Logo */}
//         <div style={logoStyle}>
//           <span style={logoFirstStyle}>TSHIRT</span>
//           <span style={logoSpanStyle}>STORE</span>
//         </div>
//         <div style={taglineStyle}>POP CULTURE APPAREL</div>

//         {/* Heading */}
//         <h2 style={headingStyle}>Coming Soon!</h2>
//         <p style={descriptionStyle}>
//           We're working hard to bring you the best collection of graphic tees, oversized fits, and exclusive pop culture apparel.
//         </p>

//         {/* Timer */}
//         <div style={timerContainerStyle}>
//           <div style={timerBoxStyle}>
//             <span style={timerNumberStyle}>{String(timeLeft.days).padStart(2, '0')}</span>
//             <span style={timerLabelStyle}>Days</span>
//           </div>
//           <div style={timerBoxStyle}>
//             <span style={timerNumberStyle}>{String(timeLeft.hours).padStart(2, '0')}</span>
//             <span style={timerLabelStyle}>Hours</span>
//           </div>
//           <div style={timerBoxStyle}>
//             <span style={timerNumberStyle}>{String(timeLeft.minutes).padStart(2, '0')}</span>
//             <span style={timerLabelStyle}>Mins</span>
//           </div>
//           <div style={timerBoxStyle}>
//             <span style={timerNumberStyle}>{String(timeLeft.seconds).padStart(2, '0')}</span>
//             <span style={timerLabelStyle}>Secs</span>
//           </div>
//         </div>

//         {/* Email Signup */}
//         <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px', textAlign: 'left' }}>
//           👋 Get notified when we launch!
//         </p>
//         <div style={emailInputContainerStyle}>
//           <input 
//             id="notify-email"
//             type="email" 
//             placeholder="Enter your email address" 
//             style={inputStyle}
//             onFocus={(e) => e.target.style.borderColor = '#667eea'}
//             onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
//           />
//           <button 
//             style={buttonStyle}
//             onClick={handleNotify}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}
//           >
//             Notify Me
//           </button>
//         </div>

//         {/* Social Links - No Icons, Pure Text */}
//         <div style={socialStyle}>
//           <a 
//             href="#" 
//             style={socialLinkStyle}
//             onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
//             onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
//           >
//             Instagram
//           </a>
//           <a 
//             href="#" 
//             style={socialLinkStyle}
//             onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
//             onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
//           >
//             Twitter
//           </a>
//           <a 
//             href="#" 
//             style={socialLinkStyle}
//             onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
//             onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
//           >
//             Facebook
//           </a>
//         </div>

//         {/* Footer */}
//         <div style={footerStyle}>
//           © 2024 TShirtStore. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComingSoon;