import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck, Activity, Brain, Flame, Target } from "lucide-react";
import { MECHANISM_DATA } from "../data";

export default function Mechanism() {
  const [activePathway, setActivePathway] = useState<number | null>(null);

  // Mapping corresponding icons for each pathway
  const icons = [
    <Brain className="w-6 h-6 text-brand-cyan" />,
    <Activity className="w-6 h-6 text-brand-cyan" />,
    <Flame className="w-6 h-6 text-brand-cyan" />
  ];

  return (
    <section
      id="mechanism-section"
      className="relative py-24 bg-brand-dark/50 border-y border-white/5 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-cyan/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-cyan text-glow-cyan"
          >
            Revolutionary Biological Synergy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mt-2"
          >
            Triple-Action Mechanism
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4"
          >
            Retatrutide acts simultaneously on three distinct hormone receptors, exponentially multiplying fat loss and metabolic efficiency.
          </motion.p>
        </div>

        {/* Asymmetrical Grid: 3 Pathway Cards + Central Animated Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Column Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 text-left mb-2 block">
              HOVER TO VIEW SYNERGY ON THE MAP:
            </span>

            {MECHANISM_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActivePathway(index)}
                onMouseLeave={() => setActivePathway(null)}
                className={`relative p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                  activePathway === index
                    ? "bg-brand-cyan/10 border-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.15)] scale-[1.02]"
                    : "bg-brand-box/40 border-white/5 hover:border-white/15"
                }`}
              >
                {/* Visual Active indicator marker */}
                <div className={`absolute top-0 bottom-0 left-0 w-1.5 rounded-l-2xl bg-brand-cyan transition-transform duration-300 ${activePathway === index ? "scale-y-100" : "scale-y-0"}`} />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                    {icons[index]}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-black text-white tracking-wide uppercase flex items-center justify-between">
                      {item.title}
                      {activePathway === index && (
                        <span className="text-xs font-mono text-brand-cyan animate-pulse">
                          ACTIVE
                        </span>
                      )}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Central SVG Diagram with converging laser lines */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-6 bg-brand-box/50 border border-white/5 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center">
              
              {/* Border accents */}
              <div className="absolute top-4 left-4 text-xs font-mono text-slate-500 uppercase">
                Molecular Analysis
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-brand-cyan text-glow-cyan animate-pulse uppercase">
                Triple Agonist GLP-1/GIP/GCG
              </div>

              {/* Diagram Stage Container */}
              <div className="relative w-72 h-72">
                {/* Background Ring */}
                <div className="absolute inset-0 rounded-full border border-brand-cyan/10 animate-[spin_60s_linear_infinite]" />

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  {/* GLP-1 Path (Top Node to Center) */}
                  <line x1="150" y1="40" x2="150" y2="150" stroke="#0f172a" strokeWidth="6" />
                  <motion.line
                    x1="150" y1="40" x2="150" y2="150"
                    stroke={activePathway === 0 || activePathway === null ? "#06b6d4" : "rgba(6, 182, 212, 0.15)"}
                    strokeWidth="3"
                    strokeDasharray={activePathway === 0 ? "5 5" : "none"}
                    animate={activePathway === 0 ? { strokeDashoffset: [-20, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />

                  {/* GIP Path (Bottom Left Node to Center) */}
                  <line x1="60" y1="210" x2="150" y2="150" stroke="#0f172a" strokeWidth="6" />
                  <motion.line
                    x1="60" y1="210" x2="150" y2="150"
                    stroke={activePathway === 1 || activePathway === null ? "#06b6d4" : "rgba(6, 182, 212, 0.15)"}
                    strokeWidth="3"
                    strokeDasharray={activePathway === 1 ? "5 5" : "none"}
                    animate={activePathway === 1 ? { strokeDashoffset: [-20, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />

                  {/* Glucagon Path (Bottom Right Node to Center) */}
                  <line x1="240" y1="210" x2="150" y2="150" stroke="#0f172a" strokeWidth="6" />
                  <motion.line
                    x1="240" y1="210" x2="150" y2="150"
                    stroke={activePathway === 2 || activePathway === null ? "#06b6d4" : "rgba(6, 182, 212, 0.15)"}
                    strokeWidth="3"
                    strokeDasharray={activePathway === 2 ? "5 5" : "none"}
                    animate={activePathway === 2 ? { strokeDashoffset: [-20, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />
                </svg>

                {/* Pathway Nodes */}
                {/* Node 1: GLP-1 */}
                <motion.div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                    activePathway === 0 || activePathway === null
                      ? "bg-brand-cyan text-brand-dark shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110"
                      : "bg-brand-box border border-white/10 text-slate-400"
                  }`}
                >
                  <Brain className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold leading-none mt-1">GLP-1</span>
                </motion.div>

                {/* Node 2: GIP */}
                <motion.div
                  className={`absolute bottom-6 left-2 w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                    activePathway === 1 || activePathway === null
                      ? "bg-brand-cyan text-brand-dark shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110"
                      : "bg-brand-box border border-white/10 text-slate-400"
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold leading-none mt-1">GIP</span>
                </motion.div>

                {/* Node 3: Glucagón */}
                <motion.div
                  className={`absolute bottom-6 right-2 w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                    activePathway === 2 || activePathway === null
                      ? "bg-brand-cyan text-brand-dark shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110"
                      : "bg-brand-box border border-white/10 text-slate-400"
                  }`}
                >
                  <Flame className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold leading-none mt-1">GCG</span>
                </motion.div>

                {/* Center Node: Cellular Receptor */}
                <motion.div
                  animate={{
                    scale: activePathway !== null ? [1, 1.15, 1] : [1, 1.05, 1],
                    boxShadow: activePathway !== null
                      ? "0 0 30px rgba(6, 182, 212, 0.8)"
                      : "0 0 15px rgba(6, 182, 212, 0.4)"
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-brand-dark border-4 border-brand-cyan flex flex-col items-center justify-center z-10"
                >
                  <Target className="w-6 h-6 text-brand-cyan animate-pulse" />
                  <span className="text-[9px] font-display font-black tracking-tighter uppercase leading-none mt-1">
                    RECEPTOR
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 leading-none">
                    TRIPLE
                  </span>
                </motion.div>
              </div>

              {/* Real-time convergence status readout */}
              <div className="w-full mt-4 p-3 bg-brand-dark/40 rounded-xl border border-white/5 flex items-center justify-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono font-medium text-slate-300">
                  {activePathway !== null
                    ? `Synergy of ${MECHANISM_DATA[activePathway].title} Linked`
                    : "Three pathways active in synergy"
                  }
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
