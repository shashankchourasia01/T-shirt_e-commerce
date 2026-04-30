import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";

import img1 from "../assets/1.png";
import bgImg from "../assets/bg.jpeg";

export default function App() {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div
        className="absolute inset-0  bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      {/* MAIN CONTAINER */}
      <div
        className="relative z-10 w-[95vw] md:w-[90vw] 
                      min-h-[85vh] md:h-[80vh] 
                      backdrop-blur-md bg-white/10 border border-white/10 
                      rounded-2xl p-5 md:p-6 text-white"
      >
        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center text-center gap-5 md:hidden">
          <h2 className="text-xs uppercase opacity-70">Save My Spot</h2>

          <h2 className="text-sm font-light uppercase px-4">
            The best fit to improve your personality
          </h2>

          <h1 className="text-3xl font-extrabold uppercase leading-tight">
            It's Coming
          </h1>

          {/* IMAGE (PRIORITY + ANIMATION) */}
          <div className="w-full flex justify-center animate-bounce-slow">
            <img src={img1} alt="product" className="w-[85%] max-w-[320px]" />
          </div>
          <h2 className="text-sm font-light uppercase">Follow us</h2>

          <h1 className="text-3xl font-extrabold uppercase">Instagram</h1>

          {/* BUTTON */}
          <a
            href="https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-white/10 border border-white/30 px-6 py-3 rounded-xl"
          >
            <FaInstagram />
          </a>

          {/* SOCIAL */}
          <div className="flex gap-5 text-xl mt-2">
            <TiThLarge />
            
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative w-full h-full">
          {/* LEFT TEXT */}
          <div className="absolute top-[15%]">
            <h2 className="text-2xl font-light uppercase">
              The Best fit to improve your personality
            </h2>
            <h1 className="text-6xl font-extrabold uppercase leading-none">
              It's Coming
            </h1>
          </div>

          {/* IMAGE */}
          <div className="absolute top-[10%] left-[15%] animate-bounce-slow">
            <img src={img1} alt="product" className="w-[90%]" />
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute bottom-[20%] right-0 text-right">
            <h2 className="text-xl font-light uppercase">
              Make Sure You are following us
            </h2>
            <h1 className="text-6xl font-extrabold uppercase leading-none">
              on Instagram
            </h1>
          </div>

          {/* LABELS */}
          <div className="absolute top-[5%] uppercase font-semibold">
            This summer
          </div>

          <div className="absolute top-[56%] right-0 uppercase font-semibold">
            We're almost ready. Are you?
          </div>

          {/* SOCIAL ICONS */}
          <div className="absolute top-[40%] left-0 flex flex-col gap-5">
            <TiThLarge className="text-3xl"/>
            <TiThLarge className="text-3xl"/>
            
          </div>

          {/* INSTAGRAM BUTTON */}
          <a
            href="https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 bg-white/10 border border-white/30 px-8 py-4 rounded-br-2xl flex items-center justify-center hover:bg-white/20 transition"
          >
            <FaInstagram className="text-2xl" />
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