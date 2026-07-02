import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { PRODUCTS } from "./data";
import { Product } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Mechanism from "./components/Mechanism";
import HowToUse from "./components/HowToUse";
import SpecsAndPricing from "./components/SpecsAndPricing";
import QualityBadges from "./components/QualityBadges";
import ContactFooter from "./components/ContactFooter";
import MolecularBackground from "./components/MolecularBackground";
import Preloader from "./components/Preloader";
import Cart, { CartItem } from "./components/Cart";

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [activeProductId, setActiveProductId] = useState("retatrutide");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];

  // Cart operations
  const handleAddToCart = (product: Product, isPlan: boolean = false) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (item) => item.product.id === product.id && item.isPlan === isPlan
      );

      if (existingIdx !== -1) {
        // Increment quantity
        const updated = [...prevItems];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        // Add new line item
        return [...prevItems, { product, quantity: 1, isPlan }];
      }
    });

    // Trigger glowing cyan toast alert
    setToastMessage(
      `Added to cart: ${product.name} ${
        isPlan ? "(1-Month Plan)" : "(Standard Vial)"
      }!`
    );
    setCartOpen(true);

    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleUpdateQuantity = (productId: string, isPlan: boolean, delta: number) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.product.id === productId && item.isPlan === isPlan) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string, isPlan: boolean) => {
    setCartItems((prevItems) => {
      return prevItems.filter(
        (item) => !(item.product.id === productId && item.isPlan === isPlan)
      );
    });
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div id="vsc-app-container" className="relative min-h-screen text-slate-100 selection:bg-brand-cyan selection:text-brand-dark">
      {/* 1. Preloader Overlay */}
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}

      {/* 2. Fixed Canvas Backdrop */}
      <MolecularBackground />

      {/* Main Site Container (Visible once loaded) */}
      <div className={`transition-opacity duration-1000 ${preloaderComplete ? "opacity-100" : "opacity-0"}`}>
        {/* 3. Header Top Bar */}
        <Header
          products={PRODUCTS}
          activeProductId={activeProductId}
          onSelectProduct={setActiveProductId}
          onOpenCart={() => setCartOpen(true)}
          cartItemCount={cartItemCount}
        />

        {/* 4. Hero Visual Section */}
        <Hero
          products={PRODUCTS}
          activeProductId={activeProductId}
          onSelectProduct={setActiveProductId}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Benefits Card Section */}
        <Benefits activeProduct={activeProduct} />

        {/* 6. Mechanism of action Section */}
        <Mechanism />

        {/* 7. How To Use Step Timeline */}
        <HowToUse />

        {/* 8. Specifications & Costing Plans Section */}
        <SpecsAndPricing
          activeProduct={activeProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 9. Quality Badges Row Banner */}
        <QualityBadges />

        {/* 10. Contact Social Forms and Footer Section */}
        <ContactFooter />

        {/* 11. Shopping Cart Slide Out Drawer */}
        <Cart
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        {/* 12. Float Action Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              id="cart-toast"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl bg-brand-box border border-brand-cyan/40 shadow-[0_10px_30px_rgba(6,182,212,0.3)] flex items-center gap-3 max-w-sm backdrop-blur-md"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-cyan text-glow-cyan flex-shrink-0 animate-bounce" />
              <div className="text-left">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block leading-none">
                  Order Updated
                </span>
                <p className="text-xs text-white font-medium mt-1">
                  {toastMessage}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 13. Sticky Floating WhatsApp Action Button */}
        <motion.a
          id="sticky-whatsapp-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/15133549941?text=Hello%20VSC%20Peptides,%20I%20am%20interested%20in%20acquiring%20research%20compounds"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.7)] transition-shadow cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
        </motion.a>
      </div>
    </div>
  );
}
