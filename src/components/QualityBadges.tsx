import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { BADGES } from "../data";

export default function QualityBadges() {
  // Safe helper to render icons
  const renderBadgeIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-7 h-7 text-brand-cyan" />;
    }
    return <Icons.Award className="w-7 h-7 text-brand-cyan" />;
  };

  return (
    <section
      id="badges-section"
      className="relative py-14 bg-brand-box/40 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Grid of 6 Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center items-center">
          {BADGES.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Pulsing & Rotating Icon Frame on Hover */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 shadow-inner"
              >
                {renderBadgeIcon(badge.icon)}
              </motion.div>

              {/* Badge Label */}
              <span className="text-xs font-display font-black tracking-[0.1em] text-white uppercase group-hover:text-brand-cyan transition-colors duration-200">
                {badge.label}
              </span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">
                Certified
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
