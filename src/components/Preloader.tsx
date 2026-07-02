import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to complete before calling onComplete
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        id="preloader-overlay-exit"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark pointer-events-none"
      />
    );
  }

  return (
    <div
      id="preloader-overlay"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Molecular Structure */}
        <div className="relative w-40 h-44 mb-6">
          {/* Connecting Lines with SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
            {/* Draw Path between nodes */}
            <motion.line
              x1="80"
              y1="35"
              x2="35"
              y2="115"
              stroke="#06b6d4"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.line
              x1="80"
              y1="35"
              x2="125"
              y2="115"
              stroke="#06b6d4"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.line
              x1="35"
              y1="115"
              x2="125"
              y2="115"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </svg>

          {/* Atomic Nodes */}
          {/* Top Node (GLP-1) */}
          <motion.div
            id="node-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          >
            <span className="text-[10px] font-bold text-brand-dark font-mono">GLP</span>
          </motion.div>

          {/* Bottom Left Node (GIP) */}
          <motion.div
            id="node-left"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="absolute bottom-6 left-4 w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          >
            <span className="text-[10px] font-bold text-brand-dark font-mono">GIP</span>
          </motion.div>

          {/* Bottom Right Node (GLUCAGON) */}
          <motion.div
            id="node-right"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="absolute bottom-6 right-4 w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          >
            <span className="text-[9px] font-bold text-brand-dark font-mono">GCG</span>
          </motion.div>

          {/* Central Connecting Core Core */}
          <motion.div
            id="node-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-[70px] left-[70px] w-5 h-5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
          />
        </div>

        {/* Brand Text */}
        <motion.h1
          id="preloader-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-2xl md:text-3xl font-display font-bold tracking-[0.25em] text-white text-center"
        >
          VSC <span className="text-brand-cyan text-glow-cyan font-light">PEPTIDES</span>
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-brand-box rounded-full mt-6 overflow-hidden">
          <motion.div
            id="preloader-progress"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          />
        </div>

        <motion.p
          id="preloader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-xs font-mono tracking-widest text-slate-400 mt-3"
        >
          PURE. POTENT. ELITE.
        </motion.p>
      </div>
    </div>
  );
}
