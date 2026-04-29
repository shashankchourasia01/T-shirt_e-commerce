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

  // Instagram link - tu apna Instagram handle daal
  const instagramUrl = "https://www.instagram.com/thebobstore_?igsh=Y25rZDRhYWhqMXZp"; 
  const handleInstagramClick = () => {
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-5 px-4">
      
      {/* Store Logo */}
      <img
        src={storeName}
        alt="Store Name"
        className="w-[200px] md:w-[320px] object-contain mt-8"
      />

      {/* 🔥 SECTION 1 - Smoke Video */}
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

      {/* ✨ SECTION 2 - Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={startWords ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl md:text-4xl flex items-center gap-3 flex-wrap justify-center"
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

      {/* 🟣 INSTAGRAM CONNECT SECTION - NEW ADD KAR RAHA HOON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={startWords ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <button
          onClick={handleInstagramClick}
          className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full 
                     text-white font-semibold text-lg flex items-center gap-3 
                     hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
        >
          {/* Instagram Icon (simple text version - no external icon) */}
          <span className="text-2xl">📸</span>
          <span>Connect on Instagram</span>
          
          {/* Hover effect line */}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 
                           group-hover:w-1/2 group-hover:left-1/4"></span>
        </button>
        
        {/* Optional: Show handle */}
        <p className="text-gray-500 text-xs text-center mt-6">
          @thebobstore_
        </p>
      </motion.div>

      {/* Footer Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={startWords ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-gray-600 text-xs text-center mt-6"
      >
        Be the first to know when we launch! ✨
      </motion.p>
    </div>
  );
}