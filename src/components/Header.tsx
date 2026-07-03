import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Menu, X, MessageSquare, ShoppingCart } from "lucide-react";
import { Product } from "../types";
import Logo from "@/assets/images/logo.jpeg";

interface HeaderProps {
  products: Product[];
  activeProductId: string;
  onSelectProduct: (productId: string) => void;
  onOpenCart: () => void;
  cartItemCount: number;
}

export default function Header({
  products,
  activeProductId,
  onSelectProduct,
  onOpenCart,
  cartItemCount,
}: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeProduct = products.find((p) => p.id === activeProductId);

  const handleProductSelect = (id: string) => {
    onSelectProduct(id);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    
    // Smooth scroll to catalog / details
    const el = document.getElementById("hero-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      id="main-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          id="header-logo"
          onClick={() => handleScrollTo("hero-section")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img src= {Logo} alt="logo" className="w-8 h-8 rounded-md" />
            </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8 font-sans">
          <button
            onClick={() => handleScrollTo("hero-section")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>

          {/* Dynamic Dropdown for Products */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-brand-cyan" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-56 rounded-xl bg-brand-box/95 border border-white/10 p-2 shadow-2xl backdrop-blur-xl"
                >
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleProductSelect(p.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeProductId === p.id
                          ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 font-semibold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{p.name}</span>
                        <span className="text-[10px] opacity-75 font-mono">{p.concentration} ({p.vialSize})</span>
                      </div>
                      <span className="text-xs font-mono font-bold">${p.promoPrice} USD</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleScrollTo("mechanism-section")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Research
          </button>
          
          <button
            onClick={() => handleScrollTo("how-to-use-section")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            How to Use
          </button>

          <button
            onClick={() => handleScrollTo("contact-section")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div id="header-actions" className="flex items-center gap-4">
          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-cyan text-brand-dark rounded-full text-[10px] font-mono font-bold flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* WhatsApp / Ordenar CTA */}
          <button
            onClick={() => {
              const el = document.getElementById("pricing-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-[1.03]"
          >
            ORDER NOW
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              <button
                onClick={() => handleScrollTo("hero-section")}
                className="text-left py-2 font-medium text-slate-300 hover:text-white border-b border-white/5 transition-colors"
              >
                Home
              </button>

              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">
                  Our Compounds
                </span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleProductSelect(p.id)}
                      className={`text-left py-2.5 px-3 rounded-lg text-sm flex items-center justify-between ${
                        activeProductId === p.id
                          ? "bg-brand-cyan/10 text-brand-cyan font-bold"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{p.name}</span>
                        <span className="text-[10px] opacity-70 font-mono">{p.concentration}</span>
                      </div>
                      <span className="text-xs font-mono font-semibold">${p.promoPrice} USD</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleScrollTo("mechanism-section")}
                className="text-left py-2 font-medium text-slate-300 hover:text-white border-b border-white/5 transition-colors"
              >
                Research
              </button>

              <button
                onClick={() => handleScrollTo("how-to-use-section")}
                className="text-left py-2 font-medium text-slate-300 hover:text-white border-b border-white/5 transition-colors"
              >
                How to Use
              </button>

              <button
                onClick={() => handleScrollTo("contact-section")}
                className="text-left py-2 font-medium text-slate-300 hover:text-white border-b border-white/5 transition-colors"
              >
                Contact
              </button>

              {/* Order Now button for mobile drawer */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("pricing-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark text-center font-bold text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                ORDER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
