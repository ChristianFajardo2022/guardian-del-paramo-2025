import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Video de fondo pausado inicialmente */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Comp 1_1.mp4"
        muted
        playsInline
      />
      
      <motion.div 
        className="primeraParte relative z-20"
        initial={{ opacity: 1 }}
        animate={isPlaying ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-full h-[10vh] bg-black bg-opacity-85 flex justify-between px-44"
          initial={{ y: 0 }}
          animate={isPlaying ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="w-5" src="/prosp.svg" alt="Logo" />
          <img className="w-[124px]" src="/Guardianes.svg" alt="Guardianes" />
        </motion.div>

        <motion.div 
          className="text-white w-full h-[80vh] flex flex-col items-start justify-center bg-black/50"
          initial={{ opacity: 1 }}
          animate={isPlaying ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="pl-[10%] w-[70vw]">
            <h1 className="font-Tusker text-[144px]">EL PÁRAMO NOS UNE</h1>
            <p className="font-Amenti text-[22px]">
              Esta montaña es capaz de unir la niebla, sus cumbres y los frailejones <br />
              para producir el milagro del agua. <br /> Pero, también tiene el poder de unir a personas.
            </p>
            <button
              className="rounded-2xl bg-black hover:bg-white w-auto px-4 py-1 mt-10 text-white hover:text-black font-medium border "
              onClick={handlePlayVideo}
            >
              DESCUBRE AQUÍ
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="w-full h-[10vh] bg-black bg-opacity-85"
          initial={{ y: 0 }}
          animate={isPlaying ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
