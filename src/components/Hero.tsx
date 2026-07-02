import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, Award, Zap } from "lucide-react";
import { Product } from "../types";

interface HeroProps {
  products: Product[];
  activeProductId: string;
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export default function Hero({
  products,
  activeProductId,
  onSelectProduct,
  onAddToCart,
}: HeroProps) {
  const activeProduct = products.find((p) => p.id === activeProductId) || products[0];

  const handleOrderClick = () => {
    const el = document.getElementById("pricing-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:py-40 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic background glow based on active product */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-cyan/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Product Switcher Tabs */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-brand-box/80 border border-white/5 backdrop-blur-md shadow-lg">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectProduct(p.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-display font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  activeProductId === p.id
                    ? "bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark shadow-[0_4px_15px_rgba(6,182,212,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Interactive Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                {/* Lab Tested Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_rgba(6,182,212,1)]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-brand-cyan text-glow-cyan">
                    LAB TESTED | PURE. POTENT. ELITE.
                  </span>
                </div>

                {/* Subtitle / Concentration */}
                <span className="block text-sm md:text-base font-mono font-semibold tracking-[0.3em] text-slate-400 uppercase mb-1">
                  {activeProduct.vialSize} VIAL | RESEARCH USE ONLY
                </span>

                {/* Large Bold Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 tracking-tight uppercase leading-[0.9] mb-4">
                  {activeProduct.name}{" "}
                  <span className="text-brand-cyan block md:inline text-glow-cyan">
                    {activeProduct.concentration}
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-md sm:text-lg md:text-xl font-display font-semibold text-slate-200 tracking-wider uppercase mb-6 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-brand-cyan" />
                  {activeProduct.type}
                </p>

                {/* Description Paragraph */}
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8">
                  {activeProduct.shortDesc}
                </p>

                {/* Key specs list */}
                <div className="grid grid-cols-2 gap-4 max-w-lg mb-8 bg-brand-box/40 border border-white/5 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                  {activeProduct.idealFor.slice(0, 4).map((spec, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan flex-shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-sans font-medium text-slate-300">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <button
                    onClick={handleOrderClick}
                    className="px-8 py-4.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-3"
                  >
                    ORDER NOW - ${activeProduct.promoPrice} USD
                    <ArrowRight className="w-4 h-4 text-brand-dark" />
                  </button>

                  <button
                    onClick={() => onAddToCart(activeProduct)}
                    className="px-8 py-4.5 rounded-xl bg-brand-box border border-brand-cyan/30 text-white font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:border-brand-cyan hover:bg-brand-cyan/5 hover:scale-[1.03] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    ADD TO CART
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Pulsating Glowing Molecular Rings behind product */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-brand-cyan/10 animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full border border-brand-cyan/5 border-dashed animate-[spin_20s_linear_infinite_reverse] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center"
              >
                {/* Interactive Glassmorphism Showcase Card */}
                <div className="relative w-full rounded-3xl p-4 bg-brand-box/40 border border-white/5 backdrop-blur-md shadow-2xl overflow-hidden group">
                  {/* Glowing neon top rail */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

                  {/* 3D Rendered Product Image */}
                  <div className="relative overflow-hidden rounded-2xl bg-brand-dark/30 aspect-[4/3] flex items-center justify-center shadow-inner">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Interactive glowing hot spot */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-1/4 right-1/2 translate-x-1/2 w-14 h-14 rounded-full bg-brand-cyan/20 blur-md pointer-events-none"
                    />
                  </div>

                  {/* Scientific Badge Metadata */}
                  <div className="mt-4 flex items-center justify-between px-2 text-left">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                        Active Compound
                      </span>
                      <span className="text-sm font-semibold font-display text-white">
                        Lyophilized {activeProduct.name}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                        Certified Purity
                      </span>
                      <span className="text-sm font-mono font-bold text-brand-cyan text-glow-cyan">
                        {activeProduct.purity}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
