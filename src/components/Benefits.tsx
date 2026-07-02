import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { Product } from "../types";

interface BenefitsProps {
  activeProduct: Product;
}

export default function Benefits({ activeProduct }: BenefitsProps) {
  // Safe helper to render Lucide icons dynamically
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-brand-cyan" />;
    }
    return <Icons.Sparkles className="w-8 h-8 text-brand-cyan" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="benefits-section"
      className="relative py-24 bg-brand-dark/30 overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-cyan text-glow-cyan"
          >
            Science that Transforms
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mt-2"
          >
            Key Benefits of <span className="text-brand-cyan text-glow-cyan">{activeProduct.name}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4"
          >
            Clinically researched and proven outcomes designed to optimize cellular performance and systemic health.
          </motion.p>
        </div>

        {/* Dynamic Benefits Grid */}
        <motion.div
          key={activeProduct.id}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {activeProduct.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl bg-brand-box/60 border border-white/5 backdrop-blur-md shadow-lg flex flex-col items-start text-left group transition-all duration-300 hover:border-brand-cyan/30 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-brand-cyan/50 transition-all duration-500" />

              {/* Icon Frame */}
              <div className="w-16 h-16 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-all duration-300 shadow-inner">
                {renderIcon(benefit.icon)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
