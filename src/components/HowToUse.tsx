import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { USAGE_STEPS } from "../data";

export default function HowToUse() {
  // Map icons
  const renderStepIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-white" />;
    }
    return <Icons.Activity className="w-6 h-6 text-white" />;
  };

  const lineVariants = {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.1 * i,
      },
    }),
  };

  return (
    <section
      id="how-to-use-section"
      className="relative py-24 bg-brand-dark/30 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-cyan text-glow-cyan"
          >
            Application Protocol
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mt-2"
          >
            How to Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4"
          >
            Strictly follow technical laboratory reconstitution and handling guidelines to ensure peptide viability and purity.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Desktop connecting glowing line */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-0.5 bg-brand-box z-0">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {USAGE_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                custom={idx}
                variants={stepVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Node circle */}
                <div className="relative mb-6">
                  {/* Outer spinning dash border on hover */}
                  <div className="absolute inset-0 -m-3 rounded-full border border-brand-cyan/20 scale-0 group-hover:scale-100 transition-transform duration-500 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-0 -m-1.5 rounded-full bg-brand-cyan/10 blur-sm scale-0 group-hover:scale-100 transition-transform duration-300" />

                  {/* Circle number */}
                  <div className="w-16 h-16 rounded-full bg-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:shadow-[0_0_25px_rgba(6,182,212,1)] transition-shadow duration-300 relative z-10">
                    {renderStepIcon(step.iconName)}
                    
                    {/* Glowing Step Tag floating */}
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-brand-dark border-2 border-brand-cyan flex items-center justify-center">
                      <span className="text-[11px] font-mono font-bold text-brand-cyan">
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Block */}
                <div className="px-4">
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-wider mb-2 group-hover:text-brand-cyan transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting arrow for mobile (faded out on desktop) */}
                {idx < 4 && (
                  <div className="lg:hidden mt-8 text-brand-cyan animate-pulse">
                    <Icons.ChevronDown className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Ideal For Box Container (Fills the 'Ideal Para' requirement on Image_3) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-10 rounded-3xl bg-brand-box/50 border border-brand-cyan/20 backdrop-blur-md shadow-2xl max-w-4xl mx-auto text-left relative overflow-hidden"
        >
          {/* Subtle decoration block */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-brand-cyan/10 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-4">
                <Icons.Sparkles className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="text-2xl font-display font-black text-white tracking-wide uppercase">
                IDEAL FOR:
              </h3>
              <p className="text-slate-400 text-xs font-mono mt-1 uppercase tracking-widest">
                Usage recommendations
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Icons.CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-slate-200">Advanced fat loss</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-slate-200">Strict appetite control</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-slate-200">Optimize body composition</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-slate-200">Accelerate sluggish metabolism</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <Icons.CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-slate-200">Athletes and active individuals seeking maximum definition</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
