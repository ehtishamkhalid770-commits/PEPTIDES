import { motion } from "motion/react";
import { Check, ClipboardList, Shield, ShoppingCart, HelpCircle } from "lucide-react";
import { Product } from "../types";

interface SpecsAndPricingProps {
  activeProduct: Product;
  onAddToCart: (product: Product, isPlan?: boolean) => void;
}

export default function SpecsAndPricing({
  activeProduct,
  onAddToCart,
}: SpecsAndPricingProps) {
  return (
    <section
      id="pricing-section"
      className="relative py-24 bg-brand-dark/50 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand-cyan text-glow-cyan"
          >
            Compound Acquisition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mt-2"
          >
            Specifications & Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4"
          >
            Review the chemical specification sheet and select the ideal option for your laboratory protocols.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Specifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-brand-box/50 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ClipboardList className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-xl font-display font-black tracking-wide text-white uppercase">
                  TECHNICAL SPECIFICATIONS
                </h3>
              </div>

              <div className="space-y-4">
                {activeProduct.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-white/5 text-sm"
                  >
                    <span className="text-slate-400 font-sans">{spec.label}</span>
                    <span className="text-white font-mono font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/15 flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <span className="text-xs font-mono font-bold text-brand-cyan block uppercase">
                  QUALITY POLICY
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  All VSC Peptides vials undergo high-performance liquid chromatography (HPLC) testing to certify purity levels exceeding 99%.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pricing & Purchase options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* If Retatrutide (Has 2 main promotional plans in the infographic) */}
            {activeProduct.id === "retatrutide" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                
                {/* Plan 1: 1 Month Plan */}
                <div className="bg-brand-box/55 border border-white/5 hover:border-brand-cyan/20 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between relative group overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-brand-cyan/10 border-l border-b border-brand-cyan/25 text-[10px] font-mono font-bold text-brand-cyan">
                    STARTER OFFER
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-brand-cyan tracking-widest block uppercase mb-1">
                      1-MONTH PROTOCOL
                    </span>
                    <h4 className="text-2xl font-display font-black text-white tracking-wide uppercase">
                      4 WEEKS
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mt-2">
                      Ideal for initiating research protocols and evaluating initial metabolic tolerance.
                    </p>

                    {/* Pricing Block */}
                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="text-sm text-slate-500 line-through font-mono">
                        ${activeProduct.monthlyPlanRegularPrice} USD
                      </span>
                      <span className="text-3xl font-mono font-black text-brand-cyan text-glow-cyan">
                        ${activeProduct.monthlyPlanPrice} USD
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono block mt-1">
                      FIRST MONTH EXCLUSIVE PROMO
                    </span>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-cyan" />
                      <span>1-month reconstitution</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-cyan" />
                      <span>Research Grade Purity</span>
                    </div>
                    
                    <button
                      onClick={() => onAddToCart(activeProduct, true)}
                      className="w-full py-3.5 mt-4 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-white font-display font-black text-xs tracking-wider uppercase transition-all duration-300 hover:bg-brand-cyan hover:text-brand-dark hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      ADD TO CART
                    </button>
                  </div>
                </div>

                {/* Plan 2: 30 mg Vial (Stars Plan) */}
                <div className="bg-brand-box/80 border border-brand-cyan/30 hover:border-brand-cyan/60 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(6,182,212,0.1)] group overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-brand-cyan text-brand-dark text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                    BEST VALUE
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-brand-cyan tracking-widest block uppercase mb-1">
                      RETATRUTIDE 30 mg
                    </span>
                    <h4 className="text-2xl font-display font-black text-white tracking-wide uppercase">
                      FULL VIAL
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed mt-2">
                      Extended research and high-duration dosing protocols for peak results.
                    </p>

                    {/* Pricing Block */}
                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="text-sm text-slate-500 line-through font-mono">
                        ${activeProduct.regularPrice} USD
                      </span>
                      <span className="text-4xl font-mono font-black text-white text-glow-cyan">
                        ${activeProduct.promoPrice} USD
                      </span>
                    </div>
                    <span className="text-[10px] text-brand-cyan font-mono block mt-1">
                      DURATION PROMO (Up to 9 weeks)
                    </span>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-brand-cyan" />
                      <span>Provides optimal yield</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-brand-cyan" />
                      <span>Pharmaceutical grade purity</span>
                    </div>

                    <button
                      onClick={() => onAddToCart(activeProduct, false)}
                      className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      ADD TO CART
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              /* For GHK-Cu and BAC Water (Single high-converting pricing card) */
              <div className="bg-brand-box/80 border border-brand-cyan/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full relative shadow-[0_0_30px_rgba(6,182,212,0.05)] overflow-hidden">
                <div className="absolute top-0 right-0 px-6 py-1.5 bg-brand-cyan/10 border-l border-b border-brand-cyan/20 text-xs font-mono font-bold text-brand-cyan uppercase tracking-widest">
                  Active Offer
                </div>

                <div>
                  <span className="text-sm font-mono font-bold text-brand-cyan tracking-widest block uppercase mb-1">
                    {activeProduct.name}
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
                    INDIVIDUAL VIAL | {activeProduct.dosage}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    Acquire this high-purity lyophilized vial, certified under strict international scientific standards.
                  </p>

                  <div className="mt-8 flex items-baseline gap-4">
                    <span className="text-lg text-slate-500 line-through font-mono">
                      ${activeProduct.regularPrice} USD
                    </span>
                    <span className="text-5xl font-mono font-black text-white text-glow-cyan">
                      ${activeProduct.promoPrice} USD
                    </span>
                  </div>
                  <span className="text-xs text-brand-cyan font-mono block mt-2">
                    * {activeProduct.durationText} suggested research duration.
                  </span>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => onAddToCart(activeProduct, false)}
                    className="flex-1 py-4.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-black text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    ADD TO CART
                  </button>
                </div>
              </div>
            )}

            {/* Disclaimer block */}
            <div className="mt-4 p-4 rounded-xl bg-brand-box/30 border border-white/5 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-slate-500" />
                <span className="text-xs text-slate-400 font-sans">
                  Need direct assistance or custom ordering?
                </span>
              </div>
              <a
                href="https://wa.me/15133549941?text=Hello%20VSC%20Peptides,%20I%20am%20interested%20in%20acquiring%20research%20compounds"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-bold text-brand-cyan hover:underline"
              >
                WhatsApp Support
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
